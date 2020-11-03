import React from 'react';
import styles from '../components/404/404.module.scss';
import NotFoundImage from '../components/404/404-image';

export default function NotFound() {
    return (
        <div className={styles.notFoundContainer}>
            <div className="container">
                <div className={styles.notFoundContent}>
                    <h1 className="heading-2-desktop">Page is not found</h1>
                    <p className="paragraph-1">Definitely, something went wrong, we can't find the page you searched</p>
                    <div className={styles.image404}>
                        <NotFoundImage />
                    </div>
                </div>
            </div>
        </div>
    );
}