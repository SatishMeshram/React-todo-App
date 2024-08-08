import AddTodo from "./componants/AddTodo";
import AppName from "./componants/AppName";
import "./App.css";
import TodoItem from "./componants/TodoItem";
import TodoItems from "./componants/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./componants/WelcomeMessage";

function App() {
  // const initialTodoItems = [
  //   {
  //     name: "Buy milk",
  //     dueDate: "10/04/2024",
  //   },
  //   {
  //     name: "Go to College",
  //     dueDate: "10/04/2024",
  //   },
  //   {
  //     name: "Study DSA",
  //     dueDate: "Right Now",
  //   },
  // ];

  const [todoItems, setTodoItem] = useState([]);

  const handleOnNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItem(newTodoItems);
  };
  const handleOnDeleteClick = (todoName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoName);
    setTodoItem(newTodoItems);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleOnNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleOnDeleteClick}
      ></TodoItems>
    </center>
  );
}
export default App;
