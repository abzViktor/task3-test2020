import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './RegistrationBanner.module.scss';

export default React.memo(() => {
  const { t } = useTranslation();

  return (
    <div className={styles.regBanner}>
      <div className="container">
        <div className={styles.registrationTextBlock}>
          <h1 className="heading-2-desktop">
            {t('reg-banner.1')}
          </h1>
          <div className={styles.registrationBannerContent}>
            <div className={styles.paragraphsBanner}>
              <p className="paragraph-2">{t('reg-banner.2')}</p>
              <p className="paragraph-2">{t('reg-banner.3')}</p>
              <p className="paragraph-2">{t('reg-banner.4')}</p>
            </div>
            <div className={styles.imageContainer}>
              <picture>
                <source srcSet="images/man-laptop-v1.svg" media="(min-width: 320px) and (min-width: 992px)" />
                <source srcSet="images/man-laptop-v2.svg" media="(min-width: 500px)" />
                <img src="images/man-laptop-v1.svg" alt="Man from registration page" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
