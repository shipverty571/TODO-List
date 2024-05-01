import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import AddInput from "../AddInput";
import ControlButton from "../ControlButton";
import {useStores} from "../Stores/RootStoreContext";

const AddForm = observer(() => {
    const { todos } = useStores();
    
    const [newTodoTitle, setNewTodoTitle] = useState();

    const handleAddTodo = () => {
        todos.addTodo(newTodoTitle);
        setNewTodoTitle("");
    }
    return (
        <div style={{display: "flex", alignItems: "center", marginBottom: 50}}>
            <AddInput onChange={setNewTodoTitle} value={newTodoTitle}/>
            <ControlButton onClick={handleAddTodo} pictureName="add_96x96_color.png"/>
        </div>
    );
});

export default AddForm;