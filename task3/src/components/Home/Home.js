import React from 'react';
import Banner from '../Banner/Banner';
import LetsGet from '../LetsGet/LetsGet';
import Users from '../Users/Users';
import Tools from '../Tools/Tools';

export default function Home() {
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
      <Users />
    </>

  );
}
