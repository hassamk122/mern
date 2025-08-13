import express from "express";
import Task from "../models/task.js";

const router = express.Router();

router.get("/tasks", async (request, response) => {
  try {
    const tasks = await Task.find({});
    return response.status(200).json(tasks);
  } catch (error) {
    console.error("GET /tasks error:", error.message);
    return res.status(500).json({ message: "Could not get tasks" });
  }
});

router.post("/createtask", async (request, response) => {
  try {
    const { title, description, dueDate } = request.body;

    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Title and description are required" });
    }

    const task = await Task.create({ title, description, dueDate });

    return response.status(201).json(task);
  } catch (error) {
    return response.status(400).json({
      error: "Something went wrong",
      message: "Could not create task",
    });
  }
});
router.delete("/tasks/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const deleted = await Task.deleteOne({ _id: id });

    if (deleted.deletedCount === 0) {
      return response.status(404).json({ message: "Task not found" });
    }

    return response.status(200).json({ id });
    
  } catch (error) {
    console.error("DELETE /tasks/:id error:", error.message);
    return response.status(500).json({ message: "Could not delete task" });
  }
});

router.put("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, dueDate, status } = req.body; 
    const updateResult = await Task.updateOne(
      { _id: id },
      {
        $set: {
          title,
          description,
          dueDate,
          status,
        }
      }
    );

    if (updateResult.matchedCount === 0) {
      return res.status(404).json({ message: "Task not found" });
    }
    const updatedTask = await Task.findById(id);
    return res.status(200).json(updatedTask);
  } catch (error) {
    console.error("UPDATE /tasks/:id error:", error.message);
    return res.status(500).json({ message: "Could not update task" });
  }
});

export default router;
