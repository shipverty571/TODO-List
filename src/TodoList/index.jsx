import React, {memo, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import TodoItem from "../TodoItem";
import {removeTodoAction, toggleTodoDoneAction} from "../Stores/TodoReducer";

const TodoList = memo(() => {
    console.log("Todo list is updated");
    const dispatch = useDispatch();
    const todosIds = useSelector((state) => state.itemsIds);
    
    const handleChangeStatus = useCallback((id) => {
        dispatch(toggleTodoDoneAction(id));
    }, [dispatch]);
    
    const handleRemoveTodo = useCallback((id) => {
        dispatch(removeTodoAction(id));
    }, [dispatch]);
    return (
        <div>
            {todosIds.map((id) => (
                <TodoItem 
                    key={id} 
                    handleChangeStatus={handleChangeStatus} 
                    itemId={id} 
                    handleRemoveTodo={handleRemoveTodo} />
            ))}
        </div>
    );
});

export default TodoList;