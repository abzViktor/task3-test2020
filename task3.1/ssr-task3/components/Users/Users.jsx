import React, { useContext, useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import Box from '@material-ui/core/Box';
import { useTranslation } from 'react-i18next';
import styles from './users.module.scss';
import { RootStore } from '../root.context';

const renderImage = (image, fallbackImage) => {
  const onerror = `this.onerror=null;this.src=this.dataset.fallbackImage;`
  return (
      <div className={styles.photoHolder} dangerouslySetInnerHTML={{
        __html: `<img loading="lazy" width="70" height="70" onError="${onerror}" data-fallback-image=${fallbackImage} alt="User avatar" src="${image}" />`
      }}>
      </div>
  )
}

export function UserInfo(props) {
  const {
    // eslint-disable-next-line react/prop-types
    name, email, position, phone,
  } = props;
  const [tip, setTip] = React.useState('');
  const refText = React.useRef(null);
  const refBlock = React.useRef(null);
  React.useEffect(() => {
    if (refText.current.offsetWidth > refBlock.current.offsetWidth + 4) {
      setTip(email);
    } else {
      setTip('');
    }
  });
  return (
    <div className={styles.userInfo} ref={refBlock}>
      <p className={styles.userName}>{name}</p>
      <p className="paragraph-3">{position}</p>
      <p>
        <Tooltip title={tip} placement="bottom">
          <Box
            component="a"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
            className="paragraph-3"
            href={`mailto:${email}`}
            ref={refText}
          >
            {email}
          </Box>
        </Tooltip>
      </p>
      <p>
        <a className="paragraph-3" href={`tel: ${phone}`}>
          {phone.toString().slice(0, 3)}
          &nbsp;(0
          {phone.toString().slice(4, 6)}
          )&nbsp;
          {phone.toString().slice(6, 9)}
          &nbsp;
          {phone.toString().slice(9, 11)}
          &nbsp;
          {phone.toString().slice(11, 13)}
        </a>
      </p>
    </div>
  );
}

export function GetUsers(props) {
  const [count, setCount] = React.useState(0);

  const [users, setUsers] = React.useState(props.users.users);
  const [showButton, setShowButton] = React.useState(true);
  const [offset, setOffset] = React.useState(props.initialCount);
  const noUsers = props.users.length === 0;
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
        console.log(response.status);
        response.json().then((data) => {
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

        <div className={styles.buttonWrapper}>
          {isMoreLoaded === false && <CircularProgress />}
          <button hidden={!showButton} type="button" onClick={ShowMore} className={`secondary ${styles.showMoreBtn}`}>
            {t('ShowMore.1')}
          </button>
        </div>
      </div>
  );
}

export default function Users({users, initialCount, apiStatus}) {
  const { t } = useTranslation();
  const [apiOk, setApiOk] = React.useState(apiStatus);
  const { dispatch } = useContext(RootStore);


  useEffect(() => {
    if(apiStatus !== 200) {
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

