import React from 'react';
import cx from 'classnames';
import styles from './Header.module.scss';

function Header() {
    return (
        <div className={styles.wrapper}>
            <p className={styles.header}>Pastelcube</p>
            <div className={styles.links}>
                <p className={cx(styles.link, styles.active)}>Home</p>
                <p className={styles.link}>Vison</p>
                <p className={styles.link}>Team</p>
                <p className={styles.link}>Our Brands</p>
                <p className={cx(styles.link, styles.button)}>contact us</p>
            </div>
        </div>
    )
}

export default Header;