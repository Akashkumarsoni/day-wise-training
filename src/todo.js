import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import "./todo.css";
import TodoList from "./todoList";

const Todo = () => {
  const [reviewTasks, setReviewTasks] = useState([
    { index: 0, todo: "reviews" },
    { index: 1, todo: "reviews" },
  ]);
  const [pendingTasks, setPendingTasks] = useState([
    { index: 3, todo: "pending" },
  ]);
  const [completeTasks, setCompleteTasks] = useState([
    { index: 5, todo: "completed" },
  ]);
// const [tasks, setTasks] = useState([
//     { index: 0, reviews: "45654646" },
//     { index: 1, pending: "revpppppiews" },
//     { index: 2, complete: "revpppppiews" },
//   ]);
  const [reviewInp, setReviewInp] = useState("");
  const [pendingInp, setPendingInp] = useState("");
  const [completedInp, setCompletedInp] = useState("");

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
      let currentTask = { index: reviewTasks.length, task: reviewInp };
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
      let currentTask = { index: pendingTasks.length, task: pendingInp };
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
      let currentTask = { index: completeTasks.length, task: completedInp };
      let arr = [currentTask, ...completeTasks];
      setCompleteTasks(arr);
      setCompletedInp("");
    }
  };
  return (
    <DragDropContext onDragEnd={() => {}}>
      <div className="app">
        <header>
          <h1>Todo List</h1>
        </header>
        <div className="lists">
          <TodoList
            list_name="Review"
            showInpField={addReview}
            addTask={submitReview}
            tasks={reviewTasks}
            keyname={"reviews"}
            inp={reviewInp}
            setInp={(e) => {
              setReviewInp(e);
            }}
          />
          <TodoList
            list_name="Pending"
            showInpField={addPending}
            addTask={submitPending}
            tasks={pendingTasks}
            inp={pendingInp}
            keyname={"pending"}
            setInp={(e) => {
              setPendingInp(e);
            }}
          />
          <TodoList
            list_name="Completed"
            showInpField={addCompleted}
            addTask={submitCompleted}
            tasks={completeTasks}
            inp={completedInp}
            keyname={"complete"}
            setInp={(e) => {
              setCompletedInp(e);
            }}
          />
        </div>
      </div>
    </DragDropContext>
  );
};

export default Todo;










// import React, { useState } from "react";
// import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
// import Task from "./task";
// import "./todo.css";

// const Todo = () => {
//   const [tasks, setTasks] = useState([
//     { index: 1, review: "reviews" },
//     { index: 2, pending: "pending" },
//     { index: 3, completed: "Completed" },
//   ]);
//   const [reviewInp, setReviewInp] = useState("");
//   const [pendingInp, setPendingInp] = useState("");
//   const [completedInp, setCompletedInp] = useState("");

//   const addReview = () => {
//     document.querySelector(".list-review-input-box").style.display = "block";
//     document.getElementById("reviewInp").focus();
//   };
//   const submitReview = (e) => {
//     e.preventDefault();
//     document.querySelector(".list-review-input-box").style.display = "none";
//     if (reviewInp === "") {
//       alert("Can't submit empty in task");
//     } else {
//       let currentTask = { index: tasks.length, review: reviewInp };
//       let arr = [currentTask, ...tasks];
//       setTasks(arr);
//       setReviewInp("");
//     }
//   };

//   const addPending = () => {
//     document.querySelector(".list-pending-input-box").style.display = "block";
//     document.getElementById("pendingInp").focus();
//   };
//   const submitPending = (e) => {
//     e.preventDefault();
//     document.querySelector(".list-pending-input-box").style.display = "none";
//     if (pendingInp === "") {
//       alert("Can't submit empty in pending");
//     } else {
//       let currentTask = { index: tasks.length, pending: pendingInp };
//       let arr = [currentTask, ...tasks];
//       setTasks(arr);
//       setPendingInp("");
//     }
//   };

