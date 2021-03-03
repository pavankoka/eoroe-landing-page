import React, { useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import { InViewPort } from 'utils';
import styles from './team.module.scss';

const team = [
    {
        name: 'Arindom',
        lname: 'Chatterjee',
        role: 'Co Founder',
    },
    {
        name: 'Reema',
        lname: 'Maheshwari',
        role: 'Co Founder',
    },
    {
        name: 'Sudarshan',
        lname: 'Kamath',
        role: 'Co Founder',
    },
    {
        name: 'Rushikesh',
        lname: 'Veer',
        role: 'UI/UX designer',
    },
    {
        name: 'Gaurav',
        lname: 'Chartpate',
        role: 'CGI Artist',
    }
]

function Logo({ details }) {
    const [isVisble, setVisible] = useState(false);

    function handleEnter() {
        setVisible(toggle => !toggle);
    }

    return (
        <div className={cx(styles.logo)} onMouseEnter={handleEnter} onMouseLeave={handleEnter}>
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

function Team({ isMobile, handleViewPort, scrollPosition }) {
    const homeRef = useRef(null);

    useEffect(() => {
        if (homeRef.current) {
            if (InViewPort(homeRef.current))
                handleViewPort({ block: 'team' });
        }
    }, [handleViewPort, scrollPosition]);

    return (
        <>
            <div id='team' className={cx(styles.wrapper, { [styles.mobile]: isMobile })} ref={homeRef}>
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
            {
                isMobile && (
                    <div className={styles.onlyMobile}>
                        <div className={styles.wrapper}>
                            {team.map((member, index) => (
                                <div className={cx(styles.member, { [styles.reverse]: index % 2 === 1 })}>
                                    <img className={styles.image} src={require(`assets/images/${member.name}.jpg`)} alt={member.name} />
                                    <p className={styles.border} style={{ marginLeft: index % 2 === 1 ? '30px' : '10px', marginRight: index % 2 === 1 ? '10px' : '30px' }} />
                                    <div className={styles.text} style={{ textAlign: index % 2 === 0 ? 'left' : 'right' }}>
                                        <p className={styles.fname}>{member.name}</p>
                                        <p className={styles.lname}>{member.lname}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Team;