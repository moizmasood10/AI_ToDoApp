import React from 'react';

const EditToDoForm = ({ task, handleChange, handleSaveEdit, handleCancelEdit }) => {
  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleSaveEdit();
    }
  };

  return (
    <div>
      <input type="text" value={task} onChange={handleChange} onKeyPress={handleKeyPress} />
      <button onClick={handleSaveEdit}>Save</button>
      <button onClick={handleCancelEdit}>Cancel</button>
    </div>
  );
};

export default EditToDoForm;
