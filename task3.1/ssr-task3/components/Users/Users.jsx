import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import styles from './users.module.scss';
import { RootStore } from '../../context/root.context';
import GetUsers from './components/GetUsers';

export default function Users({ initialCount }) {
  const { t } = useTranslation();
  const apiOk = 200;
  const { dispatch } = useContext(RootStore);

  // useEffect(() => {
  //   if (apiStatus !== 200) {
  //     dispatch({
  //       type: 'API_ERROR',
  //       payload: {
  //         state: true,
  //         messageId: 1,
  //       },
  //     });
  //   }
  // }, []);

  return (
    <>
      {apiOk === 200 && (
      <div className={styles.usersContainer}>
        <div className="container">
          <div className={styles.h2Wrapper}>
            <h2 className="heading-2-desktop">{t('Cheerful.1')}</h2>
          </div>
          <div className={styles.pWrapper}>
            <p className="paragraph-1">{t('Cheerful.2')}</p>
          </div>
          <GetUsers initialCount={initialCount} />
        </div>
      </div>
      )}
    </>
  );
}

Users.propTypes = {
  initialCount: PropTypes.number.isRequired,
};
