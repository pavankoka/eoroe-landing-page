import React from 'react';
import PropTypes from 'prop-types';

import Post from './Post';

import styles from './Posts.module.scss';

function Posts({ posts }) {
    return (
        <div className={styles.wrapper}>
            {
                posts.map(post => (
                    <Post
                        reportId={post.reportId}
                        postId={post.postId}
                        category={post.category}
                        reporterId={post.reporterId}
                        reporterName={post.reporterName}
                        userId={post.userId}
                        userName={post.userName}
                        reason={post.reason}
                        reportDate={post.reportDate}
                        reportTime={post.reportTime}
                        adminAction={post.adminAction}
                        adminReason={post.adminReason}
                    />
                ))
            }
        </div>
    )
}

Posts.propTypes = {
    posts: PropTypes.object.isRequired,
}

export default Posts;