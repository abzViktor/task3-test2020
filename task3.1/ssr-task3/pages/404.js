import React from 'react';
import styles from '../components/404/404.module.scss';
import NotFoundImage from '../components/404/404-image';
import {useTranslation} from "react-i18next";

export default function NotFound() {
    const {t} = useTranslation();
    return (
        <div className={styles.notFoundContainer}>
            <div className="container">
                <div className={styles.notFoundContent}>
                    <h1 className="heading-2-desktop">{t('NotFound.heading')}</h1>
                    <p className="paragraph-1">{t('NotFound.subheading')}</p>
                    <div className={styles.image404}>
                        <NotFoundImage />
                    </div>
                </div>
            </div>
        </div>
    );
}