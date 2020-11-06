import React from 'react';
import PropTypes from 'prop-types';
import RegistrationBanner from '../components/Registration/components/Banner/RegistrationBanner';
import RegistrationForm from '../components/Registration/components/Form/RegistrationForm';

const Registration = React.memo(({ positions, apiStatus }) => (
  <>
    <RegistrationBanner />
    <RegistrationForm positions={positions} apiStatus={apiStatus} />
  </>
));

Registration.getInitialProps = async () => {
  /* global fetch */
  let positions; let
    apiStatus;
  const res = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions');
  if (res.status === 200) {
    apiStatus = res.status;
    positions = await res.json();
  } else {
    apiStatus = res.status;
    positions = {};
  }
  return ({ positions, apiStatus });
};

Registration.propTypes = {
  positions: PropTypes.shape({}).isRequired,
  apiStatus: PropTypes.number.isRequired,
};

export default Registration;
