import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import EditToDoForm from './EditTodoForm';

const Todo = ({ task, toggleCompleted, deleteTodo, editTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task.task);
  
    const handleClick = () => {
      toggleCompleted(task.id); // Pass the id of the todo item to toggle its completion status
    };
  
    const handleDeleteTodo = () => {
      deleteTodo(task.id); // Pass the id of the todo item to delete it
    };
  
    const handleEditTodo = () => {
      setIsEditing(true);
    };
  
    const handleSaveEdit = () => {
      editTodo(task.id, editedTask); // Pass the id and edited task content to editTodo function
      setIsEditing(false);
    };
  
    const handleCancelEdit = () => {
      setIsEditing(false);
      setEditedTask(task.task);
    };
  
    const handleChange = e => {
      setEditedTask(e.target.value);
    };
  
    return (
      <div className='flex justify-left'>
        {!isEditing ? (
          <div className='pb-2'>
            <p className='font-mono' onClick={handleClick} style={{ cursor: 'pointer', textDecoration: task.completed ? 'line-through' : 'none' }}>{task.task}</p>
            <div>
              <FontAwesomeIcon icon={faPenToSquare} onClick={handleEditTodo} style={{ marginRight: '8px', cursor: 'pointer' }} />
              <FontAwesomeIcon onClick={handleDeleteTodo} style={{ cursor: 'pointer' }} icon={faTrash} />
            </div>
          </div>
        ) : (
          <div>
            <EditToDoForm
              task={editedTask}
              handleChange={handleChange}
              handleSaveEdit={handleSaveEdit}
              handleCancelEdit={handleCancelEdit}
            />
          </div>
        )}
      </div>
    );
  };
  
  export default Todo;