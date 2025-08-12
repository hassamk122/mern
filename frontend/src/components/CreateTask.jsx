import React, { useState ,useContext} from "react";
import { TaskContext } from "../contexts/TaskContext";
import '../styles/dialog.css';
function CreateTask() {
     const { addTask } = useContext(TaskContext);
  const [showdialog, setShowDialog] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("low");


  function handleOpenDialog() {
    setShowDialog(true);
  }
  function handleCloseDialog() {
    setShowDialog(false);
  }
  async function handleSubmitForm(e) {
    e.preventDefault();


    await addTask({
      title,
      description,
      priority,
    });
    setTitle("");
    setDescription("");
    setPriority("low");
  }

  return (
    <>
      <button onClick={handleOpenDialog} className="create-btn">+ Add new Task</button>
      {showdialog && (
        <dialog className="dialog-container" open>
          <form onSubmit={handleSubmitForm}>
            <label htmlFor="title">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="title"
              placeholder="Enter Title ..."
              required
            ></input>
            <label htmlFor="description">Description</label>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="description"
              placeholder="Enter description ..."
              required
            ></input>
            <label htmlFor="priority">Priority</label>
            <select
              id="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              required
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            <div className="dialog-btns-div">
            <button className="dialog-submit" type="submit">Add Task</button>
            <button className="dialog-close" onClick={handleCloseDialog}>close</button>
            </div>
          </form>
          
        </dialog>
      )}
    </>
  );
}

export default CreateTask;
