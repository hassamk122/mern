import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
function Tasks() {
 const {isLoading,tasks} = useContext(TaskContext);

  if (isLoading)   return <p>Loading tasks...</p>;

    return (
      <>
        {tasks.length === 0? (
          <p>0 Tasks to work on</p>
        ) : (
          tasks.map((task) => (
            <div key={task._id} className="task-container">
                <h4> {task.title}  </h4>    
                 <p>   {task.description} </p> 
                 <h4>   {task.priority} </h4> 
                 <h4>   {task.status} </h4> 
            </div>
          ))
        )}
      </>
    );
}

export default React.memo(Tasks);