import React from 'react';
import PropTypes from "prop-types";
import styles from "./index.module.css"

/**
 * Кнопка с изображением.
 * @param pictureName Имя изображения.
 * @param onClick Функция, вызывающаяся при нажатии.
 */
const ControlButton = ({ pictureName, onClick }) => {
    return (
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <button type="button" className={styles.ControlButton} onClick={() => onClick()}>
            <img src={`${process.env.PUBLIC_URL}/assets/img/${pictureName}`} width={32} height={32} alt="" />
        </button>
    );
};
ControlButton.propTypes = {
    pictureName: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default ControlButton;