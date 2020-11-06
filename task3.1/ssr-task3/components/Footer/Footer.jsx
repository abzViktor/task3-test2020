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

export default function Footer() {
  const { t, i18n } = useTranslation();
  const initialLang = {
    en: 'inactive',
    de: 'inactive',
  };
  const [activeLang, setActiveLang] = useState(initialLang);
  const footerLinks = [[['News', '#'], ['Blog', '#'], ['Partners', '#'], ['Shop', '#']],
    [['Overview', '#'], ['Design', '#'], ['Code', '#'], ['Collaborate', '#']],
    [['Tutorials', '#'], ['Resources', '#'], ['Guides', '#'], ['Examples', '#']],
    [['FAQ', '#'], ['Terms', '/terms'], ['Conditions', '/terms'], ['Help', '#']],
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
              <li><a href="/#about" className="secondary">{t('About.1')}</a></li>
              <li><a href="/#relation" className="secondary">{t('Relationships.1')}</a></li>
              <li><a href="/#users" className="secondary">{t('Users.1')}</a></li>
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
                <a className="contact-link" href={`mailto:${Contacts.CONTACTEMAIL}`}>
                  <Mail />
                  {Contacts.CONTACTEMAIL}
                </a>
              </div>
              <div>
                <a className="contact-link" href={`tel:${Contacts.CONTACTPHONE}`}>
                  <Phone />
                  {Contacts.CONTACTPHONE}
                </a>
              </div>
              <div>
                <a className="contact-link" href={`tel:${Contacts.CONTACTCELLPHONE}`}>
                  <CellPhone />
                  {Contacts.CONTACTCELLPHONE}
                </a>
              </div>
            </div>
            <div className="other-links">
              {footerLinks.map((linkBlock, index) => (
                <ul key={index}>
                  {linkBlock.map((link) => (
                    <li key={link[0]}><a className="secondary" href={link[1]}>{t(`links.${link[0]}`)}</a></li>
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
}
