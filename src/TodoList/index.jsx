import React, {useCallback} from 'react';
import {observer} from "mobx-react-lite";
import TodoItem from "../TodoItem";
import {useStores} from "../Stores/RootStoreContext";

const TodoList = observer(() => {
    console.log("Todo list is updated");
    const { todos } = useStores();
    
    const handleChangeStatus = useCallback((id) => {
        todos.toggleTodoDone(id);
    }, [todos]);
    
    const handleRemoveTodo = useCallback((id) => {
        todos.removeTodo(id);
    }, [todos]);
    return (
        <div>
            {todos.items.map((item) => (
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