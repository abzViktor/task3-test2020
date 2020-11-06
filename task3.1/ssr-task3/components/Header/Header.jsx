import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Tooltip } from '@material-ui/core';

import Box from '@material-ui/core/Box';
import DesktopMenu from './components/Menu';
import MobileMenu from './components/MobMenu';

import Logo from '../../assets/logo.svg';
import MenuButton from '../../assets/header/line-menu.svg';
import PlaceholderImage from '../../assets/placeholders/Ellipse_1.svg';
import PlaceholderName from '../../assets/placeholders/Rounded_Rectangle_2.svg';
import PlaceholderEmail from '../../assets/placeholders/Rounded_Rectangle_3.svg';
import LogOut from '../../assets/header/sign-out.svg';

import { RootStore } from '../root.context';

export default React.memo(() => {
  const [tipName, setTipName] = React.useState('');
  const [tipEmail, setTipEmail] = React.useState('');
  const [user, setUser] = useState([]);
  const [isUserLoaded, setUserLoaded] = useState(false);
  const { state } = useContext(RootStore);
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const refContainer = React.useRef(null);
  const refName = React.useRef(null);
  const refEmail = React.useRef(null);
  const [html, setHtml] = useState(null);
  const [scrollBackPosition, setScrollBackPosition] = useState(0);
  useEffect(() => {
    setHtml(document.querySelector('body'));
  }, []);
  const toggleMenu = (value) => () => {
    setOpen(value);
    if (value) {
      const scrollPosition = window.pageYOffset;
      setScrollBackPosition(scrollPosition);
      html.style.overflow = 'hidden';
      html.style.position = 'fixed';
      html.style.top = `-${scrollPosition}px`;
      html.style.width = '100%';
    } else {
      html.style.removeProperty('overflow');
      html.style.removeProperty('position');
      html.style.removeProperty('top');
      html.style.removeProperty('width');
      window.scrollTo(0, scrollBackPosition);
    }
  };

  useEffect(() => {
    if (refName.current.offsetWidth > refContainer.current.offsetWidth && user) {
      setTipName(user.name);
    } else {
      setTipName('');
    }
  });

  useEffect(() => {
    if (refEmail.current.offsetWidth > refContainer.current.offsetWidth && user) {
      setTipEmail(user.email);
    } else {
      setTipEmail('');
    }
  });

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users/1')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setUser(data.user);
          setUserLoaded(true);
        } else {
        // proccess server errors
        }
      });
  }, []);

  return (
    <>
      <div className={state.apiError.state ? 'api-error-spacer' : 'header-spacer'} />
      <div className="header-holder">
        {state.apiError.state && (
        <div className="api-error">
          {state.apiError.messageId === 1 && <div className="container">{t('api-error.1')}</div>}
          {state.apiError.messageId === 2 && <div className="container">{t('api-error.2')}</div>}
        </div>
        )}
        <header className="container">
          <div className="desktop-header">
            <div className="logo-container">
              <a aria-label="Logo" onClick={scrollToTop} href="/"><Logo /></a>
            </div>
            <div className="flex">
              <DesktopMenu />
              <div className="header-personal-info">
                {isUserLoaded && (
                  <>
                    <div className="header-contacts" ref={refContainer}>
                      <div className="header-user"><Tooltip title={tipName}><Box component="span" className="paragraph-3" ref={refName}>{user.name}</Box></Tooltip></div>
                      <div className="header-user"><Tooltip title={tipEmail}><Box component="a" ref={refEmail} href={`mailto:${user.email}`}>{user.email}</Box></Tooltip></div>
                    </div>
                    <img width="70" height="70" className="header-avatar" src={user.photo} onError={(e) => { e.target.onerror = null; e.target.src = 'https://source-task3-test2020viktor-p.abzdev2.com/cover-icon-user.svg'; }} alt="avatar icon" />
                  </>
                )}
                {!isUserLoaded && (
                  <>
                    <div className="header-contacts" ref={refContainer}>
                      <div><span ref={refName}><PlaceholderName /></span></div>
                      <div><a href="#" aria-label="placeholder" ref={refEmail}><PlaceholderEmail /></a></div>
                    </div>
                    <PlaceholderImage />
                  </>
                )}
                <div>
                  <a href="#" className="exitButton">
                    <LogOut />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-header flex">
            {open && (
            <>
              <div aria-hidden="true" tabIndex={0} role="button" aria-label="Close menu" onClick={toggleMenu(false)} className={`dark ${open ? 'opened' : 'closed'}`} />
              <MobileMenu isUserLoaded={isUserLoaded} user={user} toggleMenu={toggleMenu} />
            </>
            )}
            <div className="logo-container">
              <a href="/">
                <Logo />
              </a>
            </div>
            <button type="button" onClick={toggleMenu(true)} className="menuOpen">
              <MenuButton />
            </button>
          </div>
        </header>
      </div>
    </>
  );
});
