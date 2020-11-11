import React, { useContext, useEffect } from 'react';
import { useUserAgent } from 'next-useragent';
import PropTypes from 'prop-types';
import { throttle } from 'throttle-debounce';
import Banner from '../components/Banner/Banner';
import LetsGet from '../components/LetsGet/LetsGet';
import Users from '../components/Users/Users';
import Tools from '../components/Tools/Tools';
import { HeaderStore } from '../context/header.context';
import HEADER_HEIGHT from '../constants/header';

// const LetsGet = dynamic(() => import('../components/LetsGet/LetsGet'));
// const Users = dynamic(() => import('../components/Users/Users'));
// const Tools = dynamic(() => import('../components/Tools/Tools'));

export default function Home({ initialCount, webpSupport }) {
  const { headerState, headerDispatch } = useContext(HeaderStore);

  useEffect(() => {
    const about = document.getElementById('about').offsetParent.offsetTop - HEADER_HEIGHT;
    const relation = document.getElementById('relation').offsetParent.offsetTop - HEADER_HEIGHT;
    const users = document.getElementById('users').offsetParent.offsetTop - HEADER_HEIGHT;

    const scrollToElement = () => {
      if (window.pageYOffset < about) {
        headerDispatch({
          type: 'ACTIVE_MENU_ITEM',
          payload: '',
        });
      }
      if (window.pageYOffset >= about
          && window.pageYOffset < relation
          && headerState.activeMenu !== 'about') {
        headerDispatch({
          type: 'ACTIVE_MENU_ITEM',
          payload: 'about',
        });
      }
      if (window.pageYOffset >= relation
          && window.pageYOffset < users
          && headerState.activeMenu !== 'relation') {
        headerDispatch({
          type: 'ACTIVE_MENU_ITEM',
          payload: 'relation',
        });
      }
      if (window.pageYOffset >= users
          && headerState.activeMenu !== 'users') {
        headerDispatch({
          type: 'ACTIVE_MENU_ITEM',
          payload: 'users',
        });
      }
    };
    scrollToElement();
    window.addEventListener('scroll', throttle(200, scrollToElement));
    return window.removeEventListener('scroll', throttle(200, scrollToElement));
  }, []);

  return (
    <>
      <Banner webpSupport={webpSupport} />
      <div className="anchor-holder"><span id="about" /></div>
      {/* <LetsGet /> */}
      <div className="anchor-holder"><span id="relation" /></div>
      {/* <Tools /> */}
      <div className="anchor-holder"><span id="users" /></div>
      {/* <Users initialCount={initialCount} /> */}
    </>
  );
}

Home.getInitialProps = async (ctx) => {
  const state = {
    ua: {},
    initialCount: null,
    webpSupport: true,
  };

  if (ctx.req) {
    state.ua = useUserAgent(ctx.req.headers['user-agent']);
  }

  state.webpSupport = !state.ua.isSafari;

  if (ctx.req) {
    state.initialCount = state.ua.isMobile === true ? 3 : 6;
  } else {
    state.initialCount = 3;
  }

  return (
    {
      namespacesRequired: ['common'],
      initialCount: state.initialCount,
      webpSupport: state.webpSupport,
    });
};

Home.propTypes = {
  initialCount: PropTypes.number.isRequired,
  webpSupport: PropTypes.bool.isRequired,
};
