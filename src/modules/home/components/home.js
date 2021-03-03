import React, { useEffect, useRef } from 'react';
import cx from 'classnames';
import { InViewPort } from 'utils';
import Particles from 'react-particles-js';
import styles from './home.module.scss';

const height = window.innerHeight - 101;

function Home({ isMobile, scrollRef, handleViewPort, scrollPosition }) {
    const homeRef = useRef(null);

    useEffect(() => {
        if (homeRef.current) {
            if (InViewPort(homeRef.current))
                handleViewPort({ block: 'home' });
        }
    }, [scrollPosition, handleViewPort]);

    function handleScrollClick() {
        if (!scrollRef) return;
        scrollRef.scrollTop = height;
    }

    return (
        <div id='home' className={cx(styles.wrapper, { [styles.mobile]: isMobile })} ref={homeRef}>
            <div className={styles.particles}>
                <Particles
                    width={isMobile ? 250 : 800}
                    height={isMobile ? 200 : 400}
                />
            </div>
            <img className={styles.image} src={require('assets/images/3d-image.png')} alt='3d' />
            <p className={styles.header}>useful technologies</p>
            <img className={styles.scroll} onClick={handleScrollClick} src={require('assets/images/scroll.gif')} alt='3d' />
        </div>
    )
}

export default Home;