import React, {useState, useEffect } from 'react';

import axios from 'axios';

const AI = ({ tasks }) => {
  // UseEffect hook to log the tasks to the console when the component mounts or when tasks change
  useEffect(() => {
    console.log("All tasks:", tasks);
  }, [tasks]); // Depend on tasks so that useEffect is triggered whenever tasks change

  const prompt = "I want you to order these tasks for me on what you think is right. Assume everything yourself don't ask me anything. Also, keep it short and concise. These are the tasks: "
  const [answer, setAnswer] = useState("");

  async function generateAnswer(){
    setAnswer("loading..");
    const response = await axios ({
      url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + import.meta.env.VITE_REACT_APP_GEMINI_API_KEY,
      method: "post",
      data: {"contents":[{"parts":[{"text": prompt + tasks }]}]}
    })
    setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text'])
  }

  return (
    <div className='flex justify-center items-start mt-24'>
        <div className="flex flex-col items-center">
        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-pink-500 from-purple-700"> Order your tasks
        </span>
        </h1>

    <button onClick={generateAnswer} class="mt-4 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
    <span class="relative px-20 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
    Sort
    </span>
    </button>
    {answer.split('\n').map((line, index) => (
        <p key={index} className='font-mono font-semibold mt-2'>{line}</p>
      ))}
  </div>
</div>
  );
};

export default AI;
