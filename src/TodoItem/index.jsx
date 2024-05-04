import React from 'react';
import PropTypes from "prop-types";
import {observer} from "mobx-react-lite";
import styles from "./index.module.css"
import ControlButton from "../ControlButton";
import Checkbox from "../Checkbox";

/**
 * Компонент элемента списка задач.
 * @param item Объект задачи.
 * @param handleChangeStatus Функция обновления статуса задачи.
 * @param handleRemoveTodo Функция удаления задачи.
 */
const TodoItem = observer(({ item, handleChangeStatus, handleRemoveTodo }) => {
    console.log(`Todo item ${item.id} is updated`);
    const handleChangeStatusItem = () => {
        handleChangeStatus(item.id);
    }
    return (
        <div className={styles.TodoItem}>
            <Checkbox onChange={handleChangeStatusItem} isChecked={item.isDone} />
            <p style={{
                flexGrow: 1,
                margin: 0,
                paddingTop: 5,
                textDecoration: item.isDone ? "line-through" : "none",
            }}>{item.title}</p>
            <ControlButton onClick={() => handleRemoveTodo(item.id)} pictureName="remove_96x96_color.png"/>
        </div>
    );
});
TodoItem.propTypes = {
    item: PropTypes.instanceOf(Object).isRequired,
    handleChangeStatus: PropTypes.func.isRequired,
    handleRemoveTodo: PropTypes.func.isRequired
}

export default TodoItem;