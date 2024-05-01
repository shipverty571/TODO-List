import React from 'react';
import PropTypes from "prop-types";
import styles from "./index.module.css"

/**
 * Строка для добавления заметки.
 * @param onChange Функция для изменения данных ввода.
 */
const AddInput = ({ onChange }) => {
    return (
        <input onChange={(e) => onChange(e.target.value)} className={styles.AddInput}/>
    );
};
AddInput.propTypes = {
    onChange: PropTypes.func.isRequired
}

export default AddInput;