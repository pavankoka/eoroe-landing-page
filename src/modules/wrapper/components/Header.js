import React from 'react';
import { useHistory, useLocation } from "react-router-dom";

import homeActions from 'redux/actions/home';

import cx from 'classnames';
import styles from './Header.module.scss';

const height = window.innerHeight - 101;
const {
    setBlock
} = homeActions;

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Header({ block, isMobile, scrollRef, dispatch }) {
    const history = useHistory();
    // const query = useQuery();
    // const block = query.get('block');

    return (
        <div className={cx(styles.wrapper, { [styles.mobile]: isMobile })}>
            <a href='#home' className={styles.header}>
                <img className={styles.logo} src={require('assets/logos/pastelcube.svg')} alt='pastelcube-logo' />
                Pastelcube
            </a>
            <div className={styles.links}>
                <a
                    href='#home'
                    className={cx(styles.link, { [styles.active]: block === 'home' })}
                >
                    Home
                </a>
                <a
                    href='#vison'
                    className={cx(styles.link, { [styles.active]: block === 'vison' })}
                >
                    Vison
                </a>
                <a
                    href='#brands'
                    className={cx(styles.link, { [styles.active]: block === 'brands' })}
                >
                    Our Brands
                </a>
                <a
                    href='#team'
                    className={cx(styles.link, { [styles.active]: block === 'team' })}
                >
                    Team
                </a>
                <a
                    href='#contact'
                    className={cx(styles.link, styles.button)}
                >
                    contact us
                </a>
            </div>
        </div >
    )
}

export default Header;