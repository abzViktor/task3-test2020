import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { HeaderStore } from '../../../context/header.context';
import MENU_ITEMS from '../../../constants/menuItems';

export default React.memo(() => {
  const router = useRouter();
  const { t } = useTranslation();
  const [isRegistrationPage, setRegistrationPage] = React.useState(false);
  const { headerState } = useContext(HeaderStore);
  React.useEffect(() => {
    if (window.location.href.match('registration')) {
      setRegistrationPage(true);
    } else if (!window.location.href.match('registration') && isRegistrationPage) {
      setRegistrationPage(false);
    }
  }, [router]);
  return (
    <nav>
      <ul>
        {MENU_ITEMS.map((item) => (<li><a href={`/#${item[0]}`} className={`primary ${headerState.activeMenu === item[0] ? 'active' : null}`}>{t(`${item[1]}.1`)}</a></li>))}
        <li><a href="/registration#form" className={`primary ${isRegistrationPage ? 'active' : null}`}>{t('SignUp.1')}</a></li>
      </ul>
    </nav>
  );
});
