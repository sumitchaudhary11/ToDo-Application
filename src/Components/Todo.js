import { useState} from 'react';
import Todoinput from './Todoinput';
import Todolist from './Todolist';

const Todo=()=>{
    const [text,setText]=useState(""); // store only single value
    const [todoList, settodoList]=useState([]); // store the multiple values. It is a list


    console.log(todoList)

    let changeText =() => {
        /*setText("Welcome to Dell")*/
        let newtodoList = {
            name:text //read the character from the input box
        }
            //array or object deep copy
        let _todolist=[...todoList]; // creates a deep copy of an array
        _todolist.push(newtodoList); // push the values into the todolist
        settodoList(_todolist); // set the list of todos into the state todolist
        setText("")
    };
    
    let inputChange= (event) => {
        /*event.target.value*/
        setText(event.target.value)
         
    };
   

    return(
        <>
            <Todoinput text={text} inputChange={inputChange} changeText={changeText}/>
            <Todolist todoList={todoList} />
            
            
    </>

    ); 
};

export default Todo;