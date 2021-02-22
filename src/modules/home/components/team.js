import React from 'react';
import styles from './team.module.scss';

function Brands() {
    return (
        <div className={styles.wrapper}>
            <p className={styles.header}>our team</p>
            <div className={styles.content}>
                <div className={styles.profiles}>
                    <div className={styles.image} />
                    <div className={styles.image} />
                    <div className={styles.image} />
                    <div className={styles.image} />
                    <div className={styles.image} />
                </div>
                <div className={styles.description}>
                    <p className={styles.text}>We are not just a team, we are a family. Although we have a diverse range of professionals working for us, what brings us together is the fact that we are always curious and love solving challenging problems.</p>
                    <p className={styles.button}>join us</p>
                </div>
            </div>
        </div>
    )
}

export default Brands;