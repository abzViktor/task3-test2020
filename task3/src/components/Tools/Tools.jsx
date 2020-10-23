import React from 'react';
import './Tools.scss';
import { useTranslation } from 'react-i18next';
import HashLinkObserver from 'react-hash-link';

export default function Tools() {
  const { t } = useTranslation();

  return (
    <div className="tools-container">
      <div className="anchor-holder"><span id="relation" /></div>
      <HashLinkObserver smoothScroll={false} />
      <div className="container">
        <div className="heading-holder">
          <h2 className="heading-2-desktop">
            {t('AboutRelationships.1')}
          </h2>
        </div>
        <div className="tools-content">
          <div>
            <img src="https://source-task3-test2020viktor-p.abzdev2.com/images/html.svg" alt="Html icon" />
            <div>
              <h3 className="heading-3-desktop">{t('html.1')}</h3>
              <p className="paragraph-2">
                {t('html.2')}
              </p>
            </div>
          </div>
          <div className="css-block">
            <img src="https://source-task3-test2020viktor-p.abzdev2.com/images/css.svg" alt="Css icon" />
            <div>
              <h3 className="heading-3-desktop">{t('css.1')}</h3>
              <p className="paragraph-2">
                {t('css.2')}
              </p>
            </div>
          </div>
          <div className="js-block">
            <img src="https://source-task3-test2020viktor-p.abzdev2.com/images/javascript.svg" alt="Java Script icon" />
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
