import React from "react"
import TodoItem from "./TodoItem"
import './TodoItem.css'
export default function TodoList(props){

//passing props for delete function    
const deleteHandle = (id) => {
    props.deleteTodos(id)
}
//passing props for taskdone function
const taskDone =(id) => {
    props.isDone(id)
}

    // console.log(props.todo);

    const userFormData = props.todo.map(eachItem => {
        return <TodoItem eachItem={eachItem}
                    key={eachItem.id} 
                    deleteHandle={deleteHandle}  
                    taskDone={taskDone}/> 
        })
    return(
        <div>
        {userFormData}
        </div>
    )
}