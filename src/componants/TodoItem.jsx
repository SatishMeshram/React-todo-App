import { MdDelete } from "react-icons/md";

function TodoItem({ itemName, itemDate, onDeleteClick }) {
  return (
    <div className="container ">
      <div className="row kg-row">
        <div className="col-6">{itemName}</div>
        <div className="col-4">{itemDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => onDeleteClick(itemName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
