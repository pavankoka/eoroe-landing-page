import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useLocation } from "react-router-dom";

import Scroll from "react-scroll";

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

    useEffect(() => {
        // dispatch(setBlock({ block: 'vison' }));
        console.log(Scroll);
        Scroll.animateScroll.scrollTo(1000);
        debugger
    }, [])

    function handleScroll() {
        console.log(homeRef.current.scrollTop / height)
    }

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
        <h1 className={styles.wrapper} ref={homeRef} onScroll={handleScroll}>
            {/* <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >asvds</Link> */}
            <Home />
            <Vision />
            <Brands />
            <Team />
            {/* <div id="section1">awfveds</div> */}
            <Contact />
            <Dots block={block} />
        </h1>
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