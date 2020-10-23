import React, { useContext, useEffect, useState } from 'react';
import Divider from '@material-ui/core/Divider';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import HashLinkObserver from 'react-hash-link';

import { Tooltip } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import lockScroll from '../../shared/lockScroll';
import './Header.scss';
import '../Links/Links.css';
import Logo from '../Logo/Logo';
import { RootStore } from '../../shared/root.context';

const defaultLink = '/';
const initialActive = {
  about: '',
  relation: '',
  users: '',
  registration: '',
};

// eslint-disable-next-line react/prop-types
export default function Header() {
  const location = useLocation();
  const [tipName, setTipName] = React.useState('');
  const [tipEmail, setTipEmail] = React.useState('');
  const [activeMenu, setActiveMenu] = useState(initialActive);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState([]);
  const [isUserLoaded, setUserLoaded] = useState(false);
  const { state } = useContext(RootStore);
  const toggleMenu = (value) => () => {
    setOpen(value);
    if (value) {
      lockScroll.enable();
    } else {
      lockScroll.disable();
    }
  };
  const refContainer = React.useRef(null);
  const refName = React.useRef(null);
  const refEmail = React.useRef(null);
  const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      fontSize: 14,
      maxWidth: 260,
    },
  }))(Tooltip);
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
  const { t } = useTranslation();

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

  // useEffect(() => {
  //   setTimeout(() => {
  //     function scrollToElement() {
  //       const about = document.getElementById('about');
  //       const relation = document.getElementById('relation');
  //       const users = document.getElementById('users');
  //       if (!users && !relation && !about) {
  //         return null;
  //       }
  //       if (window.pageYOffset < about.offsetParent.offsetTop - 264) {
  //         setActiveMenu({
  //           ...initialActive,
  //         });
  //       }
  //       if (window.pageYOffset >= about.offsetParent.offsetTop - 264
  //               && window.pageYOffset < relation.offsetParent.offsetTop - 264
  //               && activeMenu.about !== 'active') {
  //         setActiveMenu({
  //           ...initialActive,
  //           about: 'active',
  //         });
  //       }
  //       if (window.pageYOffset >= relation.offsetParent.offsetTop - 264
  //               && window.pageYOffset < users.offsetParent.offsetTop - 264
  //               && state.activeMenu !== 'active') {
  //         setActiveMenu({
  //           ...initialActive,
  //           relation: 'active',
  //         });
  //       }
  //       if (window.pageYOffset >= users.offsetParent.offsetTop - 350
  //               && state.activeMenu !== 'active') {
  //         setActiveMenu({
  //           ...initialActive,
  //           users: 'active',
  //         });
  //       }
  //       return null;
  //     }
  //     if (!window.location.href.match('registration') && !window.location.href.match('terms')) {
  //       scrollToElement();
  //       window.addEventListener('scroll', scrollToElement, false);
  //     }
  //   }, 300);
  // }, [location]);

  useEffect(() => {
    if (window.location.href.match('registration')) {
      setActiveMenu({
        ...initialActive,
        registration: 'primary active',
      });
    } else {
      setActiveMenu({
        ...initialActive,
      });
    }
    console.log('Location changed');
  }, [location]);

  return (
    <>
      <HashLinkObserver smoothScroll={false} />
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
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <Link onClick={scrollToTop} to="/"><Logo /></Link>
            </div>
            <div className="flex">
              <nav>
                <ul>
                  <li>
                    <Link
                      to="/#about"
                      className={`primary ${activeMenu.about}`}
                    >
                      {t('About.1')}
                    </Link>
                  </li>
                  <li><Link to="/#relation" className={`primary ${activeMenu.relation}`}>{t('Relationships.1')}</Link></li>
                  <li><Link to="/#users" className={`primary ${activeMenu.users}`}>{t('Users.1')}</Link></li>
                  <li><Link to="/registration#form" className={`primary ${activeMenu.registration}`}>{t('SignUp.1')}</Link></li>
                </ul>
              </nav>
              <div className="header-personal-info">
                {isUserLoaded && (
                  <>
                    <div className="header-contacts" ref={refContainer}>
                      <div className="header-user"><HtmlTooltip title={tipName}><Box component="span" className="paragraph-3" ref={refName}>{user.name}</Box></HtmlTooltip></div>
                      <div className="header-user"><HtmlTooltip title={tipEmail}><Box component="a" ref={refEmail} href={`mailto:${user.email}`}>{user.email}</Box></HtmlTooltip></div>
                    </div>
                    <img className="header-avatar" src={user.photo} alt="avatar icon" />
                  </>
                )}
                {!isUserLoaded && (
                  <>
                    <div className="header-contacts" ref={refContainer}>
                      <div><span ref={refName} className="paragraph-3"><img src="https://source-task3-test2020viktor-p.abzdev2.com/placeholders/Rounded_Rectangle_2.svg" alt="" /></span></div>
                      <div><a ref={refEmail} href="mailto:Superstar@gmail.com"><img src="https://source-task3-test2020viktor-p.abzdev2.com/placeholders/Rounded_Rectangle_3.svg" alt="" /></a></div>
                    </div>
                    <img className="header-avatar" src="https://source-task3-test2020viktor-p.abzdev2.com/placeholders/Ellipse_1.svg" alt="avatar icon" />
                  </>
                )}
                <div>
                  <a href={defaultLink} className="exitButton">
                    <svg width="24px" height="20px" viewBox="0 0 24 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <title>Sign-out</title>
                      <desc>Created with Sketch.</desc>
                      <defs />
                      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="sign-out" transform="translate(-1.000000, 0.000000)" fill="#283593" fillRule="nonzero">
                          <path d="M10.8,18.12 C10.777904,18.0551642 10.777904,17.9848358 10.8,17.92 C10.8,17.86 10.8,17.81 10.69,17.78 C10.58,17.75 10.57,17.71 10.57,17.69 C10.57,17.67 10.51,17.69 10.39,17.69 L10.21,17.69 L5.41,17.69 C4.75845014,17.7002355 4.13190144,17.4394753 3.68,16.97 C3.20950293,16.496921 2.9622806,15.8461445 3,15.18 L3,4.41 C2.98976453,3.75845014 3.25052469,3.13190144 3.72,2.68 C4.1689932,2.23532929 4.77815242,1.99022381 5.41,2 L10.31,2 C10.4221952,2.00654693 10.5327795,1.97087459 10.62,1.9 C10.7044485,1.82129123 10.7577021,1.71478409 10.77,1.6 C10.7951089,1.48132462 10.811817,1.3610262 10.82,1.24 C10.82,1.13 10.82,1 10.82,0.84 C10.82,0.68 10.82,0.57 10.82,0.53 C10.8288509,0.383160805 10.7653717,0.241265929 10.65,0.15 C10.5628056,0.0544088005 10.4393852,-4.1366484e-05 10.31,1.41542594e-16 L5.41,1.41542594e-16 C4.23694711,-0.0168652328 3.10862792,0.449651354 2.29,1.29 C1.44965135,2.10862792 0.983134767,3.23694711 1,4.41 L1,15.18 C0.980749809,16.3535074 1.44764176,17.4827345 2.29,18.3 C3.10862792,19.1403486 4.23694711,19.6068652 5.41,19.59 L10.31,19.59 C10.4221952,19.5965469 10.5327795,19.5608746 10.62,19.49 C10.7085477,19.4144273 10.7626705,19.3061818 10.77,19.19 C10.7951089,19.0713246 10.811817,18.9510262 10.82,18.83 C10.82,18.73 10.82,18.59 10.82,18.43 C10.82,18.27 10.8,18.16 10.8,18.12 Z" id="Shape" />
                          <path d="M24.71,9.11 L16.38,0.78 C15.9937017,0.411745823 15.3862983,0.411745823 15,0.78 C14.8062225,0.956726196 14.6970803,1.20775326 14.7,1.47 L14.7,5.88 L7.86,5.88 C7.30771525,5.88 6.86,6.32771525 6.86,6.88 L6.86,12.75 C6.86,13.3022847 7.30771525,13.75 7.86,13.75 L14.71,13.75 L14.71,18.16 C14.7070803,18.4222467 14.8162225,18.6732738 15.01,18.85 C15.39495,19.2119426 15.99505,19.2119426 16.38,18.85 L24.71,10.52 C25.0719426,10.13505 25.0719426,9.53495001 24.71,9.15 L24.71,9.11 Z" id="Shape" />
                        </g>
                      </g>
                    </svg>
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
                    <div><img className="header-avatar-mob" src={user.photo} alt="avatar icon" /></div>
                    <div><span className="name">{user.name}</span></div>
                    <div><a href="mailto:Superstar@gmail.com">{user.email}</a></div>
                  </div>
                </>
              )}
              {!isUserLoaded && (
                <>
                  <div className="side-menu-container-contacts">
                    <div><img className="header-avatar-mob" src="https://source-task3-test2020viktor-p.abzdev2.com/placeholders/Ellipse_1.svg" alt="avatar icon" /></div>
                    <div><span className="name"><img src="https://source-task3-test2020viktor-p.abzdev2.com/placeholders/Rounded_Rectangle_2.svg" alt="" /></span></div>
                    <div><a href="mailto:Superstar@gmail.com"><img src="https://source-task3-test2020viktor-p.abzdev2.com/placeholders/Rounded_Rectangle_3.svg" alt="" /></a></div>
                  </div>
                </>
              )}
              <Divider />
              <div className="side-menu-container-nav">
                <nav>
                  <ul>
                    <li><Link to="/#about" onClick={toggleMenu(false)} className={activeMenu.about}>{t('About.1')}</Link></li>
                    <li><Link to="/#relation" onClick={toggleMenu(false)} className={activeMenu.relation}>{t('Relationships.1')}</Link></li>
                    <li><Link to="/#users" onClick={toggleMenu(false)} className={activeMenu.users}>{t('Users.1')}</Link></li>
                    <li><Link to="/registration#form" onClick={toggleMenu(false)} className="primary" href={defaultLink}>{t('SignUp.1')}</Link></li>
                    <li><Link to="/terms" onClick={toggleMenu(false)} className="primary">{t('links.T&C')}</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="logo-container">
              <Link to="/">
                <Logo />
              </Link>
            </div>
            <button type="button" onClick={toggleMenu(true)} className="menuOpen">
              <svg width="23px" height="22px" viewBox="0 0 23 22" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>line-menu</title>
                <desc>Created with Sketch.</desc>
                <defs />
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="line-menu" transform="translate(-1.000000, 0.000000)" fill="#283593" fillRule="nonzero">
                    <path d="M2.9,3.85 C2.4007447,3.86349835 1.91724177,3.6745636 1.55940901,3.3261475 C1.20157626,2.9777314 0.999817556,2.49943771 1,2 C0.972540222,1.47899689 1.1605289,0.969625434 1.51986758,0.591374197 C1.87920625,0.213122961 2.37827425,-0.000723140068 2.9,1.11022302e-16 L22.05,1.11022302e-16 C23.1349951,0.0271333055 24.0003392,0.914665715 24,2 C24.0001776,2.51269524 23.7931506,3.00370229 23.4259431,3.36149423 C23.0587356,3.71928617 22.5625177,3.91349201 22.05,3.9 L2.9,3.85 Z" id="Shape" />
                    <path d="M22.05,8.57 C23.1158588,8.59632945 23.9736706,9.45414122 24,10.52 C24.0001776,11.0326952 23.7931506,11.5237023 23.4259431,11.8814942 C23.0587356,12.2392862 22.5625177,12.433492 22.05,12.42 L2.9,12.42 C2.39194706,12.4339272 1.90054037,12.2382249 1.54115774,11.8788423 C1.18177511,11.5194596 0.986072825,11.0280529 1,10.52 C0.986507989,10.0074823 1.18071383,9.51126442 1.53850577,9.1440569 C1.89629771,8.77684939 2.38730476,8.56982244 2.9,8.57 L22.05,8.57 Z" id="Shape" />
                    <path d="M22.05,17.2 C22.5607875,17.1865474 23.055465,17.3793951 23.4223722,17.7350128 C23.7892794,18.0906305 23.9974878,18.5790415 24,19.09 C24.0003392,20.1753343 23.1349951,21.0628667 22.05,21.09 L2.9,21.09 C2.37827425,21.0907231 1.87920625,20.876877 1.51986758,20.4986258 C1.1605289,20.1203746 0.972540222,19.6110031 1,19.09 C0.988861135,18.5836606 1.18579474,18.094894 1.54486108,17.7377175 C1.90392743,17.380541 2.39372639,17.1861893 2.9,17.2 L22.05,17.2 Z" id="Shape" />
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </header>
      </div>
    </>
  );
}
