import { useState } from "react"

function App() {
  // eslint-disable-next-line no-unused-vars
  let[color,setColor]=useState('orange')

  return (
    <>
   <div className=" h-screen w-full duration-150" style={{backgroundColor:color}}>
    <div className=" fixed flex flex-wrap justify-center
   bottom-10 px-3 inset-x-0 bg-fuchsia-600 gap-5 ">
    <div className="flex justify-center flex-wrap
     bg-white shadow-lg p-2 rounded-lg ">
      <button className= " rounded-full outline-none text-white px-3 py-1" style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red
      </button></div>
      <div className="flex justify-center flex-wrap gap-3
     bg-white shadow-lg p-2 rounded-lg ">
      <button className=" rounded-full outline-none text-white px-3 py-1" style={{backgroundColor:"Green"}} onClick={()=>setColor("green")}>Green
      </button></div>
      <div className="flex justify-center flex-wrap gap-3
     bg-white shadow-lg p-2 rounded-lg ">
      <button className=" rounded-full outline-none text-white px-3 py-1" style={{backgroundColor:"blue"}}  onClick={()=>setColor("blue")}>blue
      </button></div>-
      <div className="flex justify-center flex-wrap gap-3
     bg-white shadow-lg p-2 rounded-lg ">
      <button className=" rounded-full outline-none text-white px-3 py-1 font-serif" style={{backgroundColor:"black"}}  onClick={()=>setColor("black")}>black
      </button></div>
      <div className="flex justify-center flex-wrap gap-3
     bg-white shadow-lg p-2 rounded-lg ">
      <button className=" rounded-full outline-none text-black px-3 py-1 font-serif" style={{backgroundColor:"yellow"}}  onClick={()=>setColor("yellow")}>yellow
      </button></div>
   </div>
   </div>
    </>
  )
}

export default App
