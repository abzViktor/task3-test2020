import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import styles from './users.module.scss';
import { RootStore } from '../root.context';
import GetUsers from './components/GetUsers';

export default function Users({ users, initialCount, apiStatus }) {
  const { t } = useTranslation();
  const apiOk = apiStatus;
  const { dispatch } = useContext(RootStore);

  useEffect(() => {
    if (apiStatus !== 200) {
      dispatch({
        type: 'API_ERROR',
        payload: {
          state: true,
          messageId: 1,
        },
      });
    }
  }, []);

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
          <GetUsers users={users} initialCount={initialCount} />
        </div>
      </div>
      )}
    </>
  );
}

Users.propTypes = {
  users: PropTypes.shape({}).isRequired,
  initialCount: PropTypes.number.isRequired,
  apiStatus: PropTypes.number.isRequired,
};
