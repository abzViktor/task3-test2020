import React from 'react';
import { useTranslation } from 'react-i18next';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import PlaceholderImage from '../../../assets/placeholders/Ellipse_1.svg';
import PlaceholderName from '../../../assets/placeholders/Rounded_Rectangle_2.svg';
import PlaceholderEmail from '../../../assets/placeholders/Rounded_Rectangle_3.svg';
import MENU_ITEMS from '../../../constants/menuItems';

const MobileMenu = React.memo((props) => {
  const {
    isUserLoaded, user, toggleMenu, open,
  } = props;

  const { t } = useTranslation();
  return (
    <>
      <div className={`sideMenu ${open ? 'opened' : 'closed'}`}>
        {isUserLoaded && (
        <>
          <div className="side-menu-container-contacts">
            <div><img width="70" onError={(e) => { e.target.onerror = null; e.target.src = 'https://source-task3-test2020viktor-p.abzdev2.com/cover-icon-user.svg'; }} height="70" className="header-avatar-mob" src={user.photo} alt="avatar icon" /></div>
            <div><span className="name mob-name">{user.name}</span></div>
            <div><a href={`mailto:${user.email}`}>{user.email}</a></div>
          </div>
        </>
        )}
        {!isUserLoaded && (
        <div className="side-menu-container-contacts">
          <div><PlaceholderImage /></div>
          <div><span className="name"><PlaceholderName /></span></div>
          <div><a aria-label="placeholder" href="mailto:Superstar@gmail.com"><PlaceholderEmail /></a></div>
        </div>
        )}
        <Divider />
        <div className="side-menu-container-nav">
          <nav>
            <ul>
              {MENU_ITEMS.map((item) => (<li><a href={`/#${item[0]}`} onClick={toggleMenu(false)} className="primary">{t(`${item[1]}.1`)}</a></li>))}
              <li><a href="/registration#form" onClick={toggleMenu(false)} className="primary">{t('SignUp.1')}</a></li>
              <li><a href="/terms" onClick={toggleMenu(false)} className="primary">{t('links.T&C')}</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
});

MobileMenu.propTypes = {
  isUserLoaded: PropTypes.bool.isRequired,
  user: PropTypes.shape({ name: PropTypes.string, email: PropTypes.string, photo: PropTypes.string }).isRequired,
  toggleMenu: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default MobileMenu;
