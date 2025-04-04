"use client"
import React, { useState } from 'react'

const page=()=>{
  const [title, settitle] = useState("");
  const [desc,setdesc]=useState("");
  const [mainTask,setMainTask]=useState([]);
  const submithandler=(e)=>
  {
    e.preventDefault()
    setMainTask([...mainTask,{title,desc}]);
    settitle("")
    setdesc("")
    console.log(mainTask);
  }
  const deleteHandler=(i)=>{
    let copytask=[...mainTask]
    copytask.splice(i,1);
    setMainTask(copytask);
  }
  let renderTask=<h2>No task available</h2>
  if(mainTask.length>0)
  {
    renderTask=mainTask.map((t,i)=>{
      return (
        <li key={i} className='flex items-center justify-between'>
          <div className="flex justify-between mb-5 w-2/3">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-lg font-medium">{t.desc}</h6>
          </div>
          <button onClick={()=>{deleteHandler(i)}} className='bg-red-400 text-white border-zinc-2 font-bold px-4 py-2 rounded' >Delete</button>
        </li>
      
      );
    });
  }
  return(
    <>
      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>Abhishek's Todolist</h1>
      <form  onSubmit={submithandler}>
          <input type="text" className='text-2xl border-zinc-80 border-2 m-5 px-4 py-2' placeholder="Enter the task here" value={title} onChange={(e)=>{
            settitle(e.target.value);
          }}/>
          <input type="text" className='text-2xl border-zinc-80 border-2 m-5 px-4 py-2' placeholder="Enter the description here" value={desc} onChange={(e)=>{
            setdesc(e.target.value);
            }}/>
          <button  className="bg-black text-white px-4 py-2 font-bold rounded text-2xl ">Add task</button>
      </form>
      <hr/>
      <div className="p-8 bg-slate-200">
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}
export default page;