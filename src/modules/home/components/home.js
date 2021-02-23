import React from 'react';
import Particles from 'react-particles-js';
import styles from './home.module.scss';

function Home() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.particles}><Particles /></div>
            <img className={styles.image} src={require('assets/images/3d-image.png')} alt='3d' />
            <p className={styles.header}>useful technologies</p>
        </div>
    )
}

export default Home;