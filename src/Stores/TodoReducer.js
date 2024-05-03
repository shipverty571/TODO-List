import {getId} from "../Services/GetId";

const defaultState = {
    items: {},
    itemsIds: []
}

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TODO_DONE = "TODO_DONE"

// eslint-disable-next-line default-param-last
export const todosReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            const id = getId();
            const newState = {...state};
            newState.items[id] = {
                id,
                title: action.payload,
                isDone: false
            }
            return {
                ...newState,
                itemsIds: [...state.itemsIds, id]
            }
        }
        case REMOVE_TODO: {
            const newState = {...state};
            delete newState[action.payload];
            return {
                ...newState, 
                itemsIds: state.itemsIds.filter((itemId) => itemId !== action.payload)
            }
        }
        case TODO_DONE: {
            const newState = {...state};
            newState.items[action.payload] = {
                ...newState.items[action.payload],
                isDone: !newState.items[action.payload].isDone
            }
            return {
                ...newState
            };
        }
        default:
            return state;
    }
}

export const addTodoAction = (payload) => ({type: ADD_TODO, payload});
export const removeTodoAction = (payload) => ({type: REMOVE_TODO, payload});
export const toggleTodoDoneAction = (payload) => ({type: TODO_DONE, payload});