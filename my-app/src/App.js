import logo from './logo.svg';
import React, { useState } from 'react';
import styled from 'styled-components';

import './App.css';
export default App;

const Appdiv = styled.div`
background-color: #f1f1f1;
color: #333;
font-family: sans-serif;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`
const DeleteButton = styled.button`
  background: none;
  border: none;
  margin-left: 30px;
  cursor: pointer;
  font-size: 0.5rem;
  margin-top: 20px;
  font-weight: bold;
  padding: 0;
  transition: color 0.2s;

  &:hover {
    color: darkred;
  }
`;


  function App() {
  


    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState("");
  
    function handleSubmit(event) {
      event.preventDefault();
      if (inputValue.trim() === "") return;
      setTasks([...tasks, inputValue.trim()]);
      setInputValue("");
    }
  
    function handleDelete(index) {
      setTasks(tasks.filter((_, i) => i !== index));
    }
  

  return (
    <Appdiv>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <DeleteButton onClick={() => handleDelete(index)}>Delete</DeleteButton>
        </li>
      ))}
    </ul>
  </Appdiv> 
  )}