import React, { useEffect, useRef } from 'react';
import { InViewPort } from 'utils';
import Particles from 'react-particles-js';
import styles from './home.module.scss';

function Home({ handleViewPort, scrollPosition }) {
    const homeRef = useRef(null);

    useEffect(() => {
        if (homeRef.current) {
            if (InViewPort(homeRef.current))
                handleViewPort({ block: 'home' });
        }
    }, [scrollPosition]);

    return (
        <div className={styles.wrapper} ref={homeRef}>
            <div className={styles.particles}>
                <Particles
                    width={800}
                    height={400}
                />
            </div>
            <img className={styles.image} src={require('assets/images/3d-image.png')} alt='3d' />
            <p className={styles.header}>useful technologies</p>
            <img className={styles.scroll} src={require('assets/images/scroll.gif')} alt='3d' />
        </div>
    )
}

export default Home;