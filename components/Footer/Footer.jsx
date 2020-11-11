import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import * as Contacts from '../../constants/contacts';

import FacebookIcon from '../../assets/footer-icons/facebook.svg';
import TwitterIcon from '../../assets/footer-icons/twitter.svg';
import PinterestIcon from '../../assets/footer-icons/pinterest.svg';
import InstagramIcon from '../../assets/footer-icons/instagram.svg';
import LinkedInIcon from '../../assets/footer-icons/linkedin.svg';
import Mail from '../../assets/footer-icons/mail.svg';
import Phone from '../../assets/footer-icons/phone.svg';
import CellPhone from '../../assets/footer-icons/cellphone.svg';

import Logo from '../../assets/logo.svg';
import MENU_ITEMS from '../../constants/menuItems';

export default React.memo(() => {
  const { t, i18n } = useTranslation();
  const initialLang = {
    en: 'inactive',
    de: 'inactive',
  };
  const [activeLang, setActiveLang] = useState(initialLang);
  const footerLinks = [[{ title: 'News', link: '#' }, { title: 'Blog', link: '#' }, { title: 'Partners', link: '#' }, { title: 'Shop', link: '#' }],
    [{ title: 'Overview', link: '#' }, { title: 'Design', link: '#' }, { title: 'Code', link: '#' }, { title: 'Collaborate', link: '#' }],
    [{ title: 'Tutorials', link: '#' }, { title: 'Resources', link: '#' }, { title: 'Guides', link: '#' }, { title: 'Examples', link: '#' }],
    [{ title: 'FAQ', link: '#' }, { title: 'Terms', link: '/terms' }, { title: 'Conditions', link: '/terms' }, { title: 'Help', link: '#' }],
  ];
  const socialNetworks = [<FacebookIcon />, <LinkedInIcon />, <InstagramIcon />, <TwitterIcon />, <PinterestIcon />];

  useEffect(() => {
    document.cookie.split(' ').forEach((cookie) => {
      if (cookie.match('next-i18next')) {
        setActiveLang({
          ...initialLang,
          [cookie.split('=')[1].replace(';', '')]: 'active',
        });
      }
    });
  }, []);

  function handleClick(lang) {
    i18n.changeLanguage(lang);
    setActiveLang({
      ...initialLang,
      [lang]: 'active',
    });
  }
  return (
    <footer>
      <div className="container">
        <div className="top-footer">
          <div className="logo-container">
            <a aria-label="Logo" href="#"><Logo /></a>
          </div>
          <nav>
            <ul>
              {MENU_ITEMS.map((item) => (<li><a href={`/#${item[0]}`} className="secondary">{t(`${item[1]}.1`)}</a></li>))}
              <li><a href="/registration#form" className="secondary">{t('SignUp.1')}</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="middle-footer">
          <div className="flex footer-contacts-container">
            <div className="footer-contacts">
              <div>
                <a className="contact-link" href={`mailto:${Contacts.CONTACT_EMAIL}`}>
                  <Mail />
                  {Contacts.CONTACT_EMAIL}
                </a>
              </div>
              <div>
                <a className="contact-link" href={`tel:${Contacts.CONTACT_PHONE}`}>
                  <Phone />
                  {Contacts.CONTACT_PHONE}
                </a>
              </div>
              <div>
                <a className="contact-link" href={`tel:${Contacts.CONTACT_CELL_PHONE}`}>
                  <CellPhone />
                  {Contacts.CONTACT_CELL_PHONE}
                </a>
              </div>
            </div>
            <div className="other-links">
              {footerLinks.map((linkBlock, index) => (
                <ul key={index}>
                  {linkBlock.map((link) => (
                    <li key={link.title}><a className="secondary" href={link.link}>{t(`links.${link.title}`)}</a></li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="copyright">
            <span>
              © abz.agency
              {' '}
              {t('testTask.1')}
            </span>
          </div>
          <div className="lang">
            <button type="button" onClick={() => handleClick('en')} className={activeLang.en}>EN</button>
            <button type="button" onClick={() => handleClick('de')} className={activeLang.de}>DE</button>
          </div>
          <div className="social-networks">
            {socialNetworks.map((component, index) => (
              <a key={index} className="social-link" href="#">{component}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
});
