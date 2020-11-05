import React from 'react';
import Banner from '../components/Banner/Banner';
import LetsGet from '../components/LetsGet/LetsGet';
import Users from '../components/Users/Users';
import Tools from '../components/Tools/Tools';
import { useUserAgent } from 'next-useragent'

export default function Home({users, initialCount, apiStatus }) {
  React.useEffect(() => {
    const about = document.getElementById('about').offsetParent.offsetTop - 64;
    const relation = document.getElementById('relation').offsetParent.offsetTop - 64;
    const users = document.getElementById('users').offsetParent.offsetTop - 64;

    const scrollToElement = () => {
      if (window.pageYOffset < about) {
        localStorage.removeItem('active');
      }
      if (window.pageYOffset >= about
          && window.pageYOffset < relation
          && localStorage.getItem('active') !== 'about') {
        localStorage.setItem('active', 'about');
      }
      if (window.pageYOffset >= relation
          && window.pageYOffset < users
          && localStorage.getItem('active') !== 'relation') {
        localStorage.setItem('active', 'relation');
      }
      if (window.pageYOffset >= users
          && localStorage.getItem('active') !== 'users') {
        localStorage.setItem('active', 'users');
      }
    };
    scrollToElement();
    window.addEventListener('scroll', scrollToElement);
    return function cleanup() {
      localStorage.removeItem('active');
      window.removeEventListener('scroll', scrollToElement);
    };
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
    let ua, initialCount;
    if(ctx.req) {
        ua = useUserAgent(ctx.req.headers['user-agent']);
    }
    else {
    }
    let apiStatus = 200;
    let users;
    console.log(ua);
    if(ctx.req) {
        initialCount = ua.isMobile === true ? 3 : 6;
    } else {
        initialCount = 3;
    }
  const res = await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?&offset=0&length=${initialCount}&count=${initialCount}`);
  console.log(res.status);
  if(res.status === 200) {
      users = await res.json();
  } else {
      apiStatus = res.status;
      users = {};
  }
  return (
      {namespacesRequired: ['common'],
      users: users,
      initialCount: initialCount, apiStatus});
};
