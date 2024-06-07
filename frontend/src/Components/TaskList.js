import React from "react";
import Task from "../Components/Task.js";

// TaskList component renders a list of Task components
const TaskList = ({ tasks, onDelete, onEdit }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task._id} task={task} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default TaskList;
