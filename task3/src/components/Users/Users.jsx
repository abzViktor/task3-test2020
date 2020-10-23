import React, { useContext } from 'react';
import { CircularProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import './Users.scss';
import Tooltip from '@material-ui/core/Tooltip';
import Box from '@material-ui/core/Box';
import { useTranslation } from 'react-i18next';
import HashLinkObserver from 'react-hash-link';
import { RootStore } from '../../shared/root.context';

import { ReactComponent as Placeholder1 } from './Placeholders/Rounded_Rectangle_4.svg';
import { ReactComponent as Placeholder2 } from './Placeholders/Rounded_Rectangle_4 (1).svg';
import { ReactComponent as Placeholder3 } from './Placeholders/Rounded_Rectangle_4 (2).svg';
import { ReactComponent as Placeholder4 } from './Placeholders/Rounded_Rectangle_4 (3).svg';
import { ReactComponent as Placeholder0 } from './Placeholders/image-ph.svg';

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
  const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      fontSize: 14,
      maxWidth: 260,
    },
  }))(Tooltip);
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
    <div className="user-info" ref={refBlock}>
      <p className="user-name">{name}</p>
      <p className="paragraph-3">{position}</p>
      <p>
        <HtmlTooltip title={tip} placement="bottom">
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
        </HtmlTooltip>
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
  // eslint-disable-next-line react/prop-types
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [count, setCount] = React.useState(window.innerWidth > 700 ? 6 : 3);
  const [users, setUsers] = React.useState([]);
  const [showButton, setShowButton] = React.useState(true);
  const [offset, setOffset] = React.useState(0);
  const [noUsers, setNoUsers] = React.useState(false);
  const [isMoreLoaded, setIsMoreLoaded] = React.useState(true);
  const { dispatch } = useContext(RootStore);
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
    window.fetch(link)
      .then((response) => {
        // eslint-disable-next-line react/prop-types
        props.errorHandler(response.status);
        response.json().then((data) => {
          if (data.success) {
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
          // process success response
          } else {
            setShowButton(false);
          }
        }).catch(() => {
          console.log('apiError');
          dispatch({
            type: 'API_ERROR',
            payload: {
              state: true,
              messageId: 1,
            },
          });
        });
      }).catch(() => {
        console.log('apiError');
        dispatch({
          type: 'API_ERROR',
          payload: {
            state: true,
            messageId: 1,
          },
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
            setIsMoreLoaded(true);
            setUsers([
              ...users,
              ...data.users,
            ].sort((a, b) => b.registration_timestamp - a.registration_timestamp));
            setOffset(offset + count);
            if (data.total_users <= offset + count) {
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
          <button hidden={!showButton} type="button" onClick={ShowMore} className="secondary show-more-btn">
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
            <Placeholder0 />
            <div className="user-info">
              <p className="user-name"><Placeholder1 /></p>

              <p className="paragraph-3"><Placeholder2 /></p>
              <div className="placeholder-spacer" />

              <p>
                <Placeholder3 />
              </p>
              <p>
                <Placeholder4 />
              </p>
            </div>
          </div>
        ))}

      </div>
      <div className="button-wrapper">
        <button hidden={!showButton} type="button" onClick={ShowMore} className="secondary show-more-btn">
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
        <div className="anchor-holder"><span id="users" /></div>
        <HashLinkObserver smoothScroll={false} />
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
