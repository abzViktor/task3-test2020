import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { HeaderStore } from '../../header.context';

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
        <li><a href="/#about" className={`primary ${headerState.activeMenu === 'about' ? 'active' : null}`}>{t('About.1')}</a></li>
        <li><a href="/#relation" className={`primary ${headerState.activeMenu === 'relation' ? 'active' : null}`}>{t('Relationships.1')}</a></li>
        <li><a href="/#users" className={`primary ${headerState.activeMenu === 'users' ? 'active' : null}`}>{t('Users.1')}</a></li>
        <li><a href="/registration#form" className={`primary ${isRegistrationPage ? 'active' : null}`}>{t('SignUp.1')}</a></li>
      </ul>
    </nav>
  );
});
