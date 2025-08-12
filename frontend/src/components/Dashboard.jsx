import React from 'react'
import '../styles/dashboard.css';
import { TaskProvider } from '../contexts/TaskContext';
import Tasks from './Tasks';
import CreateTask from './CreateTask';
function Dashboard() {
  return (
    <section className='dashboard-container'>
         <TaskProvider>
          <div className='create-task-div'>
             <CreateTask/>
           </div>
          <Tasks />
      </TaskProvider>
    </section>
  )
}

export default Dashboard