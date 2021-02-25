import React from 'react';
import { useHistory, useLocation } from "react-router-dom";

import homeActions from 'redux/actions/home';

import cx from 'classnames';
import styles from './Header.module.scss';

const {
    setBlock
} = homeActions;

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Header({ block, dispatch }) {
    const history = useHistory();
    // const query = useQuery();
    // const block = query.get('block');

    function handleClick({ block }) {
        dispatch(setBlock({ block }));
    }

    return (
        <div className={styles.wrapper}>
            <p className={styles.header} onClick={() => history.push('/?block=home')}>
                <img className={styles.logo} src={require('assets/logos/pascelcube.png')} alt='pascelcube-logo' />
                Pastelcube
            </p>
            <div className={styles.links}>
                <p className={cx(styles.link, { [styles.active]: block === 'home' })} onClick={() => handleClick({ block: 'home' })}>Home</p>
                <p className={cx(styles.link, { [styles.active]: block === 'vison' })} onClick={() => handleClick({ block: 'vison' })}>Vison</p>
                <p className={cx(styles.link, { [styles.active]: block === 'brands' })} onClick={() => handleClick({ block: 'brands' })}>Our Brands</p>
                <p className={cx(styles.link, { [styles.active]: block === 'team' })} onClick={() => handleClick({ block: 'team' })}>Team</p>
                <p className={cx(styles.link, styles.button)} onClick={() => handleClick({ block: 'contact' })}> contact us</p>
            </div>
        </div>
    )
}

export default Header;