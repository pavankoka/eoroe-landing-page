import React, { useEffect, useRef, useState } from 'react';
import { InViewPort } from 'utils';
import styles from './team.module.scss';

const team = [
    {
        name: 'Arindom',
        role: 'Co Founder',
    },
    {
        name: 'Reema',
        role: 'Co Founder',
    },
    {
        name: 'Sudarshan',
        role: 'Co Founder',
    },
    {
        name: 'Rushikesh',
        role: 'UI/UX designer',
    },
    {
        name: 'Gaurav',
        role: 'CGI Artist',
    }
]

function Logo({ details }) {
    const [isVisble, setVisible] = useState(false);

    function handleEnter() {
        setVisible(toggle => !toggle);
    }

    return (
        <div className={styles.logo} onMouseEnter={handleEnter} onMouseLeave={handleEnter}>
            {
                isVisble ? (
                    <div className={styles.overlay}>
                        <p className={styles.name}>{details.name}</p>
                        <p className={styles.role}>{details.role}</p>
                    </div>
                ) : null
            }
            <img className={styles.image} src={require(`assets/images/${details.name}.jpg`)} alt={details.name} />
        </div>
    )
}

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
                        {
                            team.map(member => <Logo details={member} />)
                        }
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