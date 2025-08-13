import React, { useState ,useContext, useCallback} from "react";
import { TaskContext } from "../contexts/TaskContext";
import '../styles/dialog.css';
function CreateTask() {
     const { addTask } = useContext(TaskContext);
  const [showdialog, setShowDialog] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
   const today =useCallback(()=> new Date().toISOString().split("T")[0]); 
  const [dueDate, setDueDate] = useState(today);


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
      dueDate,
    });
    setTitle("");
    setDescription("");
    setDueDate(today);
    handleCloseDialog();
  }

  return (
    <>
      <button onClick={handleOpenDialog} className="create-btn">+ Add new Task</button>
      {showdialog && (
        <dialog className="dialog-container" open>
          <form onSubmit={handleSubmitForm}>
            <div className="input-div">
            <label htmlFor="title">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="title"
              placeholder="Enter Title ..."
              required
            ></input>
            <label htmlFor="description">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="description"
              placeholder="Enter description ..."
              required
            ></textarea>
             <label htmlFor="">Due on:</label>
             <input
              id="dueDate"
              type="date"
              name="trip-start"
              value={dueDate}
              min={today()}
              onChange={(e) => setDueDate(e.target.value)}
            />
            </div>
            <div className="dialog-btns-div">
              <button className="dialog-cancel" onClick={handleCloseDialog}>cancel</button>
            <button className="dialog-submit" type="submit">Add Task</button>
            </div>
          </form>   
        </dialog>
      )}
    </>
  );
}

export default CreateTask;


