import React from 'react';
import PropTypes from "prop-types";
import styles from "./index.module.css"

/**
 * Строка для добавления заметки.
 * @param onChange Функция для изменения данных ввода.
 * @param value Значение.
 */
const AddInput = ({ onChange, value }) => {
    return (
        <input onChange={(e) => onChange(e.target.value)} className={styles.AddInput} value={value}/>
    );
};
AddInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}

export default AddInput;