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
        <source srcSet="banner/bg-3840-x2.webp 2x ,banner/bg-3840.webp 1x" media="(min-width: 3840px)" type="image/webp" />
        <source srcSet="banner/bg-3840-x2.jpg 2x ,banner/bg-3840.jpg 1x" media="(min-width: 3840px)" type="image/jpeg" />

        <source srcSet="banner/bg-2560-x2.webp 2x ,banner/bg-2560.webp 1x" media="(min-width: 2560px)" type="image/webp" />
        <source srcSet="banner/bg-2560-x2.jpg 2x ,banner/bg-2560.jpg 1x" media="(min-width: 2560px)" type="image/jpeg" />

        <source srcSet="banner/bg-1920-x2.webp 2x ,banner/bg-1920.webp 1x" media="(min-width: 1920px)" type="image/webp" />
        <source srcSet="banner/bg-1920-x2.jpg 2x ,banner/bg-1920.jpg 1x" media="(min-width: 1920px)" type="image/jpeg" />

        <source srcSet="banner/bg-1440-x2.webp 2x ,banner/bg-1440.webp 1x" media="(min-width: 1440px)" type="image/webp" />
        <source srcSet="banner/bg-1440-x2.jpg 2x ,banner/bg-1440.jpg 1x" media="(min-width: 1440px)" type="image/jpeg" />

        <source srcSet="banner/bg-1024-x2.webp 2x ,banner/bg-1024.webp 1x" media="(min-width: 1024px)" type="image/webp" />
        <source srcSet="banner/bg-1024-x2.jpg 2x ,banner/bg-1024.jpg 1x" media="(min-width: 1024px)" type="image/jpeg" />

        <source srcSet="banner/bg-992-x2.webp 2x ,banner/bg-992.webp 1x" media="(min-width: 992px)" type="image/webp" />
        <source srcSet="banner/bg-992-x2.jpg 2x ,banner/bg-992.jpg 1x" media="(min-width: 992px)" type="image/jpeg" />

        <source srcSet="banner/bg-768-x2.webp 2x ,banner/bg-768.webp 1x" media="(min-width: 768px)" type="image/webp" />
        <source srcSet="banner/bg-768-x2.jpg 2x ,banner/bg-768.jpg 1x" media="(min-width: 768px)" type="image/jpeg" />

        <source srcSet="banner/bg-320-x2.webp 2x ,banner/bg-320.webp 1x" media="(min-width: 320px)" type="image/webp" />
        <source srcSet="banner/bg-320-x2.jpg 2x ,banner/bg-320.jpg 1x" media="(min-width: 320px)" type="image/jpeg" />
        <img src="banner/bg-1024.jpg" alt="Main banner of home page" />
      </picture>
      <div className="banner-container">
        <div className="banner-text container">
          <div className="text-block">
            <div>
              <h1 className="heading-1-desktop">
                {t('TestAssignment.1')}
              </h1>
            </div>
            <div>
              {' '}
              <p className="paragraph-1">
                <p className="all-visible">{t('KindlyRemind.1')}</p>
                <span className="desktop-visible">
                  {t('KindlyRemind.2')}
                </span>
              </p>
            </div>
            <div>
              {' '}
              <Link to="/registration#form"><button type="button" className="primary">{t('SignUp.1')}</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
