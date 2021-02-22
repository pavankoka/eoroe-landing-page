import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import isEmpty from 'lodash/isEmpty';
import Loader from 'react-loader-spinner';

import Posts from './components/Posts';
import Header from './components/Header';

import posts from './posts.json';
import { getPostsApi } from 'apis';

import styles from './index.module.scss';

const Home = ({ isFetchingPosts, dispatch }) => {
    useEffect(() => {
        getPostsApi({ dispatch });
    }, []);

    if (isFetchingPosts || isEmpty(posts)) {
        return (
            <div className={styles.wrapper} style={{ background: 'lightgrey' }}>
                <Header />
                <div className={styles.loader}>
                    <Loader
                        type="Oval"
                        color="#000000"
                        height={50}
                        width={50}
                    />
                </div>
            </div>
        )
    }

    return (
        <div className={styles.wrapper}>
            <Header />
            <Posts posts={posts} />
        </div>
    )
}

const mapStateToProps = ({
    posts: {
        isFetchingPosts,
        posts,
    }
}) => {
    return {
        isFetchingPosts,
        posts,
    };
}

export default connect(mapStateToProps, undefined)(Home);