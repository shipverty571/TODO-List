import {getId} from "../Services/GetId";

const defaultState = {
    items: []
}

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TODO_DONE = "TODO_DONE"

// eslint-disable-next-line default-param-last
export const todosReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            return {
                ...state, 
                items: [
                    ...state.items, 
                    {
                        id: getId(),
                        title: action.payload,
                        isDone: false
                    }
                ]
            }
        }
        case REMOVE_TODO: {
            return {...state, items: state.items.filter((item) => item.id !== action.payload)}
        }
        case TODO_DONE: {
            return {
                ...state, 
                items: [
                    ...state.items.map((item) => item.id === action.payload ?
                    {...item, isDone: !item.isDone} : item)
                ]
            }
        }
        default:
            return state;
    }
}

export const addTodoAction = (payload) => ({type: ADD_TODO, payload});
export const removeTodoAction = (payload) => ({type: REMOVE_TODO, payload});
export const toggleTodoDoneAction = (payload) => ({type: TODO_DONE, payload});