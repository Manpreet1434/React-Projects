import './App.css';

import React, {useState} from 'react'
import AddTask from './Components/AddTask'
import TaskList from './Components/TasksList'

function App() {

  const [inputText, setInputText] = useState("");
  const [taskList, setTasks] = useState([]);

  return (
    <div className="Main">
      <header>
        <h1>To do List</h1>
      </header>

      <AddTask inputText={inputText} 
               setInputText={setInputText} 
               taskList={taskList}
               setTasks={setTasks}
      />
      <TaskList 
        taskList={taskList}
      />
    </div>
  );
}

export default App;
