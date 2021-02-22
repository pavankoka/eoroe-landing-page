import React from 'react';
import styles from './Header.module.scss';

function Header(props) {
    return (
        <div className={styles.wrapper}>
            <img src={require('assets/logos/eoroe-logo.png')} alt='eoroe-logo' />
            <h2 className={styles.logoText}>eoroe</h2>
        </div>
    )
}

export default Header;