import React from 'react';
import './Banner.scss';
import '../Button/Button.scss';
import '../Typography/Typography.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Banner() {
  const { t } = useTranslation();
  return (
    <div className="image-container">
      <picture>
        <source srcSet="banner/bg-3840.jpg" media="(min-width: 3840px)" />
        <source srcSet="banner/bg-2560.jpg" media="(min-width: 2560px)" />
        <source srcSet="banner/bg-1920.jpg" media="(min-width: 1920px)" />
        <source srcSet="banner/bg-1440.jpg" media="(min-width: 1440px)" />
        <source srcSet="banner/bg-1024.jpg" media="(min-width: 1024px)" />
        <source srcSet="banner/bg-992.jpg" media="(min-width: 992px)" />
        <source srcSet="banner/bg-768.jpg" media="(min-width: 768px)" />
        <source srcSet="banner/bg-320.jpg" media="(min-width: 320px)" />
        <img src="banner/bg-320.jpg" alt="" />
      </picture>
      <div className="banner-container">
        <div className="banner-text container">
          <div className="text-block">
            <h1 className="heading-1-desktop">
              {t('TestAssignment.1')}
            </h1>
            <p className="paragraph-1">
              {t('KindlyRemind.1')}
              <span className="desktop-visible">
                {t('KindlyRemind.2')}
              </span>
            </p>
            <Link to="/registration"><button type="button" className="primary">{t('SignUp.1')}</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
