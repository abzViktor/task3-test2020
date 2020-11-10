import React, { useContext } from 'react';
import { useUserAgent } from 'next-useragent';
import PropTypes from 'prop-types';
import { throttle } from 'throttle-debounce';
import Banner from '../components/Banner/Banner';
import LetsGet from '../components/LetsGet/LetsGet';
import Users from '../components/Users/Users';
import Tools from '../components/Tools/Tools';
import { HeaderStore } from '../context/header.context';
import { getUsers } from '../services/api';

export default function Home({
  users, initialCount, apiStatus, webpSupport,
}) {
  const { headerState, headerDispatch } = useContext(HeaderStore);

  React.useEffect(() => {
    const about = document.getElementById('about').offsetParent.offsetTop - 64;
    const relation = document.getElementById('relation').offsetParent.offsetTop - 64;
    const users = document.getElementById('users').offsetParent.offsetTop - 64;

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
      <LetsGet />
      <div className="anchor-holder"><span id="relation" /></div>
      <Tools />
      <div className="anchor-holder"><span id="users" /></div>
      <Users users={users} initialCount={initialCount} apiStatus={apiStatus} />
    </>
  );
}

Home.getInitialProps = async (ctx) => {
  let ua;
  let initialCount;
  let apiStatus = 200;
  let users;
  let webpSupport;

  if (ctx.req) {
    ua = useUserAgent(ctx.req.headers['user-agent']);
    console.log(ua);
  }

  if (ua.isSafari || ua.isIE) {
    webpSupport = false;
  } else {
    webpSupport = true;
  }

  if (ctx.req) {
    initialCount = ua.isMobile === true ? 3 : 6;
  } else {
    initialCount = 3;
  }
  const res = await getUsers(initialCount);
  if (res.status === 200) {
    users = await res.json();
  } else {
    apiStatus = res.status;
    users = {};
  }
  return (
    {
      namespacesRequired: ['common'],
      users,
      initialCount,
      apiStatus,
      webpSupport,
    });
};

Home.propTypes = {
  users: PropTypes.shape({}).isRequired,
  initialCount: PropTypes.number.isRequired,
  apiStatus: PropTypes.number.isRequired,
};
