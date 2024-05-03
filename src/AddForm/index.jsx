import React, {memo, useState} from 'react';
import {useDispatch} from "react-redux";
import AddInput from "../AddInput";
import ControlButton from "../ControlButton";
import {addTodoAction} from "../Stores/TodoReducer";

const AddForm = memo(() => {
    const dispatch = useDispatch();
    
    const [newTodoTitle, setNewTodoTitle] = useState();

    const handleAddTodo = () => {
        dispatch(addTodoAction(newTodoTitle));
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