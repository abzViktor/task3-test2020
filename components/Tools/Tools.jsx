import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './tools.module.scss';
import JsIcon from '../../assets/tools/javascript.svg';
import CssIcon from '../../assets/tools/css.svg';
import HtmlIcon from '../../assets/tools/html.svg';

export default React.memo(() => {
  const { t } = useTranslation();

  return (
    <div className={styles.toolsContainer}>
      <div className="container">
        <div className={styles.headingHolder}>
          <h2 className="heading-2-desktop">
            {t('AboutRelationships.1')}
          </h2>
        </div>
        <div className={styles.toolsContent}>
          <div>
            <div className={classNames(styles.svgHolder, styles.htmlSvgHolder)}>
              <HtmlIcon />
            </div>
            <div>
              <h3 className="heading-3-desktop">{t('html.1')}</h3>
              <p className="paragraph-2">
                {t('html.2')}
              </p>
            </div>
          </div>
          <div className={styles.cssBlock}>
            <div className={styles.svgHolder}>
              <CssIcon />
            </div>

            <div>
              <h3 className="heading-3-desktop">{t('css.1')}</h3>
              <p className="paragraph-2">
                {t('css.2')}
              </p>
            </div>
          </div>
          <div className={styles.jsBlock}>
            <div className={styles.svgHolder}>
              <JsIcon />
            </div>
            <div>
              <h3 className="heading-3-desktop">{t('js.1')}</h3>
              <p className="paragraph-2">
                {t('js.2')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
