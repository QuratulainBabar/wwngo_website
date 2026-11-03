import { PageHero } from '../components/ui/PageHero';
import { DownloadCta } from '../components/ui/DownloadCta';
import { useLanguage } from '../context/LanguageContext';

export function HowItWorks() {
  const { t } = useLanguage();
  const w = t.howItWorks;

  return (
    <>
      <PageHero title={w.title} lead={w.lead} />
      <section className="section">
        <div className="container fade-up">
          <div className="section-head">
            <h2 className="section-title">{w.flowTitle}</h2>
            <p className="section-lead">{w.flowLead}</p>
          </div>
          <div className="flow-visual" aria-label={w.flowTitle}>
            <span>{t.nav.forCustomers}</span>
            <span className="flow-arrow">→</span>
            <span>{t.nav.forTravelers}</span>
            <span className="flow-arrow">→</span>
            <span>{t.nav.forReceivers}</span>
          </div>
          <div className="steps">
            {w.steps.map((step) => (
              <article className="step" key={step.title}>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--tight" style={{ background: 'var(--surface-alt)' }}>
        <div className="container grid-3 fade-up">
          <div className="feature-tile">
            <h3>{w.escrowTitle}</h3>
            <p>{w.escrowBody}</p>
          </div>
          <div className="feature-tile">
            <h3>{w.nfcTitle}</h3>
            <p>{w.nfcBody}</p>
          </div>
          <div className="feature-tile">
            <h3>{w.paymentTitle}</h3>
            <p>{w.paymentBody}</p>
          </div>
        </div>
      </section>
      <DownloadCta />
    </>
  );
}
