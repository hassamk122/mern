import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import Task from "./Task";
import "../styles/tasks.css";
function Tasks() {
  const { isLoading, tasks } = useContext(TaskContext);

 
  if (isLoading) return <p>Loading tasks...</p>;
  if(tasks.length == 0) return <p>0 Tasks to work on</p>;
  return (
    <>
      <div className="tasks-container">
      {  tasks.map((task) => (
         <Task key={task._id}
          task={task}
         />
        ))
      }
      </div>
    </>
  );
}

export default React.memo(Tasks);
