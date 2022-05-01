import React, { useState } from 'react'
import { IoCloseCircleSharp } from "react-icons/io5";
import { v4 as uuid } from 'uuid';

export default function AddTaskModal({selectedColumndId, setColumns, columns, setIsAddTaskModalOpen}) {
    
    const [taskTitle, settaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    
    const closeModal = (e) => {
        setIsAddTaskModalOpen(false);
    }

    const submitNewTask = (e) => {
        e.preventDefault();
        console.log('new task');
        
        const newTask = {
            id: uuid(),
            content: "New task",
            description: taskDescription,
            title: taskTitle,
        };
    
        const column = columns[selectedColumndId];
        const newItems = [...column.items, newTask];
        setColumns({
          ...columns,
          [selectedColumndId]: {
            ...column,
            items: newItems
          }
        });
        setIsAddTaskModalOpen(false);
    }

    return (
        <div className='add_task_modal'>
            <div className='add_task_modal_content'>
                index
                <button onClick={ (e) => closeModal(e) } style={{float: "right"}}>
                    <IoCloseCircleSharp />
                </button>
                <form onSubmit={ (e) => submitNewTask(e)}>
                    <div className="form-group">
                        <label htmlFor="taskTitle">Example label</label>
                        <input type="text" className="form-control"
                            id="taskTitle"
                            placeholder="Example input"
                            // for="taskTitle"
                            value={taskTitle}
                            onChange={(e) => settaskTitle(e.target.value)}
                        />
                    </div>
                    {/* <div className="form-group">
                        <label for="formGroupExampleInput2">Another label</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
                    </div> */}
                    <div className="form-group">
                        <label htmlFor="taskDescription">Example textarea</label>
                        <textarea className="form-control" id="taskDescription" rows="3"
                            value={taskDescription}
                            onChange={(e) => setTaskDescription(e.target.value)}
                            >
                        </textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}
