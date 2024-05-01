import './App.css';
import React from "react";
import styles from "./App.module.css"
import TodoList from "./TodoList";
import AddForm from "./AddForm";

const App = () => {
    return (
        <div className={styles.App}>
            <h1>TODO List</h1>
            <AddForm />
            <TodoList />
        </div>
    );
}

export default App;
