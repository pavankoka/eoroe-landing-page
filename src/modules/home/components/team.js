import React, { useEffect, useRef } from 'react';
import { InViewPort } from 'utils';
import styles from './team.module.scss';

function Brands({ handleViewPort, scrollPosition }) {
    const homeRef = useRef(null);

    useEffect(() => {
        if (homeRef.current) {
            if (InViewPort(homeRef.current))
                handleViewPort({ block: 'team' });
        }
    }, [scrollPosition]);

    return (
        <div className={styles.wrapper} ref={homeRef}>
            <p className={styles.header}>our team</p>
            <div className={styles.content}>
                <div className={styles.profiles}>
                    <div className={styles.grid}>
                        <img className={styles.image} src={require('assets/images/Arindom.jpg')} alt='arindome' />
                        <img className={styles.image} src={require('assets/images/Reema.jpg')} alt='arindome' />
                        <img className={styles.image} src={require('assets/images/sudarshan.jpg')} alt='arindome' />
                        <img className={styles.image} src={require('assets/images/rishikesh.jpg')} alt='arindome' />
                        <img className={styles.image} src={require('assets/images/gaurav.jpg')} alt='arindome' />
                    </div>
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