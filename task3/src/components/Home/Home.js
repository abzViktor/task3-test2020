import React, { useContext, useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import LetsGet from '../LetsGet/LetsGet';
import { RootStore } from '../../shared/root.context';
// import Tools from '../Tools/Tools';
// import Users from '../Users/Users';
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
