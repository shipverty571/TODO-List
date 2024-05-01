import React from 'react';
import PropTypes from "prop-types";
import styles from "./index.module.css"
import ControlButton from "../ControlButton";
import Checkbox from "../Checkbox";

/**
 * Компонент элемента списка задач.
 * @param item Объект задачи.
 * @param handleChangeStatus Функция обновления статуса задачи.
 * @param handleRemoveTodo Функция удаления задачи.
 */
const TodoItem = ({ item, handleChangeStatus, handleRemoveTodo }) => {
    const handleChangeStatusItem = (isDone) => {
        handleChangeStatus(item.id, isDone);
    }
    return (
        <div className={styles.TodoItem}>
            <Checkbox onChange={handleChangeStatusItem} isChecked={item.isDone} />
            <p style={{
                flexGrow: 1,
                margin: 0,
                textDecoration: item.isDone ? "line-through" : "none"
            }}>{item.text}</p>
            <ControlButton onClick={() => handleRemoveTodo(item.id)} pictureName="remove_96x96_color.png"/>
        </div>
    );
};
TodoItem.propTypes = {
    item: PropTypes.instanceOf(Object).isRequired,
    handleChangeStatus: PropTypes.func.isRequired,
    handleRemoveTodo: PropTypes.func.isRequired
}

export default TodoItem;