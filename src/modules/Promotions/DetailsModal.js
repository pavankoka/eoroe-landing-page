import React from 'react';
import styles from './DetailsModal.module.scss';

function DetailsModal({
    name,
    mobile,
    isAge13Plus,
    onNameChange,
    onMobileChange,
    onAgeChange,
    onSubmit
}) {
    return (
        <form className={styles.form}>
            <label className={styles.label}>Name</label>
            <input
                value={name}
                className={styles.input}
                placeholder='Enter your Name'
                onChange={onNameChange}
            />
            <label className={styles.label}>Phone No</label>
            <input
                value={mobile}
                className={styles.input}
                placeholder='Enter your Phone Number'
                onChange={onMobileChange}
            />
            <label className={styles.label}>Age Group</label>
            <div className={styles.radioButtons}>
                <div className={styles.button}>
                    <input
                        type='radio'
                        className={styles.radio}
                        checked={!isAge13Plus}
                    />
                    <span
                        className={styles.checkmark}
                        onClick={() => onAgeChange(false)}
                    ></span>
                    <label className={styles.label}>8 - 13 years</label>
                </div>
                <div className={styles.button}>
                    <input
                        type='radio'
                        className={styles.radio}
                        checked={isAge13Plus}
                    />
                    <span
                        className={styles.checkmark}
                        onClick={() => onAgeChange(true)}
                    ></span>
                    <label className={styles.label}>13 years +</label>
                </div>
            </div>
            <p className={styles.submit} onClick={onSubmit}>next</p>
        </form>
    )
}

export default DetailsModal;