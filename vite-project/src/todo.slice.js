import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        _id: 123,
        title: 'Create react todo-app',
        isComplited: false,
    },
    {   
        _id: 1234,
        title: 'load app on github',
        isComplited: false,
    },
    {
        _id: 12345,
        title: 'make a tea',
        isComplited: false,
    },
]
export const todosSlice = createSlice({
    name: 'todos',
    initialState,

    reducers: {
        addTodo: (state, action) => {
            const todo = action.payload
            state.push(todo)
        },

        changeTodo: (state, {payload}) => {
            const id = state.findIndex(t => t._id == payload._id)
            console.log(payload)
            console.log(id)
            state[id].isComplited = !state[id].isComplited
        },

        delTodo: (state, {payload}) => {
            const id = state.findIndex(t => t._id == payload._id)
            console.log(payload)
            console.log(id)
            state.splice(id, 1)
        },
    }
})

export const {actions, reducer} = todosSlice