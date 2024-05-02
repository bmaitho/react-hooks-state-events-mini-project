import React, { useState } from "react";
import Task from "./Task"

function TaskList({Tasks,display,setDisplay}) {
  const lister= display.map((task,index)=>(
  <Task 
  category={task.category} 
  text={task.text} 
  key={index} 
  index={index}
  display={display}
  setDisplay={setDisplay}
  />))
  
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {lister}
    </div>
  );
}

export default TaskList;