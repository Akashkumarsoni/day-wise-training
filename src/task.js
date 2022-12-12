import React from "react";
import { Draggable } from "react-beautiful-dnd";

const TaskBox = (props) => {
  return (
    <Draggable
     index={props.index} draggableId={props.id.toString()}>
      {(provided) => (
        <div
          className="list-item"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <label>{props.task_label}</label>
          <div className="list-edt-del">
            <button onClick={props.edit}>Edit</button>
            <button onClick={props.del}>Delete</button>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TaskBox;
