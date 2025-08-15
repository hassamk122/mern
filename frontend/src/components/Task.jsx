import React from "react";
import { useContext, useState } from "react";
import { TaskContext } from "../contexts/TaskContext";
import "../styles/task.css";
import { NotepadText, Pencil, Trash2,PencilOff } from "lucide-react";
import UpdateTask from "./UpdateTask";

function Task({ task }) {
  const { deleteTask, updateTask } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);

  const [form, setForm] = useState({
    title: task.title,
    description: task.description,
    dueDate: task.dueDate.split("T")[0],
    status: task.status,
  });

  async function handleDeleteTask(id) {
    await deleteTask(id);
  }
  async function handleUpdateTask(id) {
    await updateTask(id, form);
  }
  async function update(id) {
    await updateTask(task._id,form);
    setIsEditing(false);
  }
  return (
    <div className="task-container">
      <div className="task-update-div">
        <div className="task-logo">
          <NotepadText  />
        </div>
        <div>
          <button className="task-update-btn"onClick={()=>setIsEditing(!isEditing)}>
            {isEditing?<PencilOff color="currentColor"  />:<Pencil  color="currentColor"  />}
          </button>
          <button
            className="task-delete-btn"
            onClick={() => handleDeleteTask(task._id)}
          >
            <Trash2 color="currentColor" />
          </button>
        </div>
      </div>
      {isEditing ? (
        <UpdateTask 
        form = {form}
        setForm ={setForm}
        isEditing ={isEditing}
        setIsEditing ={setIsEditing}
        update ={update}
        />
      ) : (
        <>
          <div className="task-header">
            <h1 className="task-title">{task.title}</h1>
            <option className={`task-status ${task.status}`} >{task.status}</option>
          </div>
          <div>
            <span className="task-description-label">Description</span>
            <p className="task-description">{task.description}</p>
          </div>
          <div className="task-duedate-div">
            <span className="task-dueDate-label">Due on : &nbsp; </span>
            <p className="task-dueDate">{task.dueDate.split("T")[0]}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Task;
