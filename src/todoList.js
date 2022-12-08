import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import Task from './task';
import "./todo.css";
const TodoList = (props) => {
  return (
    <>
        <Droppable droppableId="reviewList">
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
                <li className="list-review-input-box">
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
                {props.tasks.map((i, index) => {
                  return (
                    <li key={index} className="w-100">
                      <Task task_label={i.todo} index={i.index}/>
                    </li>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
    </>
  )
}

export default TodoList