import React from 'react';
import styles from './Header.module.scss';

function Header() {
    return (
        <div className={styles.wrapper}>
            <img src={require('assets/logos/eoroe-logo-white.png')} alt='eoroe-logo' />
            <h2 className={styles.logoText}>eoroe</h2>
        </div>
    )
}

export default Header;