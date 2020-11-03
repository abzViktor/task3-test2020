import React from 'react';
import RegistrationBanner from '../components/Registration/components/Banner/RegistrationBanner';
import RegistrationForm from '../components/Registration/components/Form/RegistrationForm';

export default function Registration({positions, apiStatus}) {
    return (
        <>
            <RegistrationBanner />
            <RegistrationForm positions={positions} apiStatus={apiStatus} />
        </>
    );
}

Registration.getInitialProps = async (ctx) => {
    let positions, apiStatus;
    const res = await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/positions`);
    console.log(res.status);
    if(res.status === 200) {
        apiStatus = res.status;
        positions = await res.json();
    } else {
        apiStatus = res.status;
        positions = {};
    }
    return ({positions: positions, apiStatus: apiStatus});
};