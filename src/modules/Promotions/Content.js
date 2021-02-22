import React, { useState } from 'react';
import Modal from 'shared/Modal';

import DetailsModal from './DetailsModal';
import PackagesModal from './PackagesModal';

import { packages, types } from './data';
import styles from './Content.module.scss';

function Content(props) {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [isAge13Plus, setIsAge13Plus] = useState(false);
    const [modalType, setModalType] = useState('');

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleMobileChange(e) {
        setMobile(e.target.value)
    }

    function handleAgeChange(val) {
        setIsAge13Plus(val)
    }

    function handleButtonClick() {
        setModalType('details');
    }

    function handleDetailsSubmitClick() {
        if (name && mobile)
            setModalType('packages')
    }

    function handlePaymentClick(type) {
        switch (type) {
            case 'Silver Pass':
                if (isAge13Plus) {
                    window.open('https://rzp.io/l/8114CDLQ5');
                } else {
                    window.open('https://rzp.io/l/TKsI4kpM5X');
                }
                return;
            case 'Gold Pass':
                if (isAge13Plus) {
                    window.open('https://rzp.io/l/cttRQkGtq5');
                } else {
                    window.open('https://rzp.io/l/3wLrZfdW9N');
                }
                return;
            case 'Vip Pass':
                if (isAge13Plus) {
                    window.open('https://rzp.io/l/I5wz6zfx');
                } else {
                    window.open('https://rzp.io/l/tcLph4XbUG');
                }
                return;
            default:
                return;
        }
    }

    function handleModalClose() {
        setModalType('');
    }

    function renderModal() {
        switch (modalType) {
            case 'details':
                return (
                    <Modal
                        hideCloseButton
                        onRequestClose={handleModalClose}
                    >
                        <DetailsModal
                            name={name}
                            mobile={mobile}
                            isAge13Plus={isAge13Plus}
                            onNameChange={handleNameChange}
                            onMobileChange={handleMobileChange}
                            onAgeChange={handleAgeChange}
                            onSubmit={handleDetailsSubmitClick}
                        />
                    </Modal>
                )
            case 'packages':
                return (
                    <Modal
                        hideCloseButton
                        onRequestClose={handleModalClose}
                    >
                        <PackagesModal
                            types={types}
                            packages={packages}
                            onPayClick={handlePaymentClick}
                        />
                    </Modal>
                )
            default:
                return null
        }
    }

    return (
        <div className={styles.content}>
            <div className={styles.left}>
                <p className={styles.header}>Eoroe - The Community which does ...</p>
                <div className={styles.images}>
                    <img className={styles.leftImage} src={require('assets/images/promotions/phone-left.png')} alt='phone' />
                    <img className={styles.rightImage} src={require('assets/images/promotions/phone-right.png')} alt='phone' />
                </div>
                <div className={styles.icons}>
                    <img className={styles.playstore} src={require('assets/images/promotions/play-store.png')} alt='play-store' />
                    <img src={require('assets/images/promotions/app-store.png')} alt='app-store' />
                </div>
            </div>
            <div className={styles.right}>
                <img className={styles.banner} src={require('assets/images/promotions/banner.png')} alt='play-store' />
                <div className={styles.icons}>
                    <div className={styles.icon}>
                        <img src={require('assets/images/promotions/calendar.png')} alt='calendar' />
                        <p className={styles.text}>{`February 27 | 4PM\nFebruary 28 | 5PM`}</p>
                    </div>
                    <div className={styles.icon}>
                        <img src={require('assets/images/promotions/wallet.png')} alt='wallet' />
                        <p className={styles.text}>&#x20B9; 999 onwards</p>
                    </div>
                    <div className={styles.icon}>
                        <img src={require('assets/images/promotions/play.png')} alt='play' />
                        <p className={styles.text}>Zoom ( online )</p>
                    </div>
                    <div className={styles.icon}>
                        <img src={require('assets/images/promotions/grid.png')} alt='grid' />
                        <p className={styles.text}>Dance</p>
                    </div>
                </div>
                <p className={styles.button} onClick={handleButtonClick}>book now</p>
            </div>
            {renderModal()}
        </div>
    )
}

export default Content;