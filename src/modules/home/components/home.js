import React from 'react';
import Particles from 'react-particles-js';
import styles from './home.module.scss';

function Home() {
    return (
        <div className={styles.wrapper}>
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