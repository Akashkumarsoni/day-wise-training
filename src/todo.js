import React, { useRef, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import "./todo.css";
import TodoList from "./todoList";

const Todo = () => {
  const [reviewTasks, setReviewTasks] = useState([
    // { index: 0, task: "reviews2" },
    // { index: 1, task: "reviews" },
  ]);
  const [pendingTasks, setPendingTasks] = useState([
    { index: 0, task: "pending" },
  ]);
  const [completeTasks, setCompleteTasks] = useState([
    // { index: 3, task: "completed" },
  ]);
  const [reviewInp, setReviewInp] = useState("");
  const [pendingInp, setPendingInp] = useState("");
  const [completedInp, setCompletedInp] = useState("");
  const reference = useRef(null)
  const addReview = () => {
    document.querySelector(".list-review-input-box").style.display = "block";
    document.getElementById("reviewInp").focus();
  };
  const submitReview = (e) => {
    e.preventDefault();
    document.querySelector(".list-review-input-box").style.display = "none";
    if (reviewInp === "") {
      alert("Can't submit empty in task");
    } else {
      let indx =
        reviewTasks.length + pendingTasks.length + completeTasks.length;
      let currentTask = { index: indx, task: reviewInp };
      let arr = [currentTask, ...reviewTasks];
      setReviewTasks(arr);
      setReviewInp("");
    }
  };
  const addPending = () => {
    document.querySelector(".list-pending-input-box").style.display = "block";
    document.getElementById("pendingInp").focus();
  };
  const submitPending = (e) => {
    e.preventDefault();
    document.querySelector(".list-pending-input-box").style.display = "none";
    if (pendingInp === "") {
      alert("Can't submit empty in pending");
    } else {
      let indx =
        reviewTasks.length + pendingTasks.length + completeTasks.length;
      let currentTask = { index: indx, task: pendingInp };
      let arr = [currentTask, ...pendingTasks];
      setPendingTasks(arr);
      setPendingInp("");
    }
  };
  const addCompleted = () => {
    document.querySelector(".list-completed-input-box").style.display = "block";
    document.getElementById("compInp").focus();
  };
  const submitCompleted = (e) => {
    e.preventDefault();
    document.querySelector(".list-completed-input-box").style.display = "none";
    if (completedInp === "") {
      alert("Can't submit empty in completed task");
    } else {
      let indx =
        reviewTasks.length + pendingTasks.length + completeTasks.length;
      let currentTask = { index: indx, task: completedInp };
      let arr = [currentTask, ...completeTasks];
      setCompleteTasks(arr);
      setCompletedInp("");
    }
  };
  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    if (
      destination.droppableid === source.droppableid &&
      destination.index === source.index
    )
      return;
    let add,
      notStarted = reviewTasks,
      active = pendingTasks,
      over = completeTasks;
    if (source.droppableId === "reviewListBox") {
      add = notStarted[source.index];
      notStarted.splice(add, 1);
      setReviewTasks(notStarted);
      if (destination.droppableId === "pendingListBox") {
        active.push(add);
        setPendingTasks(active);
      }
      if (destination.droppableId === "completedListBox") {
        over.push(add);
        setCompleteTasks(over);
      }
    }
    if (source.droppableId === "pendingListBox") {
      add = active[source.index];
      active.splice(add, 1);
      setPendingTasks(active);
      if (destination.droppableId === "reviewListBox") {
        notStarted.push(add);
        setReviewTasks(notStarted);
      }
      if (destination.droppableId === "completedListBox") {
        over.push(add);
        setCompleteTasks(over);
      }
    }
    if (source.droppableId === "completedListBox") {
      add = over[source.index];
      over.splice(add, 1);
      setPendingTasks(over);
      if (destination.droppableId === "reviewListBox") {
        notStarted.push(add);
        setReviewTasks(notStarted);
      }
      if (destination.droppableId === "pendingListBox") {
        active.push(add);
        setCompleteTasks(active);
      }
    }
  };
  return (
    <div className="app">
      <header>
        <h1>Todo List</h1>
      </header>
      <DragDropContext
        onDragEnd={(e) => {
          onDragEnd(e);
        }}
      >
        <div className="lists">
          <TodoList
            inpbox={"review"}
            droppableid={"reviewListBox"}
            list_name={"Review"}
            showInpField={addReview}
            addTask={submitReview}
            tasks={reviewTasks}
            keyname={"reviews"}
            inp={reviewInp}
            ref={reference}
            setInp={setReviewInp}
          />
          <TodoList
            inpbox={"pending"}
            droppableid="pendingListBox"
            list_name="Pending"
            showInpField={addPending}
            addTask={submitPending}
            tasks={pendingTasks}
            inp={pendingInp}
            keyname={"pending"}
            setInp={setPendingInp}
          />
          <TodoList
            inpbox={"completed"}
            droppableid="completedListBox"
            list_name="Completed"
            showInpField={addCompleted}
            addTask={submitCompleted}
            tasks={completeTasks}
            inp={completedInp}
            keyname={"complete"}
            setInp={setCompletedInp}
          />
        </div>
      </DragDropContext>
    </div>
  );
};
export default Todo;
