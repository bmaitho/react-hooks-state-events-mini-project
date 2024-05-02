import React from "react";

function Task({category,text,index,display,setDisplay}) {
  function handleDelete(){
  console.log  (text)
    setDisplay(display.filter((item)=>(item.text.trim()!==text.trim())))
  }
  return (
    <div className="task">
      <div className="label">CATEGORY HERE</div>
      <div className="text">TEXT HERE</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
