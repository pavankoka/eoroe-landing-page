import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import styles from './Details.module.scss';

function Details(props) {
    const options = [
        'one', 'two', 'three'
    ];
    const defaultOption = options[0];
    return (
        <div className={styles.wrapper}>
            <div className={styles.leftContent}>
                <div className={styles.container}>
                    <img src={require('assets/images/promotions/banner.png')} alt='post-img' />
                </div>
            </div>
            <div className={styles.rightContent}>
                <p className={styles.header}>Action</p>
                <Dropdown
                    className={styles.drowdown}
                    menuClassName={styles.menuClassName}
                    options={options}
                    value={defaultOption}
                    placeholder="Select an option"
                />
                <p className={styles.header}>Reason</p>
                <Dropdown
                    className={styles.drowdown}
                    menuClassName={styles.menuClassName}
                    options={options}
                    value={defaultOption}
                    placeholder="Select an option"
                />
                <p className={styles.submit}>submit</p>
            </div>
        </div>
    )
}

export default Details;