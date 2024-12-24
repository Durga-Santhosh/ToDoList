import { useState } from 'react'

function TodoList(){
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    function input(event){
        setNewTodo(event.target.value);

    }

    function addList(){
        if(newTodo!==""){
        setTodos([...todos, newTodo]);
        setNewTodo(event.target.value="");
        }
        else{
            alert("Please enter a task");
        }

    }
    function deleteList(index){
       const dellist=todos.filter((_,i)=>i !==index);
       setTodos(dellist);

    }
    function moveUp(index){
        if(index>0){
            const uplist=[...todos];
            [uplist[index],uplist[index-1]]=[uplist[index-1],uplist[index]];
            setTodos(uplist);
        }

    }
    function moveDown(index){
        if(index<todos.length-1){
            const downlist=[...todos];
            [downlist[index],downlist[index+1]]=[downlist[index+1],downlist[index]];
            setTodos(downlist);
        }
    }
    return (
        <>
    <div className="main">
        <h2>To Do List</h2>
        <div className="input">
            <div className='inputbut'><input type="text" 
            value={newTodo}
            onChange={input} 
            placeholder="Enter a task.........."/>
            <button onClick={()=>addList(10)}>Add</button>
            </div>
            <div className="list">
            <ol>
                {todos.map((task,index)=>
                <li key={index} className='text'>
                <span>{task}  </span>
                <div className='buttons'>
                <button onClick={()=>deleteList(index)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                </button>
                <button onClick={()=>moveUp(index)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                </button>
                <button onClick={()=>moveDown(index)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                </button>
                </div>
                </li>)}
            </ol>
            </div>
        </div>
    </div>
    <footer>&copy; Design By &nbsp;<a href="https://github.com/Durga-Santhosh" target='_blank'>Durga Santhosh</a>
    </footer>
    </>);


}
export default TodoList
