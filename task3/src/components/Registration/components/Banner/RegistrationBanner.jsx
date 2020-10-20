import React from 'react';
import { useTranslation } from 'react-i18next';
import './RegistrationBanner.scss';

export default function RegistrationBanner() {
  const { t } = useTranslation();
  return (
    <div className="reg-banner">
      <div className="container">
        <div className="registration-text-block">
          <h1 className="heading-2-desktop">
            {t('reg-banner.1')}
          </h1>
          <div className="registration-banner-content">
            <div className="paragraphs-banner">
              <p className="paragraph-2">{t('reg-banner.2')}</p>
              <p className="paragraph-2">{t('reg-banner.3')}</p>
              <p className="paragraph-2">{t('reg-banner.4')}</p>
            </div>
            <div className="image-container">
              <picture>
                <source srcSet="images/man-laptop-v1.svg" media="(min-width: 320px) and (min-width: 1024px)" />
                <source srcSet="images/man-laptop-v2.svg" media="(min-width: 500px)" />
                <img src="images/man-laptop-v1.svg" alt="Man from registration page" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
