import React from 'react';
import cx from 'classnames';
import styles from './dots.module.scss';

function Dots({ block }) {
    return (
        <div className={styles.wrapper}>
            <p className={cx(styles.dotWrapper, { [styles.active]: block === 'home' })}>
                <p className={styles.dot}></p>
            </p>
            <p className={cx(styles.dotWrapper, { [styles.active]: block === 'vison' })}>
                <p className={styles.dot}></p>
            </p>
            <p className={cx(styles.dotWrapper, { [styles.active]: block === 'brands' })}>
                <p className={styles.dot}></p>
            </p>
            <p className={cx(styles.dotWrapper, { [styles.active]: block === 'team' })}>
                <p className={styles.dot}></p>
            </p>
            <p className={cx(styles.dotWrapper, { [styles.active]: block === 'contact' })}>
                <p className={styles.dot}></p>
            </p>
        </div>
    )
}

export default Dots;