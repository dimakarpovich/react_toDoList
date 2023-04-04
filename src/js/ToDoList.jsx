import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import AddItem from "./AddItem";



export default function toDoList() {
  const [todos, setTodos] = useState([]);

  const deleteTodoItem = (id) => {
    setTodos((prev) =>prev.filter((item) => item.id !==id))
    console.log(id);
  }
  return (
    <div className="wrapper">
      <h1>ToDoList</h1>
      <AddItem handleCreate={(toDo) => setTodos((prev)=> [...prev, toDo])}/>
      <ul className="list">
        {todos.map(({id, text}, index) =><ToDoItem handleDelete={()=>deleteTodoItem(id)} key={id} id ={index+1} text={text}/>)}
      </ul>

    </div>


  )
}
