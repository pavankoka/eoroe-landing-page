import React from 'react';
import { connect } from 'react-redux';

import Home from './components/home';
import Vision from './components/vision';
import Brands from './components/brands';
import Team from './components/team';
import Contact from './components/contact';

import styles from './index.module.scss';

function index() {
    return (
        <h1 className={styles.wrapper}>
            <Home />
            <Vision />
            <Brands />
            <Team />
            <Contact />
        </h1>
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

export default connect(mapStateToProps, undefined)(index);