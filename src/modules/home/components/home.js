import React from 'react';
import styles from './home.module.scss';

function Home(props) {
    return (
        <div className={styles.wrapper}>
            <img className={styles.image} src={require('assets/images/3d-image.png')} alt='3d' />
            <p className={styles.header}>useful technologies</p>
        </div>
    )
}

export default Home;