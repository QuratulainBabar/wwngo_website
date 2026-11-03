import { Link } from 'react-router-dom';
import { Reveal } from '../components/ui/Reveal';
import { useLanguage } from '../context/LanguageContext';
import '../styles/home.css';
import '../styles/about.css';

function ArrowIcon() {
  return (
    <svg className="h-4 w-4" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M10.3 4.3a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4-1.4L13.6 11H4a1 1 0 1 1 0-2h9.6l-3.3-3.3a1 1 0 0 1 0-1.4Z" />
    </svg>
  );
}

function accentSerif(text: string, accent: string) {
  const idx = text.lastIndexOf(accent);
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <em className="serif-accent">{accent}</em>
      {text.slice(idx + accent.length)}
    </>
  );
}

export function About() {
  const { t, lang } = useLanguage();
  const a = t.about;

  const titleAccent = 'WWNGO';
  const valuesAccent = lang === 'fr' ? 'valeurs' : 'stand for';

  return (
    <div className="about-page">
      {/* First section kept */}
      <section className="home-panel home-panel--dark about-hero" aria-label="About hero">
        <div className="about-hero__bg" aria-hidden="true" />
        <div className="about-hero__inner">
          <Reveal>
            <p className="home-eyebrow home-eyebrow--dark">
              <span className="home-eyebrow__num">01</span>
              {a.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="about-hero__title">{accentSerif(a.title, titleAccent)}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="about-hero__lead">{a.lead}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="about-hero__ctas">
              <Link className="home-btn-pill home-btn-pill--brand" to="/download">
                {a.ctaDownload}
                <span className="home-btn-pill__icon">
                  <ArrowIcon />
                </span>
              </Link>
              <Link className="home-btn-pill home-btn-pill--outline-light" to="/how-it-works">
                {a.ctaHow}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission: editorial prose column */}
      <section className="home-panel home-panel--white about-mission" aria-labelledby="mission-title">
        <div className="about-mission__wrap">
          <Reveal className="about-mission__meta">
            <p className="about-kicker">{a.missionEyebrow}</p>
            <span className="about-mission__rule" aria-hidden="true" />
          </Reveal>
          <Reveal delay={0.06}>
            <h2 id="mission-title" className="about-mission__title">
              {a.missionTitle}
            </h2>
            <p className="about-mission__body">{a.missionBody}</p>
          </Reveal>
        </div>
      </section>

      {/* Vision: full-width statement */}
      <section className="home-panel about-vision" aria-labelledby="vision-title">
        <div className="about-vision__inner">
          <Reveal>
            <p className="about-kicker about-kicker--on-brand">{a.visionEyebrow}</p>
            <h2 id="vision-title" className="about-vision__title">
              {a.visionTitle}
            </h2>
            <blockquote className="about-vision__quote">{a.visionBody}</blockquote>
          </Reveal>
        </div>
      </section>

      {/* Marketplace model: contrast framing */}
      <section className="home-panel home-panel--white about-model" aria-labelledby="marketplace-title">
        <div className="about-model__wrap">
          <Reveal className="about-model__intro">
            <p className="about-kicker">{a.marketplaceEyebrow}</p>
            <h2 id="marketplace-title" className="about-model__title">
              {a.marketplaceTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="about-model__body-block">
            <p className="about-model__body">{a.marketplaceBody}</p>
            <div className="about-model__contrast">
              <div className="about-model__side about-model__side--out">
                <p className="about-model__label">{a.marketplaceOutLabel}</p>
                <ul>
                  {a.marketplaceOutItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="about-model__side about-model__side--in">
                <p className="about-model__label">{a.marketplaceInLabel}</p>
                <ul>
                  {a.marketplaceInItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values: stacked numbered rows */}
      <section className="home-panel home-panel--lilac about-values" aria-labelledby="values-title">
        <div className="about-values__wrap">
          <Reveal className="about-values__head">
            <p className="about-kicker">{a.valuesEyebrow}</p>
            <h2 id="values-title" className="about-values__title">
              {accentSerif(a.valuesTitle, valuesAccent)}
            </h2>
          </Reveal>
          <ol className="about-values__list">
            {a.values.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 0.05} className="about-values__row">
                <span className="about-values__index">{String(i + 1).padStart(2, '0')}</span>
                <div className="about-values__copy">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* App-only note + compact close */}
      <section className="home-panel home-panel--white about-note" aria-labelledby="app-only-title">
        <div className="about-note__wrap">
          <Reveal className="about-note__card">
            <div className="about-note__copy">
              <p className="about-kicker">{a.appOnlyEyebrow}</p>
              <h2 id="app-only-title">{a.appOnlyTitle}</h2>
              <p>{a.appOnlyBody}</p>
            </div>
            <Link className="home-btn-pill home-btn-pill--ink" to="/download">
              {a.ctaDownload}
              <span className="home-btn-pill__icon">
                <ArrowIcon />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
