import React from 'react'
import "../styles/updateTask.css";
function UpdateTask({setForm,form,setIsEditing,update}) {
  return (
            <>
         <div className="update-header">
           <input className="update-title"  value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })}/>
           
           <div className='update-select-div'>
            <label htmlFor='status' >Change status :</label>
           <select
           name='status'
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
          >
            <option value="completed">Completed</option>
            <option value="inProgress">In Progress</option>
            <option value="NotStarted">Not Started</option>
          </select>
          </div>
          </div>
          <div className='update-description-div'>
            <span className="task-description-label">Description</span>
              <textarea className="task-description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}/>
          </div>
           <div className="task-duedate-div">
            <span className="task-dueDate-label">Due on : &nbsp; </span>
           <input
            type="date"
            value={form.dueDate}
            onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
          />
          </div>
          <div>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
            <button onClick={update}>Update</button>
          </div> 
        </>
  )
}

export default UpdateTask;