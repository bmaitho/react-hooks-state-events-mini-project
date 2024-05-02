import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const {display,setDisplay}=useState(TASKS);
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter Categories={CATEGORIES }setDisplay={setDisplay} display={display}/>
      <NewTaskForm />
      <TaskList Tasks={TASKS} display={display}setDisplay={setDisplay}     />
    </div>
  );
}

export default App;
