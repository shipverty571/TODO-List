import React, {memo, useState} from 'react';
import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import styles from "./index.module.css"
import ControlButton from "../ControlButton";
import Checkbox from "../Checkbox";

/**
 * Компонент элемента списка задач.
 * @param itemId ID задачи.
 * @param handleChangeStatus Функция обновления статуса задачи.
 * @param handleRemoveTodo Функция удаления задачи.
 */
const TodoItem = memo(({ itemId, handleChangeStatus, handleRemoveTodo }) => {
    console.log(`Todo item ${itemId} is updated`);
    const handleChangeStatusItem = () => {
        handleChangeStatus(itemId);
    }
    const todos = useSelector((state) => state.items[itemId])
    /* const [currentItem, ] = useState(todos.find((item) => item.id === itemId)); */
    return (
        <div className={styles.TodoItem} key={itemId}>
            <Checkbox onChange={handleChangeStatusItem} isChecked={todos.isDone} />
            <p style={{
                flexGrow: 1,
                margin: 0,
                textDecoration: todos.isDone ? "line-through" : "none"
            }}>{todos.title}</p>
            <ControlButton onClick={() => handleRemoveTodo(itemId)} pictureName="remove_96x96_color.png"/>
        </div>
    );
});
TodoItem.propTypes = {
    itemId: PropTypes.number.isRequired,
    handleChangeStatus: PropTypes.func.isRequired,
    handleRemoveTodo: PropTypes.func.isRequired
}

export default TodoItem;