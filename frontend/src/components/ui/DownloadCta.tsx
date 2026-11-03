import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { StoreBadges } from './StoreBadges';

export function DownloadCta() {
  const { t } = useLanguage();

  return (
    <section className="section section--brand">
      <div className="container download-cta">
        <div>
          <p className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.75)' }}>
            {t.common.appLabel}
          </p>
          <h2 className="section-title">{t.common.downloadTitle}</h2>
          <p className="section-lead">{t.common.downloadLead}</p>
        </div>
        <div className="download-cta__actions">
          <StoreBadges />
          <Link className="btn btn--light" to="/download">
            {t.nav.downloadApp}
          </Link>
        </div>
      </div>
    </section>
  );
}