//   const addCompleted = () => {
//     document.querySelector(".list-completed-input-box").style.display = "block";
//     document.getElementById("compInp").focus();
//   };
//   const submitCompleted = (e) => {
//     e.preventDefault();
//     document.querySelector(".list-completed-input-box").style.display = "none";
//     if (completedInp === "") {
//       alert("Can't submit empty in completed task");
//     } else {
//       let currentTask = { index: tasks.length, completed: completedInp };
//       let arr = [currentTask, ...tasks];
//       setTasks(arr);
//       setCompletedInp("");
//     }
//   };
//   return (
//     <DragDropContext onDragEnd={() => {}}>
//       <div className="app">
//         <header>
//           <h1>Todo List</h1>
//         </header>
//         <div className="lists">
//           <Droppable droppableId="reviewList">
//             {(provided) => (
//               <ul
//                 className="list"
//                 ref={provided.innerRef}
//                 {...provided.droppableProps}
//               >
//                 <li className="list-header">
//                   <h2>Review</h2>
//                   <button onClick={addReview}>+</button>
//                 </li>
//                 <li className="list-review-input-box">
//                   <form onSubmit={submitReview} className="list-input">
//                     <input
//                       id="reviewInp"
//                       onFocus={true}
//                       value={reviewInp}
//                       onChange={(e) => {
//                         setReviewInp(e.target.value);
//                       }}
//                     />

//                     <div className="list-submit">
//                       <button onClick={addReview}>Submit</button>
//                     </div>
//                   </form>
//                 </li>
//                 {tasks.map((i, index) => {
//                   if (i.review) {
//                     return (
//                       <li key={index} className="w-100">
//                         <Task task_label={i.review} index={i.index}/>
//                       </li>
//                     );
//                   }
//                 })}
//                 {provided.placeholder}
//               </ul>
//             )}
//           </Droppable>
//           <Droppable droppableId="pendingList">
//             {(provided) => (
//               <ul
//                 className="list"
//                 ref={provided.innerRef}
//                 {...provided.droppableProps}
//               >
//                 <li className="list-header">
//                   <h2>Pending</h2>
//                   <button onClick={addPending}>+</button>
//                 </li>
//                 <li className="list-pending-input-box">
//                   <form onSubmit={submitPending} className="list-input">
//                     <input
//                       id="pendingInp"
//                       value={pendingInp}
//                       onChange={(e) => {
//                         setPendingInp(e.target.value);
//                       }}
//                     />

//                     <div className="list-submit">
//                       <button onClick={submitPending}>Submit</button>
//                     </div>
//                   </form>
//                 </li>
//                 {tasks.map((i, index) => {
//                   if (i.pending) {
//                     return (
//                       <li className="list-item" key={index} index={index}>
//                         <label>{i.pending}</label>
//                         <div className="list-edt-del">
//                           <button onClick={addReview}>Edit</button>
//                           <button onClick={addReview}>Delete</button>
//                         </div>
//                       </li>
//                     );
//                   }
//                 })}
//                 {provided.placeholder}
//               </ul>
//             )}
//           </Droppable>

//           <ul className="list">
//             <li className="list-header">
//               <h2>Completed</h2>
//               <button onClick={addCompleted}>+</button>
//             </li>
//             <li className="list-completed-input-box">
//               <form onSubmit={submitCompleted} className="list-input">
//                 <input
//                   id="compInp"
//                   value={completedInp}
//                   onChange={(e) => {
//                     setCompletedInp(e.target.value);
//                   }}
//                 />

//                 <div className="list-submit">
//                   <button onClick={submitCompleted}>Submit</button>
//                 </div>
//               </form>
//             </li>
//             {tasks.map((i, index) => {
//               if (i.completed) {
//                 return (
//                   <li className="list-item" key={index}>
//                     <label>{i.completed}</label>
//                     <div className="list-edt-del">
//                       <button onClick={addReview}>Edit</button>
//                       <button onClick={addReview}>Delete</button>
//                     </div>
//                   </li>
//                 );
//               }
//             })}
//           </ul>
//         </div>
//       </div>
//     </DragDropContext>
//   );
// };

// export default Todo;
