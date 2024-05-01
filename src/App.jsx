import './App.css';
import React, {useState} from "react";
import AddInput from "./AddInput";
import ControlButton from "./ControlButton";
import TodoItem from "./TodoItem";
import styles from "./App.module.css"

const App = () => {
    const [newTodoName, setNewTodoName] = useState();
    
    const handleAddTodo = () => {
        
    }
    const handleChangeStatus = (id, isDone) => {
        console.log(id, isDone);
    }
    const handleRemoveTodo = () => {

    }
    const items = [
        {
            id: 1,
            text: "Пожать сотку в жиме лежа",
            isDone: true
        },
        {
            id: 2,
            text: "Полить цветы",
            isDone: false
        },
        {
            id: 3,
            text: "Выиграть на НС ТУСУР 2024 Выиграть на НС ТУСУР 2024 Выиграть на НС ТУСУР 2024  dasd asda das Выиграть на НС ТУСУР 2024 Выиграть на НС ТУСУР 2024 Выиграть на НС ТУСУР 2024",
            isDone: false
        }
    ]
    return (
        <div className={styles.App}>
            <h1>TODO List</h1>
            <div style={{ display: "flex", alignItems: "center", marginBottom: 50 }}>
                <AddInput onChange={setNewTodoName} />
                <ControlButton onClick={handleAddTodo} pictureName="add_96x96_color.png" />
            </div>
            <div>
                {items.map((item) => (
                    <TodoItem key={item.id} handleChangeStatus={handleChangeStatus} item={item} handleRemoveTodo={handleRemoveTodo} />
                ))}
            </div>
        </div>
    );
}

export default App;
