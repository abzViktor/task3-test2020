import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import styles from './users.module.scss';
import GetUsers from './components/GetUsers';

const Users = React.memo(({ initialCount }) => {
  const { t } = useTranslation();
  const apiOk = 200;

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
});

export default Users;

Users.propTypes = {
  initialCount: PropTypes.number.isRequired,
};
