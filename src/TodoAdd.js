import React, { useState } from "react"
import './TodoAdd.css';
export default function TodoAdd(props){
    const [inputTodo, setInputTodo] = useState({
        item : "",
        done : false,
    })

    const userInput = (e) => {
        setInputTodo(prevState => {
            return{
                ...prevState,
                item : e.target.value,
            }
        })
    }
 
    const submitForm =(e) => {
        e.preventDefault();     // for preventing default behaviour
        // console.log(input);
       const userData  ={
           ...inputTodo
       }
    //    console.log(userData);

    props.formData(userData);
    setInputTodo(prevState => {  //for setting the state
        return{
            ...prevState,
            item : ""
        }
    })
    }

    return(
        <div className="wrapper">
          
           <form onSubmit={submitForm} >      
               <input className="list"
                type="text" onChange={userInput} 
                value={inputTodo.item} 
                placeholder="Enter your todos..." 
                style={{border:'2px solid green'}}/>
               
               <button className="btn" 
               type="submit" >Add Todos
               </button>
           </form>

           
        </div>
    )
}
