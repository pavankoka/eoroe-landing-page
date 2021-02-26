import React, { useEffect, useRef } from 'react';
import { InViewPort } from 'utils';
import Particles from 'react-particles-js';
import styles from './home.module.scss';

const height = window.innerHeight - 101;

function Home({ scrollRef, handleViewPort, scrollPosition }) {
    const homeRef = useRef(null);

    useEffect(() => {
        if (homeRef.current) {
            if (InViewPort(homeRef.current))
                handleViewPort({ block: 'home' });
        }
    }, [scrollPosition]);

    function handleScrollClick() {
        if (!scrollRef) return;

        scrollRef.scrollTop = height;
    }

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
            <img className={styles.scroll} onClick={handleScrollClick} src={require('assets/images/scroll.gif')} alt='3d' />
        </div>
    )
}

export default Home;