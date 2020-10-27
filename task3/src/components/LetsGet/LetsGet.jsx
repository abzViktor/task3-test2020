import React from 'react';
import { Link } from 'react-router-dom';
import './LetsGet.scss';
import { useTranslation } from 'react-i18next';
import HashLinkObserver from 'react-hash-link';

import { ReactComponent as ManCool } from './images/man-cool.svg';

export default function LetsGetComponent() {
  const { t } = useTranslation();

  return (

    <div className="lets-container">
      <HashLinkObserver smoothScroll={false} />
      <div className="container">
        <h2 className="heading-2-desktop">{t('LetsGet.1')}</h2>
        <div className="lets-block">
          <div className="lets-image-holder">
            <ManCool />
          </div>
          <div className="lets-text-block">
            <h3 className="heading-3-desktop">{t('Cool.1')}</h3>
            <p className="paragraph-2 middle-text">
              {t('Looking.1')}
            </p>
            <p className="paragraph-2 bottom-text">
              {t('Looking.2')}
            </p>
            <Link to="/registration#form" className="text-link" rel="stylesheet">{t('SignUp.1')}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
