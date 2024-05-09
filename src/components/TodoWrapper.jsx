import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import AI from './AI';
import { v4 as uuidv4 } from 'uuid';

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
  };

  const toggleCompleted = id => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newTask) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, task: newTask } : todo
    ));
  };

  const tasks = todos.map(todo => todo.task);


  return (
    <div>
        <div className='flex justify-center items-start'>
      <div>
      <h1 class="mt-8 mb-8 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        Prioritize your tasks<span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> Using AI
        </span>
        </h1>
      <TodoForm addTodo={addTodo} />
      {todos.map(todo => (
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
    <div className='flex justify-center items-center'>
    <AI tasks={tasks} />
    </div>
    </div>
  );
};

export default TodoWrapper;
