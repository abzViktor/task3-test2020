import React from 'react';
import styles from './banner.module.scss';
import { withTranslation } from '../../i18n';

const Banner = ({ t }) => (

  <div className={styles.mainBanner}>
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
          <a><button type="button" className="primary">{t('SignUp.1')}</button></a>
        </div>
      </div>
    </div>
  </div>
);

export default withTranslation()(Banner);
