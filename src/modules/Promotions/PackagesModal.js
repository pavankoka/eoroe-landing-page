import React, { useState } from 'react';
import classnames from 'classnames';
import styles from './PackagesModal.module.scss';

function PackagesModal({ types, packages, onPayClick }) {
    const [selectedType, setSelectedType] = useState(types[0]);

    function handleTypeClick(value) {
        setSelectedType(value)
    }

    function hanldeClick() {
        onPayClick(selectedType)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.types}>
                {
                    types.map(type => <p className={classnames(styles.type, { [styles.selected]: selectedType === type })} onClick={() => handleTypeClick(type)}>{type}</p>)
                }
            </div>
            <div className={styles.details}>
                <h2>Ticket Details:</h2>
                {
                    packages[selectedType].bullets.map((text, index) => (
                        <p>{index + 1}. {text}</p>
                    ))
                }
            </div>
            <p className={styles.button} onClick={hanldeClick}>{packages[selectedType].submit}</p>
        </div>
    )
}

export default PackagesModal;