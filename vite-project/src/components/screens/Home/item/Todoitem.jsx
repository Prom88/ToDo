import React from "react";
import Check from "./Check";
import { BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { actions } from "../../../../todo.slice";

const TodoItem = ({todo}) => {

    const dispatch = useDispatch()



    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '5px',
            backgroundColor: 'rgb(42, 42, 65)',
            minHeight: '50px',
            borderRadius: '10px',
            paddingLeft: '25px',
            width: '300px',
            color: 'white',
            textDecoration: todo.isComplited ? 'line-through' : 'none',
        }}
        >
            <div onClick={(() => dispatch(actions.changeTodo(todo)))} style={{display: 'flex', alignItems: 'center'}}>
            <Check isComplited={todo.isComplited}/>
            
            <span style={{maxWidth:'200px', minHeight:'', display: 'block'}}>{todo.title}</span>
            </div>
            
            <BsTrash style={{userSelect: "none",}} onClick={() => dispatch(actions.delTodo(todo))}/>

        </div>
    )
}

export default TodoItem