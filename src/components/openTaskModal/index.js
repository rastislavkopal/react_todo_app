import React, { useState } from 'react'
import { IoCloseCircleSharp } from "react-icons/io5";

export default function OpenTaskModal({ openedTaskId, setOpenedTaskId, setColumns, columns }) {
  
  let selectedItem = {};
  let selectedIndex = 0;
  let selectedColumndId = '';
  
  // find selected item
  Object.entries(columns).forEach(([columnId, column], index) => {
    Object.entries(column.items).forEach(([itemId, item], index) => {
      selectedItem = item;
      selectedIndex = index;
      selectedColumndId = columnId;
    });
  });

  const [title, setTitle] = useState(selectedItem.title);
  const [description, setDescription] = useState( ("description" in selectedItem) ? selectedItem.description : "");
  
  const handleDelete = (e) => {
    e.preventDefault();

    const columnItems = columns[selectedColumndId].items;
    const column = columns[selectedColumndId];
    columnItems.splice(selectedIndex, 1);

    setColumns({
      ...columns,
      [selectedColumndId]: {
        ...column,
        items: columnItems
      }
    });
    setOpenedTaskId('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    selectedItem = {
      ...selectedItem,
      title: title,
      description: description
    };

    const columnItems = columns[selectedColumndId].items;
    const column = columns[selectedColumndId];
    columnItems.splice(selectedIndex, 1, selectedItem);

    setColumns({
      ...columns,
      [selectedColumndId]: {
        ...column,
        items: columnItems
      }
    });
    setOpenedTaskId('');
  }

  return (
    <div id="open_task_container">
        <div id='open_task_modal'>
          <button className="mb-1 btn" onClick={ (e) => setOpenedTaskId('') } style={{float: "right"}}>
              <IoCloseCircleSharp 
                style={{ color: "red", width: "30px", height: "30px" }}
              />
          </button>

          <form onSubmit={ (e) => handleSubmit(e) }>
                    <div className="form-group">
                        <label htmlFor="taskTitle">Nazov tasku</label>
                        <input type="text" className="form-control"
                            id="taskTitle"
                            value={title}
                            onChange={(e) => setTitle(e.target.value) }
                        />
                        {/* <span style={{ color: "red" }}>{errors["taskTitle"]}</span> */}
                    </div>
                    {/* <div className="form-group">
                        <label for="formGroupExampleInput2">Another label</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
                    </div> */}
                    <div className="form-group mt-2">
                        <label htmlFor="taskDescription">Popis</label>
                        <textarea className="form-control mt-2" id="taskDescription" rows="3"
                            value={ description }
                            onChange={(e) => setDescription(e.target.value) }
                            >
                        </textarea>
                        {/* <span style={{ color: "red" }}>{errors["taskDescription"]}</span> */}
                    </div>
                    <div className='w-100'>
                      <button type="submit" className="btn btn-primary mt-3">Ulozit</button>
                      <button onClick={ (e) => handleDelete(e)} type="button" className="btn btn-danger mt-3 float-end">Zmazat</button>  
                    </div>
                </form>
        </div>
    </div>
  )
}
