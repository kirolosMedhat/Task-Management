import React, { useState, useEffect } from "react";
import "../app/globals.css";

// TaskForm component handles creating and updating tasks
const TaskForm = ({ currentTask, onSave }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // useEffect hook to update form fields when currentTask changes
  useEffect(() => {
    if (currentTask) {
      setTitle(currentTask.title);
      setDescription(currentTask.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [currentTask]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, description });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-6 mb-6"
    >
      <div className="mb-6">
        <label
          className="block text-gray-800 text-sm font-semibold mb-2"
          htmlFor="title"
        >
          Title:
        </label>
        <input
          id="title"
          type="text"
          className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-800 text-sm font-semibold mb-2"
          htmlFor="description"
        >
          Description:
        </label>
        <textarea
          id="description"
          className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add New
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
