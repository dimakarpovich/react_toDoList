import React, {useState} from "react";

export default function ToDoItem({ text, id, date, handleDelete }) {
  const [classActive, setClassActive] = useState(false);
  const clickHandler = ()=> {
    setClassActive(!classActive);
  }
  return (

    <li className={classActive ? 'list__item_active': 'list__item'}><input onClick={clickHandler} className="check" type="checkbox" /> <span className="id">{id} </span> {text} <span className="date">{date} </span>  <button onClick={handleDelete} className="delete">Delete</button></li>
  )
}
