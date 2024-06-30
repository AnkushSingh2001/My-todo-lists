import React from 'react';
import './App.css'; // Import your CSS file for styling

import TaskInput from './components/TaskInput'; // Adjust the path based on your project structure
import TaskList from './components/TaskList'; // Adjust the path based on your project structure

function App() {
  return (
    <div className="App"> {/* Main container with 'App' class */}
      <h1>My To-Do List</h1> {/* Heading for the to-do list */}
      <TaskInput /> {/* TaskInput component for entering tasks */}
      <TaskList /> {/* TaskList component for displaying tasks */}
    </div>
  );
}

export default App;
