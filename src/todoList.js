import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import TaskBox from "./task";
import "./todo.css";
const TodoList = (props) => {
  return (
    <>
      <Droppable droppableId={props.droppableid}>
        {(provided) => (
          <ul
            className="list"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <li className="list-header">
              <h2>{props.list_name}</h2>
              <button onClick={props.showInpField}>+</button>
            </li>
            <li className={`list-${props.inpbox}-input-box`}>
              <form onSubmit={props.addTask} className="list-input">
                <input
                  id="reviewInp"
                  onFocus={true}
                  value={props.Inp}
                  onChange={(e) => {
                    props.setInp(e.target.value);
                  }}
                />

                <div className="list-submit">
                  <button onClick={props.addTask}>Submit</button>
                </div>
              </form>
            </li>
            {props.tasks.map((i, ind) => {
              return (
                <li key={i.id} className="w-100">
                  {/* <TaskBox task_label={i.task} index={i.index}/> */}
                  <Draggable
                    index={i.index}
                    draggableId={i.index.toString()}
                  >
                    {(provided) => (
                      <div
                        className="list-item"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <label>{i.task}</label>
                        <div className="list-edt-del">
                          <button onClick={props.edit}>Edit</button>
                          <button onClick={props.del}>Delete</button>
                        </div>
                      </div>
                    )}
                  </Draggable>
                </li>
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </>
  );
};

export default TodoList;
