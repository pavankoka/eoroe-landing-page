import React, { Component } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import CrossIcon from 'shared/icons/Cross';
import cx from 'classnames';
import _ from 'lodash';
import styles from './Modal.module.scss';

const REACT_MODAL_OPEN_CLASS = 'ReactModal__Body--open';

class Modal extends Component {
    static propTypes = {
        /* Inline styling, use when absolutely necessary */
        style: PropTypes.object,
        /* Modal content */
        children: PropTypes.any,
        /* Modal content classNames */
        className: PropTypes.string,
        /* On close */
        onRequestClose: PropTypes.func,
        /* Whether to show close button or not */
        hideCloseButton: PropTypes.bool,
        /* Classname of overlay/backdrop */
        overlayClassName: PropTypes.string,
        /* If true modal will close on backdrop/overlay's click, true by default */
        shouldCloseOnOverlayClick: PropTypes.bool,
        /* Cross button classname */
        crossButtonClassName: PropTypes.string,
        /* Called after modal is open */
        handleAfterOpen: PropTypes.func,
    };

    // UNSAFE_componentWillMount() {
    //     this.toggleOpenClass();
    // }

    // componentWillUnmount() {
    //     this.toggleOpenClass();
    // }

    handleCloseClick = () => {
        this.props.onRequestClose();
    };

    handleAfterOpen = (...args) => {
        this.props.handleAfterOpen && this.props.handleAfterOpen(...args);
    };

    toggleOpenClass = () => {
        /*
            React modal adds this class to body tag but not to html tag,
            we need it in html tag as well. (Screen scrolls when modal is open in iPad)
        */
        const htmlEl = document.getElementsByTagName('html')[0];
        if (!htmlEl || !htmlEl.classList)
            return;

        if (_.includes(htmlEl.classList.value, REACT_MODAL_OPEN_CLASS)) {
            htmlEl.classList.remove(REACT_MODAL_OPEN_CLASS);
        }
        else {
            htmlEl.classList.add(REACT_MODAL_OPEN_CLASS);
        }

    };

    render() {
        const {
            children,
            className = '',
            overlayClassName = '',
            crossButtonClassName = '',
            ...props
        } = this.props;

        const _className = cx(className, styles.modal);

        const _overlayClassName = cx(overlayClassName, styles.overlay);

        return (
            <ReactModal
                isOpen
                ariaHideApp={false}
                contentLabel="Modal"
                className={_className}
                overlayClassName={_overlayClassName}
                {...props}
                onAfterOpen={this.handleAfterOpen}
                onRequestClose={this.handleCloseClick}
            >
                {
                    this.props.hideCloseButton ? null :
                        (
                            <div className={cx(styles.closeButton, 'flex_centered', crossButtonClassName)} onClick={this.handleCloseClick}>
                                <CrossIcon width={10} height={10} />
                            </div>
                        )
                }
                {children}
            </ReactModal>
        );
    }
}

export default Modal;
