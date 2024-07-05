import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../../todo.slice";

const CreateTodoField = () => {

    const [title, setTitle] = useState('')

    const dispatch = useDispatch()


    const enterTodo = () => {
        dispatch(actions.addTodo({_id: new Date,
            title,
            isComplited: false,}))
            setTitle('')
    }


    
    return(
        <div style={{
            backgroundColor: 'rgb(0, 0, 0, 0)',
            boxSizing: "border-box",
            width: '325px',
            minHeight: '50px',
            border: '2px solid rgb(42, 42, 65)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
            }}>
            <input style={{
                backgroundColor: 'rgb(0, 0, 0, 0)',
                color: 'white',
                width:'345px',
                height: '45px',
                border: '0',
                borderRadius: '10px'
            }}

            type="text" placeholder="Добавить задачу"
            onChange={event => {setTitle(event.target.value)}} 
            value = {title} 
            onKeyPress = {event => event.key === 'Enter' && enterTodo(event) }/>
        </div>
    )
};

export default CreateTodoField