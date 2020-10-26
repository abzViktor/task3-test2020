import React from 'react';
import loadableVisibility from 'react-loadable-visibility/loadable-components';

// import Banner from '../Banner/Banner';
// import LetsGet from '../LetsGet/LetsGet';
// import Users from '../Users/Users';
// import Tools from '../Tools/Tools';

const Banner = loadableVisibility(() => import('../Banner/Banner'), {
  fallback: <div />,
});

const LetsGet = loadableVisibility(() => import('../LetsGet/LetsGet'), {
  fallback: <div />,
});

const Users = loadableVisibility(() => import('../Users/Users'), {
  fallback: <div />,
});

const Tools = loadableVisibility(() => import('../Tools/Tools'), {
  fallback: <div />,
});

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
