import { Link } from 'react-router-dom';
import { PageHero } from '../components/ui/PageHero';
import { DownloadCta } from '../components/ui/DownloadCta';
import { useLanguage } from '../context/LanguageContext';

export function Safety() {
  const { t } = useLanguage();
  const s = t.safety;

  return (
    <>
      <PageHero title={s.title} lead={s.lead} />
      <section className="section">
        <div className="container fade-up">
          {s.sections.map((section) => (
            <article key={section.title} style={{ marginBottom: '2.5rem' }}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
              {section.bullets ? (
                <ul className="check-list" style={{ marginTop: '0.5rem' }}>
                  {section.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
          <Link className="btn btn--outline" to="/legal/safety-rules">
            {t.footer.safetyRules}
          </Link>
        </div>
      </section>
      <DownloadCta />
    </>
  );
}
