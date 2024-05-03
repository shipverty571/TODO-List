import React, {memo, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import TodoItem from "../TodoItem";
import {removeTodoAction, toggleTodoDoneAction} from "../Stores/TodoReducer";

const TodoList = memo(() => {
    console.log("Todo list is updated");
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.items);
    
    const handleChangeStatus = useCallback((id) => {
        dispatch(toggleTodoDoneAction(id));
    }, [dispatch]);
    
    const handleRemoveTodo = useCallback((id) => {
        dispatch(removeTodoAction(id));
    }, [dispatch]);
    return (
        <div>
            {todos.map((item) => (
                <TodoItem 
                    key={item.id} 
                    handleChangeStatus={handleChangeStatus} 
                    item={item} 
                    handleRemoveTodo={handleRemoveTodo} />
            ))}
        </div>
    );
});

export default TodoList;