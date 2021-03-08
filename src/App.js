import React, {useState} from "react";
import './App.css';
import Header from "./components/Header";
import Tasks from "./components/Tasks";

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

  // Delete each task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className= "container" >
      <Header title="Task Tracker"/>
      {tasks.length > 0 ?(
      <Tasks tasks={tasks} onDelete={deleteTask}/>
      ) : ("No tasks to show.")
      
      }
    </div>
  );
}

export default App;
