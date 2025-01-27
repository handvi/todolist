/* eslint-disable react/prop-types */

const TodoItem = ({ task, toggleTask, removeTask }) => {
    return (
        <li
        className={`list-group-item d-flex justify-content-between align-items-center ${
          task.completed ? "list-group-item-success" : ""
        }`}
      >
        <span
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
        >
          {task.text}
        </span>
        <div>
          <button
            className={`btn btn-${task.completed ? "secondary" : "success"} btn-sm me-2`}
            onClick={() => toggleTask(task.id)}
          >
            {task.completed ? "Unmark" : "Complete"}
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => removeTask(task.id)}
          >
            Delete
          </button>
        </div>
      </li>
    );
  }

  export default TodoItem;