import React from 'react';
import styles from './contact.module.scss';

function Brands() {
    return (
        <div className={styles.wrapper}>
            <p className={styles.header}>contact us</p>
            <div className={styles.content}>
                <p className={styles.text}>Drop us your details and someone from our team will get in touch with you.</p>
                <div className={styles.details}>
                    <div className={styles.box}>
                        <input
                            className={styles.input}
                            placeholder='Name'
                        />
                        <input
                            className={styles.input}
                            placeholder='Email'
                        />
                        <input
                            className={styles.input}
                            placeholder='No'
                            style={{ marginBottom: 0 }}
                        />
                        <p className={styles.button}>submit</p>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.column1}>
                    <div className={styles.pill}>
                        <p className={styles.text}>Address</p>
                        <p className={styles.subText}>Emerald Park, Park Street, Pune - 411 057</p>
                    </div>
                    <div className={styles.pill}>
                        <p className={styles.text}>Contact</p>
                        <p className={styles.subText}>1800 266 4020</p>
                    </div>
                    <div className={styles.pill} style={{ marginBottom: 0 }}>
                        <p className={styles.text}>Email</p>
                        <p className={styles.subText}>talk2us@pastelcube.com</p>
                    </div>
                </div>
                <div className={styles.column2}>
                    <p className={styles.linkHeader}>Links</p>
                    <p className={styles.link}>Eoroe</p>
                    <p className={styles.link}>Znanye</p>
                    <p className={styles.link}>Hyrebook</p>
                </div>
                <div className={styles.column3}>
                    <p className={styles.iconsHeader}>Follow us on</p>
                    <div className={styles.icons}>
                        <img src={require('assets/logos/facebook.png')} alt='facebook' className={styles.icon} />
                        <img src={require('assets/logos/linkedin.png')} alt='linkedin' className={styles.icon} />
                        <img src={require('assets/logos/instagram.png')} alt='instagram' className={styles.icon} style={{ marginRight: 0 }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brands;