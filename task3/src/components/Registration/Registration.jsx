import React from 'react';
import RegistrationBanner from './components/Banner/RegistrationBanner';
import RegistrationForm from './components/Form/RegistrationForm';
import './Registration.scss';

export default function Registration() {
  return (
    <>
      <RegistrationBanner />
      <RegistrationForm />
    </>
  );
}
