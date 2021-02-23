import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useLocation } from "react-router-dom";

import { Link, Element, animateScroll as scroll } from 'react-scroll';

import Home from './components/home';
import Vision from './components/vision';
import Brands from './components/brands';
import Team from './components/team';
import Contact from './components/contact';

import styles from './index.module.scss';

const height = window.innerHeight - 144;

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Index() {
    const homeRef = useRef(null);
    const history = useHistory();
    const query = useQuery();
    const block = query.get('block')

    useEffect(() => {
        switch (block) {
            case ('home'):
                homeRef.current.scrollTop = 0;
                break;
            case ('vison'):
                homeRef.current.scrollTop = (height);
                break;
            case ('brands'):
                homeRef.current.scrollTop = (2 * height);
                break;
            case ('team'):
                homeRef.current.scrollTop = (3 * height);
                break;
            case ('contact'):
                homeRef.current.scrollTop = (4 * height);
                break;
            default:
                homeRef.current.scrollTop = (0)
        }
    }, [block])

    return (
        <h1 className={styles.wrapper} ref={homeRef}>
            <Home />
            <Vision />
            <Brands />
            <Element />
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

export default connect(mapStateToProps, undefined)(Index);