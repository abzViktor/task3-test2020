import React, { useContext, useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import Box from '@material-ui/core/Box';
import { useTranslation } from 'react-i18next';
import styles from './users.module.scss';
import { RootStore } from '../root.context';

export function UserPhoto(props) {
  const { photo } = props;

  return <div className={styles.photoHolder}><img width="70" height="70" src={photo}
                                                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://source-task3-test2020viktor-p.abzdev2.com/cover-icon-user.svg'; }} alt="User" /></div>;
}

const renderImage = (image, fallbackImage) => {
  const onerror = `this.onerror=null;this.src=this.dataset.fallbackImage;`
  return (
      <div className={styles.photoHolder} dangerouslySetInnerHTML={{
        __html: `<img width="70" height="70" onError="${onerror}" data-fallback-image=${fallbackImage} src="${image}" />`
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
  const [isLoaded, setIsLoaded] = React.useState(props.users.success);
  const [count, setCount] = React.useState(0);

  const [users, setUsers] = React.useState(props.users.users);
  const [showButton, setShowButton] = React.useState(true);
  const [offset, setOffset] = React.useState(props.initialCount);
  const [noUsers, setNoUsers] = React.useState(false);
  const [isMoreLoaded, setIsMoreLoaded] = React.useState(true);
  const { dispatch } = useContext(RootStore);
  // const link = ;

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

  // React.useEffect(() => {
  //   const startCount = window.innerWidth > 700 ? 6 : 3;
  //   window.fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?&offset=${offset}&length=${startCount}&count=${startCount}`)
  //     .then((response) => {
  //       // eslint-disable-next-line react/prop-types
  //       props.errorHandler(response.status);
  //       response.json().then((data) => {
  //         if (data.success) {
  //           setIsLoaded(true);
  //           setUsers(data.users);
  //           setOffset(offset + count);
  //           console.log(data.users.length);
  //           if (data.users.length === 0) {
  //             setNoUsers(true);
  //             setShowButton(false);
  //           }
  //           if (data.total_users <= offset) {
  //             setShowButton(false);
  //           }
  //         // process success response
  //         } else {
  //           setShowButton(false);
  //         }
  //       }).catch(() => {
  //         console.log('apiError');
  //         dispatch({
  //           type: 'API_ERROR',
  //           payload: {
  //             state: true,
  //             messageId: 1,
  //           },
  //         });
  //       });
  //     }).catch(() => {
  //       console.log('apiError');
  //       dispatch({
  //         type: 'API_ERROR',
  //         payload: {
  //           state: true,
  //           messageId: 1,
  //         },
  //       });
  //     });
  // }, []);

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
            // process success response
          } else {
            // proccess server errors
          }
        });
      });
  };

  if (isLoaded) {
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
  } if (noUsers) {
    return <div className={styles.noUsers}>{t('no-users.1')}</div>;
  }
  return (
    <div>
      <div className={styles.usersBlock}>
        { [...Array(count)].map(() => (
          <div key={Math.random()} className={styles.userBlock}>
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70"><g><g><path fill="#e2e2e2" d="M35 0c19.33 0 35 15.67 35 35S54.33 70 35 70 0 54.33 0 35 15.67 0 35 0z" /></g></g></svg>
            <div className={styles.userInfo}>
              <p className={styles.userName}><svg xmlns="http://www.w3.org/2000/svg" width="130" height="16" viewBox="0 0 130 16"><g><g><path fill="#e2e2e2" d="M2 0h126a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" /></g></g></svg></p>

              <p className="paragraph-3"><svg xmlns="http://www.w3.org/2000/svg" width="160" height="10" viewBox="0 0 160 10"><g><g><path fill="#e2e2e2" d="M2 0h156a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" /></g></g></svg></p>
              <div className={styles.placeholderSpacer} />

              <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="180" height="10" viewBox="0 0 180 10"><g><g><path fill="#e2e2e2" d="M2 0h176a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" /></g></g></svg>
              </p>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="110" height="10" viewBox="0 0 110 10"><g><g><path fill="#e2e2e2" d="M2 0h106a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" /></g></g></svg>
              </p>
            </div>
          </div>
        ))}

      </div>
      <div className={styles.buttonWrapper}>
        <button hidden={!showButton} type="button" onClick={ShowMore} className={`secondary ${styles.showMoreBtn}`}>
          {t('ShowMore.1')}
        </button>
      </div>
    </div>
  );
}

export default function Users({users, initialCount, apiStatus}) {
  console.log(users);
  console.log(initialCount);
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

        {/* <HashLinkObserver smoothScroll={false} /> */}
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

