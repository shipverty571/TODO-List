import {makeAutoObservable} from "mobx";
import {getId} from "../Services/GetId";

class TodoStore {
    items = [
        {
            id: getId(),
            title: "Сделать сотку в жиме лежа",
            isDone: false
        },
        {
            id: getId(),
            title: "Полить кактусы",
            isDone: false
        },
        {
            id: getId(),
            title: "Отправить PR",
            isDone: true
        },
        {
            id: getId(),
            title: "Проверить лабораторную работу",
            isDone: true
        },
    ];
    
    constructor() {
        makeAutoObservable(this);
    }
    
    addTodo(newItemTitle) {
        this.items.push({
            id: getId(),
            title: newItemTitle,
            isDone: false
        })
    }

    removeTodo(id) {
        const index = this.items.findIndex((todo) => todo.id === id);
        if (index === -1) {
            return;
        }
        this.items.splice(index, 1);
    }

    toggleTodoDone(id) {
        const index = this.items.findIndex((todo) => todo.id === id);
        if (index === -1) {
            return;
        }
        this.items[index].isDone = !this.items[index].isDone;
    }
}
export default new TodoStore();