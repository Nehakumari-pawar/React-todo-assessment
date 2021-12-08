import React from "react";
import './TodoItem.css';
export default function TodoItem(props){

    const deleteTodo  =() => {
        alert('sure!! you want to delete this todo...!!!!!');
        props.deleteHandle(props.eachItem.id)
    }
    const done =() => {
        alert('sure!! you want to mark this todo as done??');
        props.taskDone(props.eachItem.id)
    }

console.log(props.eachItem);

return  props.eachItem.done ?  (
    
        <div className="item">
            <div> 
                    <h4 style={{textDecoration : "line-through"}} >
                        {props.eachItem.item}
                    </h4> 
            </div>   
           
            <div className="icon" >
                <i className="fa fa-times" 
                 aria-hidden="true" onClick={done} 
                 style={{border:'3px solid red'}} />

                <i className="fa fa-trash"
                 aria-hidden="true" 
                 onClick={deleteTodo}  /> 
            </div>
           </div>) : (<div className="item">
                        <div> 
                                <p>
                                    {props.eachItem.item}
                                </p> 
                        </div> 
           
                        <div>
                            <i className="fa fa-check-square-o"  
                             aria-hidden="true" onClick={done} 
                             style={{border:'3px solid green'}}/>
            
                <i className="fa fa-trash" 
                aria-hidden="true" 
                 onClick={deleteTodo}/>
            </div>
        </div>

        
    );
    
}

//<button onClick={done} >Completed</button>
//<button onClick={deleteTodo} > Delete Todo </button>
 /* <i  onClick={done} className="fas trash-fa" > </i> // right tick */
 /*<button onClick={done} >Completed</button>  // cross tick (wrong tick) */
 /*<button onClick={deleteTodo} > Delete Todo </button> */ 