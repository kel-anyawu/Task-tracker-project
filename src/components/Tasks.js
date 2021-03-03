import React from 'react';

const Tasks = () => {

    const tasks = [
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
        }
    ]

    return (
        <div>
         {tasks.map((task) => (
             <h3 key={task.id}>{task.text}</h3>
         ))}   
        </div>
    )
}

export default Tasks
