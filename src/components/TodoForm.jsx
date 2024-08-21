import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {

  const [value, setValue] = useState("")

  const handleSubmit = e => {

    e.preventDefault();
    addTodo(value);

    setValue("")

  }

  return (
    <div className='flex justify-center items-start mt-8'>
        <form onSubmit={handleSubmit}>
          <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type='text' value={value} placeholder='Enter task' onChange={(e) => setValue(e.target.value)}></input>
          <button class="ml-4 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800" type='text' value={value} placeholder='Enter task' onChange={(e) => setValue(e.target.value)}>
          <span class="px-10 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Add Task
          </span>
          </button>
        </form>
    </div>
  )
}

export default TodoForm