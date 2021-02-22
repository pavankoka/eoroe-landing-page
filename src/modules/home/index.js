import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import authActions from 'redux/actions/auth';

import styles from './index.module.scss';

const Home = ({ user, dispatch }) => {
    console.log({ user, dispatch });

    const {
        setUserDetail
    } = authActions;

    useEffect(() => {
        dispatch(setUserDetail({ name: 'It\'s me koka' }));
    }, [])
    return (
        <h1>koka</h1>
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