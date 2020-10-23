import React from 'react';
import './Banner.scss';
import '../Button/Button.scss';
import '../Typography/Typography.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Banner() {
  const { t } = useTranslation();
  return (
    <div className="main-banner">
      <div className="container">
        <div className="text-block">
          <div>
            <h1 className="heading-1-desktop">
              {t('TestAssignment.1')}
            </h1>
          </div>
          <div className="main-text">
            <p className="paragraph-1">
              <p className="all-visible">{t('KindlyRemind.1')}</p>
              <span className="desktop-visible">
                {t('KindlyRemind.2')}
              </span>
            </p>
          </div>
          <div>
            <Link to="/registration#form"><button type="button" className="primary">{t('SignUp.1')}</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
