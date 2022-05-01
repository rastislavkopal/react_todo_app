import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import initColumns from "./data/initColumns";
import CustomDraggable from "../CustomDraggable";
import { IoAddCircle } from "react-icons/io5";
import { v4 as uuid } from 'uuid';
import AddTaskModal from "../AddTaskModal";
 
const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) 
      return;

  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];

    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};

export default function CustomDragDropContext() {
  const [columns, setColumns] = useState(initColumns);
  const [selectedColumndId, setSelectedColumndId] = useState('');
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);

  const addTask = (columnId) => {
    setSelectedColumndId(columnId)
    setIsAddTaskModalOpen(true);
  }

  return (
    <DragDropContext
        onDragEnd={result => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div className="drag_n_drop_context" key={columnId} >
              {isAddTaskModalOpen && 
              <AddTaskModal
                selectedColumndId={selectedColumndId}
                setColumns={setColumns}
                columns={columns}
                setIsAddTaskModalOpen={setIsAddTaskModalOpen} 
              /> }
              <h2>{column.name}</h2>
              <div style={{ margin: 8 }}>
                <div className="droppable_column_header">
                  <button 
                    onClick={() => { addTask(columnId) }}>
                      <IoAddCircle style={{ 
                          width: 25,
                          height: 25,
                          float: "right",
                          marginRight: 5,
                          padding: 2,
                          }}
                        />
                  </button>
                </div>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div className="droppable_column"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{ background: snapshot.isDraggingOver ? "lightblue" : "lightgrey" }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                            >
                                {(provided, snapshot) => {
                                    return (
                                        <div className="draggable_item"
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={{
                                                backgroundColor: snapshot.isDragging ? "#5e9ecc" : "#456C86",
                                                ...provided.draggableProps.style
                                            }}
                                        >
                                            {item.title}
                                        </div>
                                    );
                                }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
  )
}
