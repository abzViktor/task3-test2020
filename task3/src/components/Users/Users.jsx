import React from 'react';
import { CircularProgress } from '@material-ui/core';
import './Users.scss';
import Tooltip from '@material-ui/core/Tooltip';
import Box from '@material-ui/core/Box';
import { useTranslation } from 'react-i18next';

export function UserPhoto(props) {
  // eslint-disable-next-line react/prop-types
  const { photo } = props;

  return <div className="photo-holder"><img src={photo} onError={(e) => { e.target.onerror = null; e.target.src = 'cover-icon-user.svg'; }} alt="User" /></div>;
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
    if (refText.current.offsetWidth > refBlock.current.offsetWidth) {
      setTip(email);
    } else {
      setTip('');
    }
  });
  return (
    <div className="user-info" ref={refBlock}>
      <p className="user-name">{name}</p>
      <p className="paragraph-3">{position}</p>
      <p>
        <Tooltip title={tip} placement="bottom-start">
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
      <p><a className="paragraph-3" href="tel: +38(050)6780324">{phone}</a></p>
    </div>
  );
}

export function GetUsers(props) {
  // eslint-disable-next-line react/prop-types
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [count, setCount] = React.useState(window.innerWidth > 700 ? 101 : 3);
  const [users, setUsers] = React.useState([]);
  const [showButton, setShowButton] = React.useState(true);
  const [offset, setOffset] = React.useState(0);
  const [noUsers, setNoUsers] = React.useState(false);
  const [isMoreLoaded, setIsMoreLoaded] = React.useState(true);
  const link = `https://frontend-test-assignment-api.abz.agency/api/v1/users?&offset=${offset}&length=${count}&count=${count}`;

  function handleResize() {
    if (count === 6 && window.innerWidth <= 700) {
      setCount(3);
    }
    if (count === 3 && window.innerWidth > 700) {
      setCount(6);
    }
  }
  const { t } = useTranslation();

  window.addEventListener('resize', handleResize);

  React.useEffect(() => {
    localStorage.setItem('apiResponseStatus', '200');
    window.fetch(link)
      .then((response) => {
        // eslint-disable-next-line react/prop-types
        props.errorHandler(response.status);
        response.json().then((data) => {
          if (data.success) {
            setTimeout(() => {
              setIsLoaded(true);
              setUsers(data.users);
              setOffset(offset + count);
              console.log(data.users.length);
              if (data.users.length === 0) {
                setNoUsers(true);
                setShowButton(false);
              }
              if (data.total_users <= offset) {
                setShowButton(false);
              }
            }, 2000);
          // process success response
          } else {
            setShowButton(false);
          }
        });
      });
  }, []);

  const ShowMore = () => {
    setIsMoreLoaded(false);
    setShowButton(false);
    window.fetch(link)
      .then((response) => {
        console.log(response.status);
        response.json().then((data) => {
          if (data.success) {
            setTimeout(() => {
              setIsMoreLoaded(true);
              setUsers([
                ...users,
                ...data.users,
              ].sort((a, b) => b.registration_timestamp - a.registration_timestamp));
              setOffset(offset + count);
              if (data.total_users <= offset) {
                setShowButton(false);
              } else {
                setShowButton(true);
              }
            }, 2000);
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
        <div className="users-block">
          {users.map((user) => (
            <div key={user.id} className="user-block">
              <UserPhoto photo={user.photo} />
              <UserInfo
                email={user.email}
                name={user.name}
                position={user.position}
                phone={user.phone}
              />
            </div>
          ))}
        </div>

        <div className="button-wrapper">
          {isMoreLoaded === false && <CircularProgress />}
          <button hidden={!showButton} type="button" onClick={ShowMore} className="secondary">
            {t('ShowMore.1')}
          </button>
        </div>
      </div>
    );
  } if (noUsers) {
    return <div className="noUsers">{t('no-users.1')}</div>;
  }
  return (
    <div>
      <div className="users-block">
        { [...Array(count)].map(() => (
          <div key={Math.random()} className="user-block">
            <UserPhoto photo="placeholders/image-ph.svg" />
            <div className="user-info">
              <p className="user-name"><img src="placeholders/Rounded_Rectangle_4.svg" alt="" /></p>
              <p className="paragraph-3"><img src="placeholders/Rounded_Rectangle_4 (1).svg" alt="" /></p>
              <p>
                <img src="placeholders/Rounded_Rectangle_4 (2).svg" alt="" />
              </p>
              <p>
                <img src="placeholders/Rounded_Rectangle_4 (3).svg" alt="" />
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="button-wrapper">
        <button hidden={!showButton} type="button" onClick={ShowMore} className="secondary">
          {t('ShowMore.1')}
        </button>
      </div>
    </div>
  );
}

export default function Users() {
  const { t } = useTranslation();
  const [apiOk, setApiOk] = React.useState(200);
  const errorHandler = (data) => {
    setApiOk(data);
    localStorage.setItem('apiResponseStatus', data);
  };

  return (
    <>
      {apiOk === 200 && (
      <div className="users-container">
        <div className="container">
          <div className="h2-wrapper">
            <h2 className="heading-2-desktop">{t('Cheerful.1')}</h2>
          </div>
          <div className="p-wrapper">
            <p className="paragraph-1">{t('Cheerful.2')}</p>
          </div>
          <GetUsers errorHandler={errorHandler} />
        </div>
      </div>
      )}
    </>
  );
}
