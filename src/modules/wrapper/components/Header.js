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

function Header({ block, scrollRef, dispatch }) {
    const history = useHistory();
    // const query = useQuery();
    // const block = query.get('block');

    function handleClick({ block }) {
        if (!scrollRef) return;

        switch (block) {
            case ('home'):
                scrollRef.scrollTop = 0;
                break;
            case ('vison'):
                scrollRef.scrollTop = (height);
                break;
            case ('brands'):
                scrollRef.scrollTop = (2 * height);
                break;
            case ('team'):
                scrollRef.scrollTop = (3 * height);
                break;
            case ('contact'):
                scrollRef.scrollTop = (4 * height);
                break;
            default:
                scrollRef.scrollTop = (0)
        }
    }

    return (
        <div className={styles.wrapper}>
            <p className={styles.header} onClick={() => handleClick({ block: 'home' })}>
                <img className={styles.logo} src={require('assets/logos/pastelcube.svg')} alt='pastelcube-logo' />
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