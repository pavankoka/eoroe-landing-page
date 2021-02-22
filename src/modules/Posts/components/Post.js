import React, { useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Details from './Details';
import styles from './Post.module.scss';

function Post({
    reportId,
    postId,
    category,
    reporterId,
    reporterName,
    userId,
    userName,
    reason,
    reportDate,
    reportTime,
    adminAction,
    adminReason,
}) {
    const [expand, setExpand] = useState(false);

    function handlePostClick() {
        setExpand(toggle => !toggle);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.row} onClick={handlePostClick}>
                <p className={cx(styles.item, styles.number)}>{reportId}</p>
                <p className={cx(styles.item, styles.number)}>{postId}</p>
                <p className={cx(styles.item, styles.string)}>{category}</p>
                <p className={cx(styles.item, styles.number)}>{reporterId}</p>
                <p className={cx(styles.item, styles.string)}>{reporterName}</p>
                <p className={cx(styles.item, styles.number)}>{userId}</p>
                <p className={cx(styles.item, styles.string)}>{userName}</p>
                <p className={cx(styles.item, styles.string)}>{reason}</p>
                <p className={cx(styles.item, styles.string)}>{reportDate}</p>
                <p className={cx(styles.item, styles.string)}>{reportTime}</p>
                <p className={cx(styles.item, styles.string)}>{adminAction}</p>
                <p className={cx(styles.item, styles.string)}>{adminReason}</p>
            </div>
            {expand ? <Details /> : null}
        </div>
    )
}

Post.propTypes = {
    reportId: PropTypes.number,
    postId: PropTypes.number,
    reporterId: PropTypes.number,
    userId: PropTypes.number,
    category: PropTypes.string,
    reporterName: PropTypes.string,
    userName: PropTypes.string,
    reason: PropTypes.string,
    reportDate: PropTypes.string,
    reportTime: PropTypes.string,
    adminAction: PropTypes.string,
    adminReason: PropTypes.string,
}

export default Post;