import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../components/Terms/Terms.module.scss';

export default React.memo(() => {
  const { t } = useTranslation();
  return (
    <div className={styles.termsContainer}>

      <section className={styles.headingSection}>
        <div className="container">
          <h1 className="heading-2-desktop">{t('terms.heading')}</h1>
          <p className="paragraph-1">{t('terms.subheading')}</p>
        </div>
      </section>
      <div className="container">
        <div className="all-text">
          <section className={styles.topicArticle}>
            <h2 className={`${styles.topicHeading} ${styles.heading3desktop}`}>{t('terms.forScience')}</h2>
            <p className={`${styles.paragraph2} ${styles.mbP}`}>
              {t('terms.newCommon')}
            </p>
            <p className={styles.paragraph2}>
              {t('terms.newCommon2')}
            </p>
          </section>
          <section className={styles.topicArticle}>
            <h2 className={`${styles.topicHeading} ${styles.heading3desktop}`}>{t('terms.moreSimple')}</h2>
            <p className={styles.paragraph2}>
              {t('terms.moreSimpleContent')}
            </p>
            <ul>
              <li className={styles.paragraph2}><span>{t('terms.listItem.1')}</span></li>
              <li className={styles.paragraph2}><span>{t('terms.listItem.2')}</span></li>
              <li className={`${styles.paragraph2} ${styles.lineHeight}`}><span>{t('terms.listItem.3')}</span></li>
              <li className={styles.paragraph2}><span>{t('terms.listItem.4')}</span></li>
              <li className={styles.paragraph2}><span>{t('terms.listItem.5')}</span></li>
            </ul>
            <p className={styles.paragraph2}>
              {t('terms.langOffer')}
            </p>
          </section>
          <section className={`${styles.topicArticle} ${styles.mb3}`}>
            <h2 className={`${styles.topicHeading} ${styles.heading3desktop}`}>{t('terms.Cambridge')}</h2>
            <div className={styles.subArticle}>
              <h3 className={`${styles.topicHeading} ${styles.heading4desktop}`}>{t('terms.Realizes')}</h3>
              <p className="paragraph-2">{t('terms.realizesContent')}</p>
            </div>
            <div className={styles.subArticle}>
              <h3 className={`${styles.topicHeading} ${styles.heading4desktop}`}>{t('terms.beSimple')}</h3>
              <p className={`${styles.paragraph2} ${styles.mbP}`}>
                {t('terms.beSimpleContent.1')}
              </p>
              <p className={styles.paragraph2}>
                {t('terms.beSimpleContent.2')}
                <mark className={styles.mark}>{t('terms.beSimpleContent.mark')}</mark>
                {t('terms.beSimpleContent.3')}
              </p>
            </div>
            <div className={styles.subArticle}>
              <h3 className={`${styles.topicHeading} ${styles.heading4desktop}`}>{t('terms.Myth')}</h3>
              <p className={styles.paragraph2}>{t('terms.mythContent')}</p>
            </div>
          </section>
          <section className={`${styles.topicArticle} ${styles.mb4}`}>
            <h2 className={`${styles.topicHeading} ${styles.heading3desktop}`}>{t('terms.trivialExample')}</h2>
            <p className={`${styles.paragraph2} ${styles.mbP}`}>
              {t('terms.trivialExampleContent.1')}
            </p>
            <p className={`${styles.paragraph2} ${styles.lastMargin}`}>
              {t('terms.trivialExampleContent.2')}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
});
