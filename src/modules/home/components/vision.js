import React, { useEffect, useRef } from 'react';
import cx from 'classnames';
import { InViewPort } from 'utils';
import styles from './vision.module.scss';

function Vision({ isMobile, handleViewPort, scrollPosition }) {
    const homeRef = useRef(null);

    useEffect(() => {
        if (homeRef.current) {
            if (InViewPort(homeRef.current))
                handleViewPort({ block: 'vison' });
        }
    }, [scrollPosition]);

    return (
        <div className={cx(styles.wrapper, { [styles.mobile]: isMobile })} ref={homeRef}>
            <p className={styles.header}>our vision</p>
            <div className={styles.content}>
                <p className={styles.text}>We believe that useful technologies can go a very long way in helping manking acheive a more enriching life. For the challenges we aim to solve , we focus on technology being the driver for all such solutions.</p>
                <div className={styles.image}>
                    <img src={require('assets/images/trophy.gif')} alt='trophy' />
                </div>
            </div>
        </div>
    )
}

export default Vision;