import React, {useState} from 'react';

function ToDoList()
{
    const [tasks, setTasks] = useState([]);
    const [newtask, setNewTasks] = useState([""]);

    function handleInputChange(event)
    {
        setNewTasks(event.target.value);
    }

    function addTask()
    { 
        if(newtask.trim() !== "")
        {
            setTasks(t => [...t, newtask]);
            setNewTasks("");
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
          if(index > 0)
          {
              const updatedTasks = [...tasks];
              [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]];
              setTasks(updatedTasks);
          }
    }

    function moveTaskDown(index)
    {
        if(index < tasks.length - 1)
            {
                const updatedTasks = [...tasks];
                [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1],updatedTasks[index]];
                setTasks(updatedTasks);
            }
    }

    return(<div className="to-do-list">
              <h1>To-Do-List</h1>
              <div>
                <div className='txtNAd'>
                   <input  
                       type="text"
                       placeholder="Enter a task"
                       value={newtask}
                       onChange={handleInputChange}/>
                    <button
                       className="add-button"
                       onClick = {addTask}>
                        Add
                    </button>
                </div>
                    <ol>
                        {tasks.map((task,index) => 
                            <li key={index}>
                               <span className="text">{task}</span>
                               <button
                                    className="delete-button"
                                    onClick = {() => deleteTask(index)}>
                                    Delete   
                                </button>
                                <button
                                    className="move-up-button"
                                    onClick = {() => moveTaskUp(index)}>
                                    Move Task up    
                                </button>
                                <button
                                    className="move-down-button"
                                    onClick = {() => moveTaskDown(index)}>
                                    Move Task down  
                                </button>
                          </li>)}
                    </ol>
              </div>
           </div>);
}
export default ToDoList;