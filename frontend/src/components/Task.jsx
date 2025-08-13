import React from "react";
import { useContext, useState } from "react";
import { TaskContext } from "../contexts/TaskContext";
import "../styles/task.css";
import { NotepadText, Pencil, Trash2 } from "lucide-react";

function Task({ task }) {
  const { deleteTask, updateTask } = useContext(TaskContext);

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
  return (
    <div className="task-container">
      <div className="task-update-div">
        <div className="task-logo"><NotepadText /></div>
        <div>
          <button className="task-update-btn">
            <Pencil color="currentColor" />
          </button>
          <button
            className="task-delete-btn"
            onClick={() => handleDeleteTask(task._id)}
          >
            <Trash2 color="currentColor" />
          </button>
        </div>
      </div>
      <div className="task-header">
        <h1 className="task-title">
          {task.title}
        </h1>
        <option className="task-status">{task.status}</option>
      </div>
      <div>
        <span className="task-description-label">Description</span>
        <p className="task-description">{task.description}</p>
      </div>
      <div className="task-duedate-div">
        <span className="task-dueDate-label">Due on : &nbsp; </span>
        <p className="task-dueDate">{task.dueDate.split("T")[0]}</p>
      </div>
    </div>
  );
}

export default Task;
