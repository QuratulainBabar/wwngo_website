import { PageHero } from '../components/ui/PageHero';
import { DownloadCta } from '../components/ui/DownloadCta';
import { useLanguage } from '../context/LanguageContext';

export function Features() {
  const { t } = useLanguage();
  const f = t.features;

  return (
    <>
      <PageHero title={f.title} lead={f.lead} />
      {f.groups.map((group) => (
        <section className="section section--tight" key={group.title}>
          <div className="container fade-up">
            <h2 className="section-title">{group.title}</h2>
            <div className="grid-2">
              {group.items.map((item) => (
                <div className="feature-tile" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
      <DownloadCta />
    </>
  );
}
