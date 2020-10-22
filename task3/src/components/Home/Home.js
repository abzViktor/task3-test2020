import React from 'react';
import Banner from '../Banner/Banner';
import LetsGet from '../LetsGet/LetsGet';

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
