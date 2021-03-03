import React, { useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import { InViewPort } from 'utils';
import EmailJS from 'emailjs-com';
import styles from './contact.module.scss';

function Contact({ isMobile, handleViewPort, scrollPosition }) {
    const homeRef = useRef(null);
    const initialState = {
        name: '',
        email: '',
        phone: '',
    }
    const [state, setState] = useState(initialState)

    useEffect(() => {
        if (homeRef.current) {
            if (InViewPort(homeRef.current))
                handleViewPort({ block: 'contact' });
        }
    }, [handleViewPort, scrollPosition]);

    function handleChange(props) {
        setState(state => ({ ...state, ...props }));
    }

    function handleClick() {
        EmailJS
            .send('service_13j65ta', 'template_62jps8k', state, 'user_EBKRg89HtKknEUv9K0kin')
            .then(function() {
                alert('Your details sent successfully');
            }, function(error) {
                alert('Something went wrong!');
            });
        setState(initialState);
    }

    return (
        <div id='contact' className={cx(styles.wrapper, { [styles.mobile]: isMobile })} ref={homeRef}>
            <p className={styles.header}>contact us</p>
            <div className={styles.content}>
                <p className={styles.text}>Drop us your details and someone from our team will get in touch with you.</p>
                <div className={styles.details}>
                    <div className={styles.box}>
                        <input
                            className={styles.input}
                            placeholder='Name'
                            value={state.name}
                            onChange={e => handleChange({ name: e.target.value })}
                        />
                        <input
                            className={styles.input}
                            placeholder='Email'
                            value={state.email}
                            onChange={e => handleChange({ email: e.target.value })}
                        />
                        <input
                            className={styles.input}
                            placeholder='No'
                            value={state.phone}
                            style={{ marginBottom: 0 }}
                            onChange={e => handleChange({ phone: e.target.value })}
                        />
                        <p className={styles.button} onClick={handleClick}>send</p>
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
                    <p className={styles.link} onClick={() => window.open("http://eoroe.com/", "_blank")}>Eoroe</p>
                    <p className={styles.link} onClick={() => window.open("http://znanye.com/", "_blank")}>Znanye</p>
                    <p className={styles.link} onClick={() => window.open("http://hyrebook.com/", "_blank")}>Hyrebook</p>
                </div>
                <div className={styles.column3}>
                    <p className={styles.iconsHeader}>Follow us on</p>
                    <div className={styles.icons}>
                        <img src={require('assets/logos/facebook.svg')} alt='facebook' className={styles.icon} />
                        <img src={require('assets/logos/linkedin.svg')} alt='linkedin' className={styles.icon} />
                        <img src={require('assets/logos/instagram.svg')} alt='instagram' className={styles.icon} style={{ marginRight: 0 }} />
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <p style={{ marginLeft: '60px' }}>CIN: U72900PN2020PTC193934</p>
                <p>&#169; Pastelcube Technologies Private Limited</p>
                <div style={{ marginRight: '60px', display: 'flex', alignItems: 'center' }}>
                    Made in India with
                    <img src={require('assets/images/love.svg')} alt='love' style={{ marginLeft: '5px' }} />
                </div>
            </div>
        </div>
    )
}

export default Contact;