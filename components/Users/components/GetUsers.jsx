import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { CircularProgress } from '@material-ui/core';
import PropTypes from 'prop-types';
import { debounce, throttle } from 'throttle-debounce';
import styles from '../users.module.scss';
import UserInfo from './User';
import { getMoreUsers, getUsers } from '../../../services/api';
import { ReactComponent as Placeholder0 } from '../../../assets/placeholders/image-ph.svg';
import { ReactComponent as Placeholder1 } from '../../../assets/placeholders/Rounded_Rectangle_4.svg';
import { ReactComponent as Placeholder2 } from '../../../assets/placeholders/Rounded_Rectangle_4 (1).svg';
import { ReactComponent as Placeholder3 } from '../../../assets/placeholders/Rounded_Rectangle_4 (2).svg';
import { ReactComponent as Placeholder4 } from '../../../assets/placeholders/Rounded_Rectangle_4 (3).svg';

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

const GetUsers = React.memo((props) => {
  const { initialCount } = props;
  const [count, setCount] = React.useState(0);
  const [users, setUsers] = React.useState([]);
  const [showButton, setShowButton] = React.useState(true);
  const [offset, setOffset] = React.useState(initialCount);
  const [noUsers, setNoUsers] = React.useState(false);
  const [isMoreLoaded, setIsMoreLoaded] = React.useState(true);
  const [loadUsers, setLoadUsers] = React.useState(false);
  const [usersLoaded, setUsersLoaded] = React.useState(false);

  function handleResize() {
    if (count === 6 && window.matchMedia('(max-width: 700px)').matches) {
      setCount(3);
    }
    if (count === 3 && window.matchMedia('(min-width: 701px)').matches) {
      setCount(6);
    }
  }

  function handleScroll() {
    const usersBlock = document.getElementById('usersBlock').offsetTop;
    if (window.pageYOffset + window.innerWidth + 300 > usersBlock) {
      setLoadUsers(true);
    }
  }
  const { t } = useTranslation();

  useEffect(() => {
    window.addEventListener('resize', debounce(200, handleResize));
    if (loadUsers === true) {
      window.removeEventListener('resize', debounce(200, handleResize));
    }
    return window.removeEventListener('resize', debounce(200, handleResize));
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', throttle(200, handleScroll));
    return window.removeEventListener('resize', throttle(200, handleScroll));
  }, []);

  useEffect(() => {
    if (loadUsers) {
      getUsers(initialCount).then((data) => {
        if (data.success) {
          setUsers(data.users);
          setUsersLoaded(true);
          if (data.users.length === 0) {
            setNoUsers(true);
            setShowButton(false);
          }
          if (data.total_users <= offset) {
            setShowButton(false);
          }
        }
      });
    }
  }, [loadUsers]);

  const ShowMore = async () => {
    const startCount = window.innerWidth > 700 ? 6 : 3;

    setIsMoreLoaded(false);
    setShowButton(false);
    const data = await getMoreUsers(offset, startCount);
    if (data.success) {
      setIsMoreLoaded(true);
      setUsers([
        ...users,
        ...data.users,
      ].sort((a, b) => b.registration_timestamp - a.registration_timestamp));
      setOffset(offset + startCount);
      if (data.total_users <= offset + startCount) {
        setShowButton(false);
      } else {
        setShowButton(true);
      }
    }
  };
  if (noUsers) {
    return <div className={styles.noUsers}>{t('no-users.1')}</div>;
  }
  return (
    <div id="usersBlock">
      {usersLoaded
      && (
      <div className={styles.usersBlock}>
        {users.map((user) => (
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
      )}
      {!usersLoaded
        && (
        <div className={styles.usersBlock}>
          { [...Array(initialCount)].map(() => (
            <div key={Math.random()} className={styles.userBlock}>
              <Placeholder0 />
              <div className={styles.userInfo}>
                <p className={styles.userName}><Placeholder1 /></p>
                <p className="paragraph-3"><Placeholder2 /></p>
                <div className={styles.placeholderSpacer} />
                <p><Placeholder3 /></p>
                <p><Placeholder4 /></p>
              </div>
            </div>
          ))}
        </div>
        )}

      <div className={styles.buttonWrapper}>
        {isMoreLoaded === false && <CircularProgress />}
        <button hidden={!showButton} type="button" onClick={ShowMore} className={classNames("secondary", styles.showMoreBtn)}>
          {t('ShowMore.1')}
        </button>
      </div>
    </div>
  );
});

GetUsers.propTypes = {
  initialCount: PropTypes.number.isRequired,
};

export default GetUsers;
