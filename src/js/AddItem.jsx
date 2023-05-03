import React, { useState } from "react";

export default function AddItem({ handleCreate }) {
  const [text, setText] = useState('');

  const handleClick = () => {
    if (!text) {
      return;
    }

    const toDo = { text, id: Date.now(), date: new Date().toLocaleDateString()};
    handleCreate(toDo);
    console.log(toDo);
    setText('');
  }
  return (

    <div className="input-group mb-3">
       <input className="form-control" value={text} onChange={(e) => setText(e.target.value)}  placeholder="Add task" />
        <button className="btn btn-primary" onClick={handleClick}>Add</button>
    </div>
  )
}
