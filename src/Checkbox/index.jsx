import React, {useState} from 'react';
import PropTypes from "prop-types";
import styles from "./index.module.css";

/**
 * Кастомный флажок.
 * @param isChecked Установка состояния флажка.
 * @param onChange Функция получения текущего состояния флажка.
 */
const Checkbox = ({ isChecked, onChange }) => {
    const [checked, setChecked] = useState(isChecked);
    const handleChangeState = () => {
        onChange(!checked);
        setChecked(!checked);
    }
    return (
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <button type="button" className={styles.Checkbox} onClick={() => handleChangeState()}>
            {checked ?
                <img src={`${process.env.PUBLIC_URL}/assets/img/checked_96x96_color.png`} width={32} height={32} alt=""/> :
                <img src={`${process.env.PUBLIC_URL}/assets/img/unchecked_96x96_color.png`} width={32} height={32} alt=""/>}
        </button>
    );
};
Checkbox.propTypes = {
    isChecked: PropTypes.bool,
    onChange: PropTypes.func.isRequired
}
Checkbox.defaultProps = {
    isChecked: false
}

export default Checkbox;