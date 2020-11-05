import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from "next/router";
import { Tooltip } from '@material-ui/core';

import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

import Logo from '../../assets/logo.svg';
import MenuButton from "../../assets/header/line-menu.svg";
import PlaceholderImage from "../../assets/placeholders/Ellipse_1.svg";
import PlaceholderName from "../../assets/placeholders/Rounded_Rectangle_2.svg";
import PlaceholderEmail from "../../assets/placeholders/Rounded_Rectangle_3.svg";
import LogOut from "../../assets/header/sign-out.svg";

import { RootStore } from '../root.context';

const initialActive = {
  about: '',
  relation: '',
  users: '',
  registration: '',
};

export default function Header() {
  const router = useRouter();
  const [tipName, setTipName] = React.useState('');
  const [tipEmail, setTipEmail] = React.useState('');
  const [activeMenu, setActiveMenu] = useState(initialActive);
  const [user, setUser] = useState([]);
  const [open, setOpen] = useState(false);
  const [isUserLoaded, setUserLoaded] = useState(false);
  const { state } = useContext(RootStore);
  const [html, setHtml] = useState(null);
  const [scrollBackPosition, setScrollBackPosition] = useState(0);
  const { t } = useTranslation();
  useEffect(() => {
    setHtml(document.querySelector('body'));
  }, []);
  const toggleMenu = (value) => () => {
    setOpen(value);
    if (value) {
        let scrollPosition = window.pageYOffset;
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
  const refContainer = React.useRef(null);
  const refName = React.useRef(null);
  const refEmail = React.useRef(null);
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

  useEffect(() => {
    localStorage.removeItem('active');
    function checkActive() {
      setTimeout(() => {
        const item = localStorage.getItem('active');

        if (item) {
          setActiveMenu({
            ...initialActive,
            [item]: 'active',
          });
        } else {
          setActiveMenu({
            ...initialActive,
          });
        }
      }, 300);
    }
    if (window.location.href.match('registration')) {
      console.log('Location changed');
      setActiveMenu({
        ...initialActive,
        registration: 'primary active',
      });
    } else {
      console.log('Location changed');
      checkActive();
      window.addEventListener('scroll', checkActive);
      return () => {
        window.removeEventListener('scroll', checkActive);
      };
    }
  }, [router]);

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
              <a onClick={scrollToTop} href="/"><Logo /></a>
            </div>
            <div className="flex">
              <nav>
                <ul>
                  <li><a href="/#about" className={`primary ${activeMenu.about}`}>{t('About.1')}</a></li>
                  <li><a href="/#relation" className={`primary ${activeMenu.relation}`}>{t('Relationships.1')}</a></li>
                  <li><a href="/#users" className={`primary ${activeMenu.users}`}>{t('Users.1')}</a></li>
                  <li><a href="/registration#form" className={`primary ${activeMenu.registration}`}>{t('SignUp.1')}</a></li>
                </ul>
              </nav>
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
                      <div><a ref={refEmail}><PlaceholderEmail /></a></div>
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
            <div onClick={toggleMenu(false)} className={`dark ${open ? 'opened' : 'closed'}`} />
            <div className={`sideMenu ${open ? 'opened' : 'closed'}`}>
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
                    <li><a href="/#about" onClick={toggleMenu(false)} className={`primary ${activeMenu.about}`}>{t('About.1')}</a></li>
                    <li><a href="/#relation" onClick={toggleMenu(false)} className={`primary ${activeMenu.relation}`}>{t('Relationships.1')}</a></li>
                    <li><a href="/#users" onClick={toggleMenu(false)} className={`primary ${activeMenu.users}`}>{t('Users.1')}</a></li>
                    <li><a href="/registration#form" onClick={toggleMenu(false)} className={`primary ${activeMenu.registration}`}>{t('SignUp.1')}</a></li>
                    <li><a href="/terms" onClick={toggleMenu(false)} className="primary">{t('links.T&C')}</a></li>
                  </ul>
                </nav>
              </div>
            </div>
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
}

