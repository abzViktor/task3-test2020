import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

export default function DesktopMenu() {
  const { t } = useTranslation();
  const initialActive = {
    about: '',
    relation: '',
    users: '',
    registration: '',
  };
  const [activeMenu, setActiveMenu] = useState(initialActive);
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem('active');
    function checkActive() {
      setTimeout(() => {
        const item = localStorage.getItem('active');

        if (item) {
          setActiveMenu({
            ...initialActive,
            [item]: 'active',
          });
        } else {
          setActiveMenu({
            ...initialActive,
          });
        }
      }, 300);
    }
    if (window.location.href.match('registration')) {
      console.log('Location changed');
      setActiveMenu({
        ...initialActive,
        registration: 'primary active',
      });
    } else {
      console.log('Location changed');
      checkActive();
      window.addEventListener('scroll', checkActive);
      return () => {
        window.removeEventListener('scroll', checkActive);
      };
    }
  }, [router]);
  return (
    <nav>
      <ul>
        <li><a href="/#about" className={`primary ${activeMenu.about}`}>{t('About.1')}</a></li>
        <li><a href="/#relation" className={`primary ${activeMenu.relation}`}>{t('Relationships.1')}</a></li>
        <li><a href="/#users" className={`primary ${activeMenu.users}`}>{t('Users.1')}</a></li>
        <li><a href="/registration#form" className={`primary ${activeMenu.registration}`}>{t('SignUp.1')}</a></li>
      </ul>
    </nav>
  );
}
