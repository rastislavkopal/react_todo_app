import React, { useState } from 'react'
import { IoCloseCircleSharp } from "react-icons/io5";
import { v4 as uuid } from 'uuid';

export default function AddTaskModal({selectedColumndId, setColumns, columns, setIsAddTaskModalOpen, isTaskModalOpen}) {
    
    const [taskTitle, settaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [errors, setErrors] = useState({});

    
    const closeModal = (e) => {
        setIsAddTaskModalOpen(false);
    }

    const submitNewTask = (e) => {
        e.preventDefault();

        if (!taskTitle || taskTitle.trim() === '') {
            setErrors({...errors, "taskTitle": 'Title is required'});
            return;
        }
        
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
        <div className={` ${(isTaskModalOpen) ? "add_task_modal" : "add_task_modal_content_closed"}`}>
            <div className={`${ (isTaskModalOpen) ? "add_task_modal_content" : "add_task_modal_content_closed" }`}>
                <button className='btn' onClick={ (e) => closeModal(e) } style={{float: "right"}}>
                    <IoCloseCircleSharp
                        style={{ color: "red", width: "30px", height: "30px" }}
                    />
                </button>
                <form onSubmit={ (e) => submitNewTask(e)}>
                    <div className="form-group mt-3">
                        <label htmlFor="taskTitle">Nazov tasku</label>
                        <input type="text" className="form-control"
                            id="taskTitle"
                            placeholder="Dokoncit KAJ semestralku.."
                            value={taskTitle}
                            onChange={(e) => settaskTitle(e.target.value)}
                        />
                        <span style={{ color: "red" }}>{errors["taskTitle"]}</span>
                    </div>
                    {/* <div className="form-group">
                        <label for="formGroupExampleInput2">Another label</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
                    </div> */}
                    <div className="form-group mt-3">
                        <label htmlFor="taskDescription">Popis ulohu</label>
                        <textarea className="form-control mt-2" id="taskDescription" rows="3"
                            value={taskDescription}
                            onChange={(e) => setTaskDescription(e.target.value)}
                            >
                        </textarea>
                        <span style={{ color: "red" }}>{errors["taskDescription"]}</span>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Vytvorit</button>
                </form>
            </div>
        </div>
    );
}
