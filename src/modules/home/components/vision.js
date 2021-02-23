import React from 'react';
import styles from './vision.module.scss';

function Vision(props) {
    return (
        <div className={styles.wrapper}>
            <p className={styles.header}>our vision</p>
            <div className={styles.content}>
                <p className={styles.text}>We believe that useful technologies can go a very long way in helping manking acheive a more enriching life. For the challenges we aim to solve , we focus on technology being the driver for all such solutions.</p>
                <div className={styles.image}>
                    <img src={require('assets/images/trophy.gif')} />
                </div>
            </div>
        </div>
    )
}

export default Vision;