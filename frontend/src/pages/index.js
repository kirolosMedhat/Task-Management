import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskList from "../Components/TaskList";
import TaskForm from "../Components/TaskForm";
import "../app/globals.css";

// Main page component for the task management application
const IndexPage = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  // Fetch tasks from the API on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  // Function to fetch tasks from the server
  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks", error);
    }
  };

  // Function to add a new task
  const addTask = async (task) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/tasks",
        task
      );
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error("Error adding task", error);
    }
  };

  // Function to update an existing task
  const updateTask = async (updatedTask) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/tasks/${currentTask._id}`,
        updatedTask
      );
      setTasks(
        tasks.map((task) =>
          task._id === currentTask._id ? response.data : task
        )
      );
      setCurrentTask(null);
    } catch (error) {
      console.error("Error updating task", error);
    }
  };

  // Function to delete a task
  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${taskId}`);
      setTasks(tasks.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error("Error deleting task", error);
    }
  };

  // Function to save a task (either add or update)
  const saveTask = (task) => {
    if (currentTask) {
      updateTask(task);
    } else {
      addTask(task);
    }
  };

  // Function to set the current task for editing
  const editTask = (task) => {
    setCurrentTask(task);
  };

  return (
    <div className="container mx-auto p-4 bg-white shadow-lg ">
      <div className="flex justify-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Task Management</h1>
      </div>
      <TaskForm currentTask={currentTask} onSave={saveTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onEdit={editTask} />
    </div>
  );
};

export default IndexPage;
