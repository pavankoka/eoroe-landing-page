import React from 'react';

import Header from './Header';
import Content from './Content';

import styles from './index.module.scss';

function Index() {
    return (
        <div className={styles.wrapper}>
            <Header />
            <Content />
        </div>
    )
}

export default Index;