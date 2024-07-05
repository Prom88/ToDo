import React, { useState } from "react";
import TodoItem from "./item/Todoitem";
import './Home.css';
import CreateTodoField from "./CreateTodoField";
import { useSelector } from "react-redux";


const Home = () => {


    const todosData = useSelector(state => state.todos)

    console.log(todosData)




    return(

        <div className="home">
            <h1 style={{
                userSelect: "none",
            }}>Today tasks</h1>
            {todosData.map(item => 
            <TodoItem key={item._id} todo={item}/>)}

            <CreateTodoField/>
        </div>
    )
}

export default Home