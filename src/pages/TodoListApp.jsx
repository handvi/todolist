import { useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

const TodoListApp = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");
  
    const addTask = () => {
      if (task.trim() !== "") {
        const newTask = { id: Date.now(), text: task, completed: false };
        setTasks([...tasks, newTask]);
        setTask("");
      }
    };
  
    const toggleTask = (id) => {
      setTasks(
        tasks.map((t) =>
          t.id === id ? { ...t, completed: !t.completed } : t
        )
      );
    };
  
    const removeTask = (id) => {
      setTasks(tasks.filter((t) => t.id !== id));
    };
  
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <h1 className="card-title text-center mb-4">Todo List</h1>
                <TodoForm task={task} setTask={setTask} addTask={addTask} />
                <TodoList tasks={tasks} toggleTask={toggleTask} removeTask={removeTask} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default TodoListApp;