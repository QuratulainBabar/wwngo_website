import { useState, type FormEvent } from 'react';
import { PageHero } from '../components/ui/PageHero';
import { useLanguage } from '../context/LanguageContext';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  inquiryType: string;
};

const initialForm: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
  inquiryType: 'general',
};

function getApiBase() {
  const url = import.meta.env.VITE_API_URL as string | undefined;
  return (url ?? 'http://localhost:5000').replace(/\/$/, '');
}

export function Contact() {
  const { t } = useLanguage();
  const c = t.contact;
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = t.common.required;
    if (!form.email.trim()) next.email = t.common.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = t.common.required;
    if (!form.subject.trim()) next.subject = t.common.required;
    if (!form.message.trim()) next.message = t.common.required;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('idle');
    if (!validate()) return;

    setStatus('loading');
    try {
      const res = await fetch(`${getApiBase()}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
          inquiryType: form.inquiryType,
        }),
      });
      if (!res.ok) throw new Error('Request failed');
      setForm(initialForm);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <PageHero title={c.title} lead={c.lead} />
      <section className="section">
        <div className="container contact-layout fade-up">
          <div>
            <h2>{c.formTitle}</h2>
            <p>{c.formLead}</p>
            <form className="form-grid" onSubmit={onSubmit} noValidate>
              <div className="form-row">
                <label htmlFor="contact-name">{t.common.name} *</label>
                <input
                  id="contact-name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={t.common.placeholderName}
                />
                {errors.name ? <span className="form-error">{errors.name}</span> : null}
              </div>
              <div className="form-row">
                <label htmlFor="contact-email">{t.common.email} *</label>
                <input
                  id="contact-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder={t.common.placeholderEmail}
                />
                {errors.email ? <span className="form-error">{errors.email}</span> : null}
              </div>
              <div className="form-row">
                <label htmlFor="contact-type">{t.common.inquiryType}</label>
                <select
                  id="contact-type"
                  value={form.inquiryType}
                  onChange={(e) => setForm({ ...form, inquiryType: e.target.value })}
                >
                  <option value="general">{t.common.inquiryGeneral}</option>
                  <option value="support">{t.common.inquirySupport}</option>
                  <option value="business">{t.common.inquiryBusiness}</option>
                  <option value="press">{t.common.inquiryPress}</option>
                </select>
              </div>
              <div className="form-row">
                <label htmlFor="contact-subject">{t.common.subject} *</label>
                <input
                  id="contact-subject"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder={t.common.placeholderSubject}
                />
                {errors.subject ? <span className="form-error">{errors.subject}</span> : null}
              </div>
              <div className="form-row">
                <label htmlFor="contact-message">{t.common.message} *</label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={t.common.placeholderMessage}
                />
                {errors.message ? <span className="form-error">{errors.message}</span> : null}
              </div>
              {status === 'success' ? <div className="form-success">{t.common.successContact}</div> : null}
              {status === 'error' ? <div className="form-error">{t.common.errorContact}</div> : null}
              <button className="btn btn--primary" type="submit" disabled={status === 'loading'}>
                {status === 'loading' ? '…' : t.common.sendMessage}
              </button>
            </form>
          </div>
          <aside className="contact-aside">
            <h3>{c.officeTitle}</h3>
            <p>
              <strong>{t.footer.supportEmail}:</strong> {t.footer.supportEmailPlaceholder}
            </p>
            <p>
              <strong>{t.footer.businessEmail}:</strong> {t.footer.businessEmailPlaceholder}
            </p>
            <p>
              <strong>{c.phoneLabel}:</strong> {c.phonePlaceholder}
            </p>
            <p>
              <strong>{t.footer.address}:</strong> {t.footer.addressPlaceholder}
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
