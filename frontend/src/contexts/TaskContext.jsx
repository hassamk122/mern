import axios from "axios";
import { createContext, useEffect, useMemo, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState([]);

  async function fetchTasks() {
      setIsLoading(true);
      try {
        const response = await axios.get("/api/tasks");
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setIsLoading(false);
      }
  }
  async function addTask(newTask) {
    try {
      const response = await axios.post("/api/createtask", newTask);
      setTasks((prev) => [...prev, response.data]);
    } catch (error) {
      console.error("Error add task:", error);
    }
  }
  async function deleteTask(id) {
    try {
      const response = await axios.delete(`/api/tasks/${id}`);
      setTasks((prev) => prev.filter((task) => task._id !== response.data.id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  const values = useMemo(()=>({isLoading, tasks, fetchTasks, deleteTask, addTask }),[isLoading,tasks]);
  return (
    <TaskContext.Provider value={values}>
      {children}
    </TaskContext.Provider>
  );
};
