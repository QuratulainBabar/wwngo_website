import { useLanguage } from '../../context/LanguageContext';

type Props = {
  className?: string;
  variant?: 'default' | 'cta' | 'footer';
};

export function StoreBadges({ className = '', variant = 'default' }: Props) {
  const { lang, t } = useLanguage();
  const playUrl = import.meta.env.VITE_PLAY_STORE_URL as string | undefined;
  const appStoreUrl = import.meta.env.VITE_APP_STORE_URL as string | undefined;

  const playBadge = lang === 'fr' ? '/badges/google-play-fr.png' : '/badges/google-play-en.png';
  const appleBadge = lang === 'fr' ? '/badges/app-store-fr.svg' : '/badges/app-store-en.svg';

  if (variant === 'footer') {
    const play = (
      <span className="store-footer-btn">{t.common.getOnGooglePlay}</span>
    );
    const apple = (
      <span className="store-footer-btn">{t.common.downloadOnAppStore}</span>
    );
    return (
      <div className={`store-footer ${className}`}>
        {playUrl ? (
          <a href={playUrl} target="_blank" rel="noopener noreferrer" aria-label={t.common.getOnGooglePlay}>
            {play}
          </a>
        ) : (
          <span title={t.common.storeLinkPlaceholder}>{play}</span>
        )}
        {appStoreUrl ? (
          <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" aria-label={t.common.downloadOnAppStore}>
            {apple}
          </a>
        ) : (
          <span title={t.common.storeLinkPlaceholder}>{apple}</span>
        )}
      </div>
    );
  }

  if (variant === 'cta') {
    const playLabel = lang === 'fr' ? ['Disponible sur', 'Google Play'] : ['Get it on', 'Google Play'];
    const appleLabel = lang === 'fr' ? ['Télécharger dans', "l'App Store"] : ['Download on the', 'App Store'];

    const playInner = (
      <>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M5 3.5v17l14-8.5L5 3.5Z" />
        </svg>
        <span className="store-cta__copy">
          <span className="store-cta__eyebrow">{playLabel[0]}</span>
          <span className="store-cta__name">{playLabel[1]}</span>
        </span>
      </>
    );

    const appleInner = (
      <>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
          <path d="M10.5 18.5h3" />
        </svg>
        <span className="store-cta__copy">
          <span className="store-cta__eyebrow">{appleLabel[0]}</span>
          <span className="store-cta__name">{appleLabel[1]}</span>
        </span>
      </>
    );

    return (
      <div className={`store-cta ${className}`}>
        {playUrl ? (
          <a className="store-cta__btn store-cta__btn--dark" href={playUrl} target="_blank" rel="noopener noreferrer" aria-label={t.common.getOnGooglePlay}>
            {playInner}
          </a>
        ) : (
          <span className="store-cta__btn store-cta__btn--dark" title={t.common.storeLinkPlaceholder}>
            {playInner}
          </span>
        )}
        {appStoreUrl ? (
          <a className="store-cta__btn store-cta__btn--light" href={appStoreUrl} target="_blank" rel="noopener noreferrer" aria-label={t.common.downloadOnAppStore}>
            {appleInner}
          </a>
        ) : (
          <span className="store-cta__btn store-cta__btn--light" title={t.common.storeLinkPlaceholder}>
            {appleInner}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={`store-badges ${className}`}>
      {playUrl ? (
        <a href={playUrl} target="_blank" rel="noopener noreferrer" aria-label={t.common.getOnGooglePlay}>
          <img className="play" src={playBadge} alt={t.common.getOnGooglePlay} />
        </a>
      ) : (
        <span className="store-placeholder" title={t.common.storeLinkPlaceholder}>
          {t.common.getOnGooglePlay}
        </span>
      )}
      {appStoreUrl ? (
        <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" aria-label={t.common.downloadOnAppStore}>
          <img src={appleBadge} alt={t.common.downloadOnAppStore} />
        </a>
      ) : (
        <span className="store-placeholder" title={t.common.storeLinkPlaceholder}>
          {t.common.downloadOnAppStore}
        </span>
      )}
    </div>
  );
}
