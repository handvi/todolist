/* eslint-disable react/prop-types */
import TodoItem from './TodoItem';

const TodoList = ({ tasks, toggleTask, removeTask }) => {
  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          removeTask={removeTask}
        />
      ))}
      {tasks.length === 0 && (
        <p className="text-center mt-3 text-muted">No tasks added yet.</p>
      )}
    </ul>
  );
}

export default TodoList;