// TasksPage.js
import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import { getTasks } from '../services/taskService';

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks for the logged-in user
    const fetchTasks = async () => {
      const fetchedTasks = await getTasks();
      setTasks(fetchedTasks);
    };

    fetchTasks();
  }, []);

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} />
      ))}
    </div>
  );
};

export default TasksPage;
