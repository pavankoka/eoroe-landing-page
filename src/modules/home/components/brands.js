import React from 'react';
import cx from 'classnames';
import styles from './brands.module.scss';

function Brands() {
    return (
        <div className={styles.wrapper}>
            <p className={styles.header}>our brands</p>
            <div className={styles.cards}>
                <div className={cx(styles.card, styles.one)}>
                    <p className={styles.text}>eoroe</p>
                    <p className={styles.subText}>the dance app</p>
                    <p className={styles.button} onClick={() => window.location.href = "http://eoroe.com/"}>visit site</p>
                </div>
                <div className={cx(styles.card, styles.two)}>
                    <p className={styles.text}>znanye</p>
                    <p className={styles.subText}>make it reality</p>
                    <p className={styles.button} onClick={() => window.location.href = "http://znanye.com/"}>visit site</p>
                </div>
                <div className={cx(styles.card, styles.three)} style={{ marginRight: 0 }}>
                    <p className={styles.text}>hyrebook</p>
                    <p className={styles.subText}>find the perfect job</p>
                    <p className={styles.button} onClick={() => window.location.href = "http://hyrebook.com/"}>visit site</p>
                </div>
            </div>
        </div >
    )
}

export default Brands;