import React, { useRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Home from './components/home';
import Vision from './components/vision';
import Brands from './components/brands';
import Team from './components/team';
import Contact from './components/contact';
import Dots from './components/dots';

import homeActions from 'redux/actions/home';

import styles from './index.module.scss';

const {
    setBlock,
    setScrollRef,
} = homeActions;

function Index({ isMobile, block, scrollRef, dispatch }) {
    const homeRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        dispatch(setScrollRef({ ref: homeRef.current }));
    }, [dispatch]);

    function handleScroll() {
        setScrollPosition(homeRef.current.scrollTop);
    }

    function handleViewPort({ block }) {
        dispatch(setBlock({ block }));
    }

    return (
        <h1 className={styles.wrapper} ref={homeRef} onScroll={(handleScroll)} >
            <Home
                isMobile={isMobile}
                scrollRef={scrollRef}
                scrollPosition={scrollPosition}
                handleViewPort={handleViewPort}
            />
            <Vision
                isMobile={isMobile}
                scrollPosition={scrollPosition}
                handleViewPort={handleViewPort}
            />
            <Brands
                isMobile={isMobile}
                handleViewPort={handleViewPort}
                scrollPosition={scrollPosition}
            />
            <Team
                isMobile={isMobile}
                handleViewPort={handleViewPort}
                scrollPosition={scrollPosition}
            />
            <Contact
                isMobile={isMobile}
                handleViewPort={handleViewPort}
                scrollPosition={scrollPosition}
            />
            {/* <Dots block={block} /> */}
        </h1 >
    )
}

const mapStateToProps = ({
    home: {
        block,
        scrollRef,
        isMobile,
    },
}) => {
    return {
        block,
        scrollRef,
        isMobile,
    };
}

export default connect(mapStateToProps, undefined)(Index);