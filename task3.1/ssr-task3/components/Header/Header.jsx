import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import dynamic from 'next/dynamic';
import { throttle } from 'throttle-debounce';
import DesktopMenu from './components/Menu';
import Logo from '../../assets/logo.svg';
import MenuButton from '../../assets/header/line-menu.svg';
import { scrollToTop } from '../../utils/helpers';

import DesktopUser from './components/DesktopUser';
import LogOut from '../../assets/header/sign-out.svg';
import { RootStore } from '../../context/root.context';
import { getUser } from '../../services/api';

const MobileMenu = dynamic(() => import('../Header/components/MobMenu'));

const Header = React.memo(() => {
  const [isUserLoaded, setUserLoaded] = useState(false);
  const [user, setUser] = useState({});
  const { state } = useContext(RootStore);
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrollBackPosition, setScrollBackPosition] = useState(0);
  const [loadUser, setLoadUser] = useState(false);
  const html = { body: null };

  if (typeof (window) !== 'undefined') {
    html.body = document.querySelector('body');
  }

  useEffect(() => {
    const resize = () => {
      if (window.innerWidth > 830) {
        setLoadUser(true);
      }
    };
    resize();
    window.addEventListener('resize', throttle(200, resize));
    return window.removeEventListener('resize', throttle(200, resize));
  }, []);

  useEffect(() => {
    if (loadUser) {
      getUser(1).then((data) => {
        if (data.success) {
          setUserLoaded(true);
          setUser(data.user);
        }
      });
    }
  }, [loadUser]);

  const toggleMenu = (value) => () => {
    setLoadUser(true);
    setOpen(value);
    if (value) {
      const scrollPosition = window.pageYOffset;
      setScrollBackPosition(scrollPosition);
      html.body.style.overflow = 'hidden';
      html.body.style.position = 'fixed';
      html.body.style.top = `-${scrollPosition}px`;
      html.body.style.width = '100%';
    } else {
      html.body.style.removeProperty('overflow');
      html.body.style.removeProperty('position');
      html.body.style.removeProperty('top');
      html.body.style.removeProperty('width');
      window.scrollTo(0, scrollBackPosition);
    }
  };

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
                {loadUser && <DesktopUser user={user} isUserLoaded={isUserLoaded} />}
                <div>
                  <a href="#" className="exitButton">
                    <LogOut />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-header flex">
            {loadUser && (
            <>
              <div aria-hidden="true" tabIndex={0} role="button" aria-label="Close menu" onClick={toggleMenu(false)} className={`dark ${open ? 'opened' : 'closed'}`} />
              <MobileMenu isUserLoaded={isUserLoaded} user={user} open={open} toggleMenu={toggleMenu} />
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

export default Header;
