import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { CircularProgress } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from '../users.module.scss';
import UserInfo from './User';

const renderImage = (image, fallbackImage) => {
  const onerror = 'this.onerror=null;this.src=this.dataset.fallbackImage;';
  return (
    <div
      className={styles.photoHolder}
      dangerouslySetInnerHTML={{
        __html: `<img loading="lazy" width="70" height="70" onError="${onerror}" data-fallback-image=${fallbackImage} alt="User avatar" src="${image}" />`,
      }}
    />
  );
};

export default function GetUsers(props) {
  const { initialCount, users } = props;
  const [count, setCount] = React.useState(0);

  const [thisUsers, setUsers] = React.useState(users.users);
  const [showButton, setShowButton] = React.useState(true);
  const [offset, setOffset] = React.useState(initialCount);
  const noUsers = users.length === 0;
  const [isMoreLoaded, setIsMoreLoaded] = React.useState(true);

  function handleResize() {
    if (count === 6 && window.innerWidth <= 700) {
      setCount(3);
    }
    if (count === 3 && window.innerWidth > 700) {
      setCount(6);
    }
  }
  const { t } = useTranslation();

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  const ShowMore = () => {
    const startCount = window.innerWidth > 700 ? 6 : 3;

    setIsMoreLoaded(false);
    setShowButton(false);
    window.fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?&offset=${offset}&length=${startCount}&count=${startCount}`)
      .then((response) => {
        response.json().then((data) => {
          if (data.success) {
            setIsMoreLoaded(true);
            setUsers([
              ...thisUsers,
              ...data.users,
            ].sort((a, b) => b.registration_timestamp - a.registration_timestamp));
            setOffset(offset + startCount);
            if (data.total_users <= offset + startCount) {
              setShowButton(false);
            } else {
              setShowButton(true);
            }
          } else {
            // proccess server errors
          }
        });
      });
  };
  if (noUsers) {
    return <div className={styles.noUsers}>{t('no-users.1')}</div>;
  }
  return (
    <div>
      <div className={styles.usersBlock}>
        {thisUsers.map((user) => (
          <div key={user.id} className={styles.userBlock}>
            {renderImage(user.photo, 'https://source-task3-test2020viktor-p.abzdev2.com/cover-icon-user.svg')}
            <UserInfo
              email={user.email}
              name={user.name}
              position={user.position}
              phone={user.phone}
            />
          </div>
        ))}
      </div>

      <div className={styles.buttonWrapper}>
        {isMoreLoaded === false && <CircularProgress />}
        <button hidden={!showButton} type="button" onClick={ShowMore} className={`secondary ${styles.showMoreBtn}`}>
          {t('ShowMore.1')}
        </button>
      </div>
    </div>
  );
}

GetUsers.propTypes = {
  users: PropTypes.shape({ users: PropTypes.arrayOf(PropTypes.object), length: PropTypes.func }).isRequired,
  initialCount: PropTypes.number.isRequired,
};
