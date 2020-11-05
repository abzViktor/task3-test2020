import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Divider from '@material-ui/core/Divider';
import PlaceholderImage from '../../../assets/placeholders/Ellipse_1.svg';
import PlaceholderName from '../../../assets/placeholders/Rounded_Rectangle_2.svg';
import PlaceholderEmail from '../../../assets/placeholders/Rounded_Rectangle_3.svg';

export default function MobileMenu(props) {
  const { isUserLoaded, user, toggleMenu } = props;
  const { t } = useTranslation();

  return (
    <>
      <div className="sideMenu opened">

        {isUserLoaded && (
        <>
          <div className="side-menu-container-contacts">
            <div><img width="70" onError={(e) => { e.target.onerror = null; e.target.src = 'https://source-task3-test2020viktor-p.abzdev2.com/cover-icon-user.svg'; }} height="70" className="header-avatar-mob" src={user.photo} alt="avatar icon" /></div>
            <div><span className="mob-name">{user.name}</span></div>
            <div><a href={`mailto:${user.email}`}>{user.email}</a></div>
          </div>
        </>
        )}
        {!isUserLoaded && (
        <div className="side-menu-container-contacts">
          <div><PlaceholderImage /></div>
          <div><span className="name"><PlaceholderName /></span></div>
          <div><a href="mailto:Superstar@gmail.com"><PlaceholderEmail /></a></div>
        </div>
        )}
        <Divider />
        <div className="side-menu-container-nav">
          <nav>
            <ul>
              <li><a href="/#about" onClick={toggleMenu(false)} className="primary">{t('About.1')}</a></li>
              <li><a href="/#relation" onClick={toggleMenu(false)} className="primary">{t('Relationships.1')}</a></li>
              <li><a href="/#users" onClick={toggleMenu(false)} className="primary">{t('Users.1')}</a></li>
              <li><a href="/registration#form" onClick={toggleMenu(false)} className="primary">{t('SignUp.1')}</a></li>
              <li><a href="/terms" onClick={toggleMenu(false)} className="primary">{t('links.T&C')}</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
