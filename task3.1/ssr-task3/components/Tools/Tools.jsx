import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './tools.module.scss';

export default function Tools() {
  const { t } = useTranslation();

  return (
    <div className={styles.toolsContainer}>
      <div className="container">
        <div className={styles.headingHolder}>
          <h2 className="heading-2-desktop">
            {t('AboutRelationships.1')}
          </h2>
        </div>
        <div className={styles.toolsContent}>
          <div>
            <div className={`${styles.svgHolder} ${styles.htmlSvgHolder}`}>
              <svg width="100px" height="114px" viewBox="0 0 100 114" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>html</title>
                <desc>Created with Sketch.</desc>
                <defs />
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="html" fillRule="nonzero">
                    <polygon id="Shape" fill="#E44D26" points="100 0 90.89 102.06 49.94 113.41 9.1 102.07 0 0" />
                    <polygon id="Shape" fill="#F16529" points="50 104.73 83.09 95.56 90.88 8.35 50 8.35" />
                    <path d="M32.29,33.38 L50,33.38 L50,20.87 L18.61,20.87 L18.91,24.22 L22,58.72 L50,58.72 L50,46.2 L33.43,46.2 L32.29,33.38 Z M35.11,65 L22.54,65 L24.3,84.64 L49.94,91.76 L50,91.76 L50,78.76 L36,75 L35.11,65 Z" id="Shape" fill="#EBEBEB" />
                    <path d="M50,58.72 L65.37,58.72 L63.92,75 L50,78.73 L50,91.73 L75.66,84.62 L75.85,82.5 L78.79,49.55 L79.1,46.18 L50,46.18 L50,58.72 Z M50,33.35 L80.2,33.35 L80.45,30.54 L81,24.22 L81.3,20.87 L50,20.87 L50,33.35 Z" id="Shape" fill="#FFFFFF" />
                  </g>
                </g>
              </svg>
            </div>
            <div>
              <h3 className="heading-3-desktop">{t('html.1')}</h3>
              <p className="paragraph-2">
                {t('html.2')}
              </p>
            </div>
          </div>
          <div className={styles.cssBlock}>
            <div className={styles.svgHolder}>
              <svg width="100px" height="114px" viewBox="0 0 100 114" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>css</title>
                <desc>Created with Sketch.</desc>
                <defs />
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="css" fillRule="nonzero">
                    <polygon id="Shape" fill="#264DE4" points="49.94 113.41 9.1 102.07 0 0 100 0 90.89 102.06" />
                    <polygon id="Shape" fill="#2965F1" points="83.09 95.56 90.88 8.35 50 8.35 50 104.73" />
                    <path d="M20.86,46.2 L22,58.72 L50,58.72 L50,46.2 L20.86,46.2 Z M18.61,20.87 L19.75,33.38 L50,33.38 L50,20.87 L18.61,20.87 Z M50,78.72 L36,75 L35.11,65 L22.54,65 L24.3,84.64 L49.94,91.76 L50,91.76 L50,78.72 Z" id="Shape" fill="#EBEBEB" />
                    <polygon id="Shape" fill="#FFFFFF" points="79.06 46.2 81.32 20.87 50 20.87 50 33.38 67.6 33.38 66.46 46.2 50 46.2 50 58.72 65.37 58.72 63.92 75 50 78.73 50 91.73 75.66 84.62 75.85 82.5 78.79 49.55 79.1 46.18" />
                  </g>
                </g>
              </svg>
            </div>

            <div>
              <h3 className="heading-3-desktop">{t('css.1')}</h3>
              <p className="paragraph-2">
                {t('css.2')}
              </p>
            </div>
          </div>
          <div className={styles.jsBlock}>
            <div className={styles.svgHolder}>
              <svg width="100px" height="114px" viewBox="0 0 100 114" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>javascript</title>
                <desc>Created with Sketch.</desc>
                <defs />
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="javascript" fillRule="nonzero">
                    <path d="M9.28,102.18 L0,0 L100,0 L90.8,102.11 L49.92,113.65 L9.28,102.18 Z M83.28,96.61 L91,9.09 L50.08,9.09 L50.39,105.62 L83.28,96.61 Z M46.28,21.92 L36.31,21.92 L36.19,74.3 L16.89,69 L16.89,81 L46.22,88.91 L46.22,21.91 L46.28,21.92 Z" id="path5113" fill="#D4B830" />
                    <path d="M43,88 C41.71,87.61 35.36,85.89 28.88,84.14 L17.12,80.93 L17.12,75 C17.12,69.23 17.12,69.11 17.71,69.3 C18.02,69.42 22.31,70.59 27.22,71.96 L36.15,74.41 L36.23,48.28 L36.31,22.15 L46.06,22.15 L46.06,55.42 C46.06,81.83 45.98,88.65 45.71,88.65 C45.44,88.65 44.27,88.3 43,88 Z" id="path5159" fillOpacity="0" fill="#EBEBEB" opacity="0.99" />
                    <path d="M16.93,81 L16.93,69 C16.93,69 29.25,72.47 36.23,74.27 L36.31,22 L46.26,22 L46.26,89 L16.93,81 Z" id="path5157" fillOpacity="0.92" fill="#EBEBEB" opacity="0.99" />
                    <path d="M50.08,9.05 L91,9.05 L83.27,96.57 L50.08,105.57 L50.08,9.05 Z M81.16,81.9 L83.85,49.18 L64,51.4 L64,33.93 L85.22,33.85 L86,21.92 L54,22.07 L54.43,65.52 L73.77,62.21 L73.5,71.88 L54,77.07 L54.19,88.92 L81.14,81.92 L81.16,81.9 Z" id="path5117" fill="#FDD83C" />
                  </g>
                </g>
              </svg>
            </div>
            <div>
              <h3 className="heading-3-desktop">{t('js.1')}</h3>
              <p className="paragraph-2">
                {t('js.2')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
