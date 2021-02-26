import React, { useEffect, useRef } from 'react';
import { InViewPort } from 'utils';
import cx from 'classnames';
import styles from './brands.module.scss';

function Brands({ handleViewPort, scrollPosition }) {
    const homeRef = useRef(null);

    useEffect(() => {
        if (homeRef.current) {
            if (InViewPort(homeRef.current))
                handleViewPort({ block: 'brands' });
        }
    }, [scrollPosition]);

    return (
        <div className={styles.wrapper} ref={homeRef}>
            <p className={styles.header}>our brands</p>
            <div className={styles.cards}>
                <div className={cx(styles.card, styles.one)}>
                    <p className={styles.text}>eoroe</p>
                    <p className={styles.subText}>the dance app</p>
                    <p className={styles.button} onClick={() => window.open("http://eoroe.com/", "_blank")}>explore</p>
                </div>
                <div className={cx(styles.card, styles.two)}>
                    <p className={styles.text}>znanye</p>
                    <p className={styles.subText}>make it reality</p>
                    <p className={styles.button} onClick={() => window.open("http://znanye.com/", "_blank")}>explore</p>
                </div>
                <div className={cx(styles.card, styles.three)} style={{ marginRight: 0 }}>
                    <p className={styles.text}>hyrebook</p>
                    <p className={styles.subText}>find the perfect job</p>
                    <p className={styles.button} onClick={() => window.open("http://hyrebook.com/", "_blank")}>explore</p>
                </div>
            </div>
        </div >
    )
}

export default Brands;