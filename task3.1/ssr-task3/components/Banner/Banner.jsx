import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import styles from './banner.module.scss';

const Banner = React.memo((props) => {
  const { webpSupport } = props;
  const { t } = useTranslation();
  return (
    <div className={`${webpSupport ? styles.webp : styles.noWebp} ${styles.mainBanner}`}>
      <div className="container">
        <div className={styles.textBlock}>
          <div>
            <h1 className={`${styles.h1} heading-1-desktop`}>
              {t('TestAssignment.1')}
            </h1>
          </div>
          <div className={styles.mainText}>
            <p className={`${styles.p} paragraph-1`}>
              <span className={`${styles.p} ${styles.allVisible}`}>{t('KindlyRemind.1')}</span>
              <span className={styles.desktopVisible}>
                {t('KindlyRemind.2')}
              </span>
            </p>
          </div>
          <div className={styles.buttonWrapper}>
            <a href="registration#form"><button id="bannerButtonGA" type="button" className="primary">{t('SignUp.1')}</button></a>
          </div>
        </div>
      </div>
    </div>
  );
});

Banner.propTypes = {
  webpSupport: PropTypes.bool.isRequired,
};

export default Banner;
