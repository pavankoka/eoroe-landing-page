import React, { useRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, useLocation } from "react-router-dom";

import Scroll from "react-scroll";
import debounce from 'lodash/debounce';

import Home from './components/home';
import Vision from './components/vision';
import Brands from './components/brands';
import Team from './components/team';
import Contact from './components/contact';
import Dots from './components/dots';

import homeActions from 'redux/actions/home';

import styles from './index.module.scss';

const height = window.innerHeight - 101;
const {
    setBlock
} = homeActions;

function Index({ block, dispatch }) {
    const homeRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [canUpdate, setCanUpdate] = useState(true);

    // useEffect(() => {
    //     // dispatch(setBlock({ block: 'vison' }));
    //     if (homeRef) {
    //         window.scroll({
    //             top: 1000,
    //             left: 0,
    //             behaviour: 'smooth',
    //         })
    //     }
    // }, [homeRef]);

    function handleScroll() {
        return
        // setScrollPosition(homeRef.current.scrollTop);
        if (homeRef.current && scrollPosition < homeRef.current.scrollTop) {
            switch (parseInt(homeRef.current.scrollTop / height)) {
                case (0):
                    dispatch(setBlock({ block: 'vison' }));
                    break;
                case (1):
                    dispatch(setBlock({ block: 'brands' }));
                    break;
                case (2):
                    dispatch(setBlock({ block: 'team' }));
                    break;
                case (3):
                    dispatch(setBlock({ block: 'contact' }));
                    break;
                default:
                    setScrollPosition(0);
                    homeRef.current.scrollTop = (0)
            }
        }
    }

    useEffect(() => {
        switch (block) {
            case ('home'):
                setScrollPosition(0);
                homeRef.current.scrollTop = 0;
                break;
            case ('vison'):
                setScrollPosition(height);
                homeRef.current.scrollTop = (height);
                break;
            case ('brands'):
                setScrollPosition(2 * height);
                homeRef.current.scrollTop = (2 * height);
                break;
            case ('team'):
                setScrollPosition(3 * height);
                homeRef.current.scrollTop = (3 * height);
                break;
            case ('contact'):
                setScrollPosition(4 * height);
                homeRef.current.scrollTop = (4 * height);
                break;
            default:
                setScrollPosition(0);
                homeRef.current.scrollTop = (0)
        }
    }, [block]);

    function myDebounce(handleScroll) {
        if (!canUpdate) {
            return
        } else {
            console.log('in');
            setCanUpdate(false);
            setTimeout(() => setCanUpdate(true), 1000);
            handleScroll();
        }
    }

    function handleViewPort({ block }) {
        // dispatch(setBlock({ block }));
    }

    return (
        <h1 className={styles.wrapper} ref={homeRef} onScroll={(handleScroll)} >
            <Home handleViewPort={handleViewPort} scrollPosition={scrollPosition} />
            <Vision handleViewPort={handleViewPort} scrollPosition={scrollPosition} />
            <Brands handleViewPort={handleViewPort} scrollPosition={scrollPosition} />
            <Team handleViewPort={handleViewPort} scrollPosition={scrollPosition} />
            <Contact handleViewPort={handleViewPort} scrollPosition={scrollPosition} />
            <Dots block={block} />
        </h1 >
    )
}

const mapStateToProps = ({
    home: {
        block,
    },
}) => {
    return {
        block,
    };
}

export default connect(mapStateToProps, undefined)(Index);