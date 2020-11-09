import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import dynamic from 'next/dynamic';
import { throttle } from 'throttle-debounce';
import PropTypes from 'prop-types';
import DesktopMenu from './components/Menu';
import Logo from '../../assets/logo.svg';
import MenuButton from '../../assets/header/line-menu.svg';

import DesktopUser from './components/DesktopUser';
import LogOut from '../../assets/header/sign-out.svg';
import { RootStore } from '../../context/root.context';

const MobileMenu = dynamic(() => import('../Header/components/MobMenu'));

const Header = React.memo((props) => {
  const { user, isUserLoaded } = props;
  const { state } = useContext(RootStore);
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [html, setHtml] = useState(null);
  const [scrollBackPosition, setScrollBackPosition] = useState(0);
  const [mobileUser, setMobileUser] = useState({});
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const resize = () => {
      setIsDesktop(window.innerWidth > 830);
    };
    resize();
    window.addEventListener('resize', throttle(200, resize));
    return window.removeEventListener('resize', throttle(200, resize));
  }, []);

  useEffect(() => {
    setHtml(document.querySelector('body'));
  }, []);

  const toggleMenu = (value) => () => {
    setMobileUser(user);
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

  const scrollToTop = () => {
    window.scrollTo(0, 0);
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
                {isDesktop && <DesktopUser user={user} isUserLoaded={isUserLoaded} />}
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
              <MobileMenu isUserLoaded={isUserLoaded} user={mobileUser} toggleMenu={toggleMenu} />
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

Header.propTypes = {
  isUserLoaded: PropTypes.bool.isRequired,
  user: PropTypes.shape({ name: PropTypes.string, email: PropTypes.string, photo: PropTypes.string }).isRequired,
};

export default Header;
