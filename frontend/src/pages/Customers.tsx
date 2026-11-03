import { Accordion } from '../components/ui/Accordion';
import { DownloadCta } from '../components/ui/DownloadCta';
import { PageHero } from '../components/ui/PageHero';
import { useLanguage } from '../context/LanguageContext';

export function Customers() {
  const { t } = useLanguage();
  const page = t.customers;

  return (
    <>
      <PageHero title={page.title} lead={page.lead} />
      <section className="section">
        <div className="container fade-up">
          <h2 className="section-title">{page.journeyTitle}</h2>
          <div className="steps">
            {page.steps.map((step) => (
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
        <div className="container fade-up">
          <h2>{page.benefitsTitle}</h2>
          <div className="grid-2">
            {page.benefits.map((b) => (
              <div className="feature-tile" key={b.title}>
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container fade-up">
          <h2>{page.faqTitle}</h2>
          <Accordion items={page.faqs} />
        </div>
      </section>
      <DownloadCta />
    </>
  );
}
