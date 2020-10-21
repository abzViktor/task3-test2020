import React, { useContext, useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import LetsGet from '../LetsGet/LetsGet';
import { RootStore } from '../../shared/root.context';
// import Tools from '../Tools/Tools';
// import Users from '../Users/Users';
const Users = React.lazy(() => import('../Users/Users'));
const Tools = React.lazy(() => import('../Tools/Tools'));

export default function Home() {
  // const { dispatch, state } = useContext(RootStore);
  // useEffect(() => {
  //   const { hash } = window.location.hash;
  //   if (hash === 'about') {
  //     setTimeout(() => {
  //       window.scrollTo(document.getElementById('about').offsetHeight - 264, document.getElementById('about').offsetHeight - 264);
  //     }, 100);
  //   }
  // });
  // useEffect(() => {
  //   window.onload = () => {
  //     const about = document.getElementById('about');
  //     const relation = document.getElementById('relation');
  //     const users = document.getElementById('users');
  //     if (about && relation && users) {
  //       window.onscroll = function () {
  //         if (window.pageYOffset < about.offsetParent.offsetTop - 264) {
  //           dispatch({
  //             type: 'ACTIVE_MENU_ITEM',
  //             payload: '',
  //           });
  //         }
  //         if (window.pageYOffset >= about.offsetParent.offsetTop - 264
  //           && window.pageYOffset < relation.offsetParent.offsetTop - 264
  //           && state.activeMenu !== 'about') {
  //           dispatch({
  //             type: 'ACTIVE_MENU_ITEM',
  //             payload: 'about',
  //           });
  //         }
  //         if (window.pageYOffset >= relation.offsetParent.offsetTop - 264
  //           && window.pageYOffset < users.offsetParent.offsetTop - 264
  //           && state.activeMenu !== 'relation') {
  //           dispatch({
  //             type: 'ACTIVE_MENU_ITEM',
  //             payload: 'relation',
  //           });
  //         }
  //         if (window.pageYOffset >= users.offsetParent.offsetTop - 264
  //           && state.activeMenu !== 'users') {
  //           dispatch({
  //             type: 'ACTIVE_MENU_ITEM',
  //             payload: 'users',
  //           });
  //         }
  //       };
  //     }
  //   };
  // }, []);

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
