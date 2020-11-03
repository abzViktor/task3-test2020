import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './RegistrationBanner.module.scss';

export default function RegistrationBanner() {
  const { t } = useTranslation();
  const [support, setSupport] = React.useState(true);

  React.useEffect(() => {
    let elem = document.createElement('canvas');

    if (!!(elem.getContext && elem.getContext('2d')))
    {
      // was able or not to get WebP representation
      setSupport(elem.toDataURL('image/webp').indexOf('data:image/webp') === 0);
    }
  }, []);
  return (
    <div className={`${styles.regBanner} ${support ? styles.webp : styles.noWebp}`}>
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
                <source srcSet="images/man-laptop-v1.svg" media="(min-width: 320px) and (min-width: 1024px)" />
                <source srcSet="images/man-laptop-v2.svg" media="(min-width: 500px)" />
                <img src="images/man-laptop-v1.svg" alt="Man from registration page" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
