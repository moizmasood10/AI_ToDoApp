import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import AI from './AI';
import { v4 as uuidv4 } from 'uuid';

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newTask) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: newTask } : todo
      )
    );
  };

  const tasks = todos.map((todo) => todo.task);

  return (
    <div className="flex min-h-screen">
      {/* Left Side (Todo Part) */}
      <div className="flex flex-col items-center w-1/2 p-4">
        <div className="">
          <h1 className="mt-4 text-2xl font-extrabold text-white dark:text-white md:text-4xl lg:text-5xl">
            Prioritize your tasks
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-pink-500 from-purple-700">
              {' '}
              Using AI
            </span>
          </h1>
          <TodoForm addTodo={addTodo} />
          {/* Todo List Container with Fixed Height and Scroll */}
          <div className="mt-6 w-full max-w-md h-max overflow-y-auto custom-scrollbar">
            {todos.map((todo) => (
              <Todo
                key={todo.id}
                task={todo}
                toggleCompleted={toggleCompleted}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-0.5 bg-white"></div>

      {/* Right Side (AI Part) */}
      <div className="mt-4 flex flex-col items-center w-1/2 p-4">
        <AI tasks={tasks} />
      </div>
    </div>
  );
};

export default TodoWrapper;
