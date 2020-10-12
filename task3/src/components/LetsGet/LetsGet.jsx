import React from 'react';
import { Link } from 'react-router-dom';
import './LetsGet.scss';
import '../Typography/Typography.css';
import { useTranslation } from 'react-i18next';

export default function LetsGetComponent() {
  const { t } = useTranslation();

  return (
    <div className="lets-container">
      <div className="container">
        <h2 id="about" className="heading-2-desktop">{t('LetsGet.1')}</h2>
        <div className="lets-block">
          <div className="lets-image-holder">
            <picture>
              <source srcSet="images/man-cool.svg" />
              <img src="images/man-cool.svg" alt="Cool man from lets get as block" />
            </picture>
          </div>
          <div className="lets-text-block">
            <h4 className="heading-3-desktop">{t('Cool.1')}</h4>
            <p className="paragraph-2">
              {t('Looking.1')}
            </p>
            <p className="paragraph-2">
              {t('Looking.2')}
            </p>
            <Link to="/registration" className="text-link" rel="stylesheet">{t('SignUp.1')}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
