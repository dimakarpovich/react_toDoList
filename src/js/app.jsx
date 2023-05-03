import React  from 'react';
import { createRoot } from 'react-dom/client';
import ToDoList from "./ToDoList";


const root = createRoot(document.getElementById('app'));


 root.render(<ToDoList />)

