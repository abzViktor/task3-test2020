import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './letsGet.module.scss';
import ManCool from '../../assets/man-mobile.svg';

export default React.memo(() => {
  const { t } = useTranslation();

  return (

    <div className={styles.letsContainer}>
      <div className="container">
        <h2 className="heading-2-desktop">{t('LetsGet.1')}</h2>
        <div className={styles.letsBlock}>
          <div className={styles.letsImageHolder}>
            <ManCool />
          </div>
          <div className={styles.letsTextBlock}>
            <h3 className="heading-3-desktop">{t('Cool.1')}</h3>
            <p className={classNames("paragraph-2", styles.middleText)}>
              {t('Looking.1')}
            </p>
            <p className={classNames("paragraph-2", styles.bottomText)}>
              {t('Looking.2')}
            </p>
            <a href="/registration#form" className="text-link" rel="stylesheet">{t('SignUp.1')}</a>
          </div>
        </div>
      </div>
    </div>
  );
});
