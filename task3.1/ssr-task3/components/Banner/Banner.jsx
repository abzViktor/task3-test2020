import React from 'react';
import styles from './banner.module.scss';
import { withTranslation } from '../../i18n';

const support_format_webp = () =>
{
  let res = false;
  React.useEffect(() => {
    let elem = document.createElement('canvas');

    if (!!(elem.getContext && elem.getContext('2d')))
    {
      // was able or not to get WebP representation
      res = elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    }
  }, [])
  return res;
}

const Banner = ({ t }) => {
 const [support, setSupport] = React.useState(false);

  React.useEffect(() => {
    let elem = document.createElement('canvas');

    if (!!(elem.getContext && elem.getContext('2d')))
    {
      // was able or not to get WebP representation
      setSupport(elem.toDataURL('image/webp').indexOf('data:image/webp') === 0);
    }
  }, []);
  console.log(support);
  return(
      <div className={`${styles.mainBanner} ${support ? styles.webp : styles.noWebp}`}>
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
}

export default withTranslation()(Banner);
