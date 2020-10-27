import React from 'react';
import './Tools.scss';
import { useTranslation } from 'react-i18next';
import HashLinkObserver from 'react-hash-link';
import { ReactComponent as JsLogo } from './images/javascript.svg';
import { ReactComponent as CssLogo } from './images/css.svg';
import { ReactComponent as HtmlLogo } from './images/html.svg';

export default function Tools() {
  const { t } = useTranslation();

  return (
    <div className="tools-container">
      <HashLinkObserver smoothScroll={false} />
      <div className="container">
        <div className="heading-holder">
          <h2 className="heading-2-desktop">
            {t('AboutRelationships.1')}
          </h2>
        </div>
        <div className="tools-content">
          <div>
            <div className="svg-holder html-svg-holder"><HtmlLogo /></div>
            <div>
              <h3 className="heading-3-desktop">{t('html.1')}</h3>
              <p className="paragraph-2">
                {t('html.2')}
              </p>
            </div>
          </div>
          <div className="css-block">
            <div className="svg-holder">
              <CssLogo />
            </div>

            <div>
              <h3 className="heading-3-desktop">{t('css.1')}</h3>
              <p className="paragraph-2">
                {t('css.2')}
              </p>
            </div>
          </div>
          <div className="js-block">
            <div className="svg-holder"><JsLogo /></div>
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
