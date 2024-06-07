// components/Task.js
import React from "react";
import "../app/globals.css";

// Task component renders individual task details and action buttons
const Task = ({ task, onDelete, onEdit }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex justify-between items-center">
      <div>
        <h3 className="text-lg font-bold text-black">{task.title}</h3>
        <p className="text-sm text-black">{task.description}</p>
        <p
          className={`text-sm font-semibold ${
            task.completed ? "text-green-500" : "text-red-500"
          }`}
        >
          {task.completed ? "Completed" : "Not Completed"}
        </p>
      </div>
      <div>
        <button
          onClick={() => onEdit(task)}
          className="bg-blue-500 text-white py-1 px-2 rounded mr-2"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task._id)}
          className="bg-red-500 text-white py-1 px-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
