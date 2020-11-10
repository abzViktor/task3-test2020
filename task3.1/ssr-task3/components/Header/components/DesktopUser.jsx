import React, { useEffect, useState, useRef } from 'react';
import { Tooltip } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import PlaceholderName from '../../../assets/placeholders/Rounded_Rectangle_2.svg';
import PlaceholderEmail from '../../../assets/placeholders/Rounded_Rectangle_3.svg';
import PlaceholderImage from '../../../assets/placeholders/Ellipse_1.svg';

const DesktopUser = React.memo((props) => {
  const { user, isUserLoaded } = props;
  const [tipName, setTipName] = useState('');
  const [tipEmail, setTipEmail] = useState('');
  const refContainer = useRef(null);
  const refName = useRef(null);
  const refEmail = useRef(null);

  useEffect(() => {
    if (refName.current.offsetWidth > refContainer.current.offsetWidth) {
      setTipName(user.name);
    }
    if (refEmail.current.offsetWidth > refContainer.current.offsetWidth) {
      setTipEmail(user.email);
    }
  }, [isUserLoaded]);

  const handleImageError = (e) => {
    e.target.onerror = null; e.target.src = 'https://source-task3-test2020viktor-p.abzdev2.com/cover-icon-user.svg';
  };
  return (
    <>
      {isUserLoaded && (
      <>
        <div className="header-contacts" ref={refContainer}>
          <div className="header-user"><Tooltip title={tipName}><Box component="span" className="paragraph-3" ref={refName}>{user.name}</Box></Tooltip></div>
          <div className="header-user"><Tooltip title={tipEmail}><Box component="a" ref={refEmail} href={`mailto:${user.email}`}>{user.email}</Box></Tooltip></div>
        </div>
        <img width="70" height="70" className="header-avatar" src={user.photo} onError={handleImageError} alt="avatar icon" />
      </>
      )}
      {!isUserLoaded && (
      <>
        <div className="header-contacts" ref={refContainer}>
          <div><span ref={refName}><PlaceholderName /></span></div>
          <div><a href="#" aria-label="placeholder" ref={refEmail}><PlaceholderEmail /></a></div>
        </div>
        <PlaceholderImage />
      </>
      )}
    </>
  );
});

export default DesktopUser;

DesktopUser.propTypes = {
  isUserLoaded: PropTypes.bool.isRequired,
  user: PropTypes.shape({ name: PropTypes.string, email: PropTypes.string, photo: PropTypes.string }).isRequired,
};
