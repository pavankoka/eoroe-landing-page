import React from 'react';
import { connect } from 'react-redux';

import Test from './test';

import styles from './index.module.scss';

const Home = ({ user, dispatch }) => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.heading}>admin panel</h2>
            <form className={styles.form}>
                <label className={styles.label}>Email ID</label>
                <input
                    className={styles.input}
                    placeholder='Enter your registered email address'
                />
                <label className={styles.label}>Password</label>
                <input
                    type='password'
                    className={styles.input}
                    placeholder='Enter your password'
                />
                <div
                    type='submit'
                    className={styles.button}
                    children='login'
                />
            </form>
            <Test />
        </div>
    )
}

const mapStateToProps = ({
    auth: {
        user,
    },
}) => {
    return {
        user,
    };
}

export default connect(mapStateToProps, undefined)(Home);