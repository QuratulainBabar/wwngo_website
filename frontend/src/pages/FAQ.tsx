import { Accordion } from '../components/ui/Accordion';
import { PageHero } from '../components/ui/PageHero';
import { DownloadCta } from '../components/ui/DownloadCta';
import { useLanguage } from '../context/LanguageContext';

export function FAQ() {
  const { t } = useLanguage();
  const f = t.faq;

  return (
    <>
      <PageHero title={f.title} lead={f.lead} />
      <section className="section">
        <div className="container fade-up">
          {f.categories.map((cat) => (
            <div className="faq-category" key={cat.id}>
              <h2>{cat.title}</h2>
              <Accordion items={cat.items} />
            </div>
          ))}
        </div>
      </section>
      <DownloadCta />
    </>
  );
}
