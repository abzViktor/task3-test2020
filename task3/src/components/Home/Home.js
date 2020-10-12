import React from 'react';
import Banner from '../Banner/Banner';
import LetsGet from '../LetsGet/LetsGet';
// import Tools from '../Tools/Tools';
// import Users from '../Users/Users';
const Users = React.lazy(() => import('../Users/Users'));
const Tools = React.lazy(() => import('../Tools/Tools'));

export default function Home() {
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
