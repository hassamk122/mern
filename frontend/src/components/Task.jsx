import React from 'react'
import {useContext, useState } from "react";
import { TaskContext } from '../contexts/TaskContext';
import "../styles/task.css";

function Task({ task}) {
   const  { deleteTask ,updateTask} = useContext(TaskContext);
     

    const [form, setForm] = useState({
    title: task.title,
    description: task.description,
    dueDate: task.dueDate.split("T")[0],
    status: task.status
  });

  async function handleDeleteTask(id) {
    await deleteTask(id);
  }
  async function handleUpdateTask(id) {
    await updateTask(id,form);
  }
  return (
     <div className="task-container">
        <table>
            <thead>
                <th className='task-th'>Task</th>
                <th className='task-th'>Description</th>
                <th className='task-th'>Status</th>
                <th className='task-th'>Due on</th>
            </thead>
            <tbody>
                <tr>
                    <td className='task-title'>{task.title}</td>
                    <td className='task-description'>{task.description}</td>
                    <td className='task-status'>{task.status}</td>
                    <td className='task-dueDate'>{task.dueDate.split("T")[0]}</td>
                </tr>
            </tbody>
        </table>
           <button className='task-delete-btn' onClick={() => handleDeleteTask(task._id)}>Delete</button>
          </div>
  )
}

export default Task;