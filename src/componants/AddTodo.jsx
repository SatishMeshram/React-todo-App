import { useRef } from "react";
import styles from "./AddTodo.module.css";
import { IoMdAddCircleOutline } from "react-icons/io";

function AddTodo({ onNewItem }) {
  // const [todoName, setTodoName] = useState("");
  // const [todoDueDate, setTodoDueDate] = useState("");
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleName = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpdates.current += 1;
  // };
  // const handleDate = (event) => {
  //   setTodoDueDate(event.target.value);
  //   console.log(`no of updates is:${noOfUpdates.current}`);
  // };

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";

    onNewItem(todoName, todoDueDate);
    // setTodoDueDate("");
    // setTodoName("");
  };
  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClick}>
        <div className="col-6">
          <input
            ref={todoNameElement}
            className={styles.todoInput}
            type="text"
            // value={todoName}
            placeholder="Enter todo here"
            // onChange={handleName}
          />
        </div>
        <div className="col-4">
          <input
            ref={dueDateElement}
            className={styles.todoInput}
            type="date"
          />
        </div>
        <div className="col-2 col-width">
          <button className="btn btn-success kg-button ">
            <IoMdAddCircleOutline />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
