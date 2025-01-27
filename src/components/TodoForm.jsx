/* eslint-disable react/prop-types */

const TodoForm = ({ task, setTask, addTask })  => {
    return (
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button className="btn btn-primary" onClick={addTask}>
          Add
        </button>
      </div>
    );
  }

  export default TodoForm;