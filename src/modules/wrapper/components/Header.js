import React from 'react';
import { useHistory, useLocation } from "react-router-dom";

import cx from 'classnames';
import styles from './Header.module.scss';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Header() {
    const history = useHistory();
    const query = useQuery();
    const block = query.get('block');

    return (
        <div className={styles.wrapper}>
            <p className={styles.header} onClick={() => history.push('/?block=home')}>Pastelcube</p>
            <div className={styles.links}>
                <p className={cx(styles.link, { [styles.active]: block === 'home' })} onClick={() => history.push('/?block=home')}>Home</p>
                <p className={cx(styles.link, { [styles.active]: block === 'vison' })} onClick={() => history.push('/?block=vison')}>Vison</p>
                <p className={cx(styles.link, { [styles.active]: block === 'team' })} onClick={() => history.push('/?block=team')}>Team</p>
                <p className={cx(styles.link, { [styles.active]: block === 'brands' })} onClick={() => history.push('/?block=brands')}>Our Brands</p>
                <p className={cx(styles.link, styles.button)} onClick={() => history.push('/?block=contact')}> contact us</p>
            </div>
        </div>
    )
}

export default Header;