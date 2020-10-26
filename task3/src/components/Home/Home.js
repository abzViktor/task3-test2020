import React from 'react';
// import Banner from '../Banner/Banner';
// import LetsGet from '../LetsGet/LetsGet';
// import Users from '../Users/Users';
// import Tools from '../Tools/Tools';

const Banner = React.lazy(() => import('../Banner/Banner'));
const LetsGet = React.lazy(() => import('../LetsGet/LetsGet'));
const Users = React.lazy(() => import('../Users/Users'));
const Tools = React.lazy(() => import('../Tools/Tools'));

export default function Home() {
  return (
    <>
      <Banner />
      <LetsGet />
      <Tools />
      <Users />
    </>

  );
}
