import React, {useState} from "react";
import './App.css';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route} from "react-router-dom";
import About from "./components/About";

function App() {
  const [tasks, setTasks] = useState ([
    {
      id: 1,
      text:"Rest",
      day: "3rd March at 8:00am",
      reminder: true
  },
  {
      id: 2,
      text:"Watch the movie",
      day: "7th May at 11:00am",
      reminder: true
  },
  {
      id: 3,
      text:"Buy Cake and Eat Alone",
      day: "13th October at 4:00pm",
      reminder: false
  }]
  )

  // Add button
  const [showAddTask, setShowAddTask, ] = useState(false);


  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }


  // Toggle a task
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ?
    {...task, reminder: !task.reminder} : task))
  }

  // Delete each task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <Router>
    <div className= "container" >
      <Header title="Task Tracker" onAdd = {() => setShowAddTask(!showAddTask)} showAdd = {showAddTask} />
      <Route path="/" exact render={(props) => (
        <>
        {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ?(
      <Tasks tasks={tasks} onDelete={deleteTask}
      onToggle={toggleReminder}/>
      ) : ("No tasks to show.")}
        </>
      )}/>
      <Route path="/about" component={About} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
