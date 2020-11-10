import React, { useContext } from 'react';
import { useUserAgent } from 'next-useragent';
import PropTypes from 'prop-types';
import { throttle } from 'throttle-debounce';
import dynamic from 'next/dynamic';
import Banner from '../components/Banner/Banner';
import LetsGet from '../components/LetsGet/LetsGet';
import { HeaderStore } from '../context/header.context';
import { getUsers } from '../services/api';

const Users = dynamic(() => import('../components/Users/Users'));
const Tools = dynamic(() => import('../components/Tools/Tools'));

export default function Home({ users, initialCount, apiStatus }) {
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
      <Banner />
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
  if (ctx.req) {
    ua = useUserAgent(ctx.req.headers['user-agent']);
  }
  let apiStatus = 200;
  let users;
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
    });
};

Home.propTypes = {
  users: PropTypes.shape({}).isRequired,
  initialCount: PropTypes.number.isRequired,
  apiStatus: PropTypes.number.isRequired,
};
