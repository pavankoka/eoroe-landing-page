import React from 'react';
import styles from './Header.module.scss';

const columns = [
    {
        key: 'reportId',
        value: 'Report ID'
    },
    {
        key: 'postId',
        value: 'Post ID'
    },
    {
        key: 'category',
        value: 'Category'
    },
    {
        key: 'reporterId',
        value: 'Reporter Id'
    },
    {
        key: 'reporterName',
        value: 'Reporter Name'
    },
    {
        key: 'userId',
        value: 'User ID'
    },
    {
        key: 'userName',
        value: 'User Name'
    },
    {
        key: 'reason',
        value: 'Reason'
    },
    {
        key: 'reportDate',
        value: 'Report Date'
    },
    {
        key: 'reportTime',
        value: 'Report Time'
    },
    {
        key: 'adminAction',
        value: 'Admin Action'
    },
    {
        key: 'adminReason',
        value: 'Admin Reason'
    },
]

function Index(props) {
    return (
        <div className={styles.wrapper}>
            {
                columns.map(column => (
                    <h3 className={styles.column} key={column.key}>{column.value}</h3>
                ))
            }
        </div>
    )
}

Index.propTypes = {

}

export default Index;