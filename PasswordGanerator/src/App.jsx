/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useRef, useState } from "react"


function App() {
 const[length,setLength]=useState(8);
 const[numberAllowed,setNumberAllowed]=useState(false);
 const[characterAllowed,setCharacterAllowed]=useState(false);
 const[password,setPassword]=useState()

 // useRef hooks
 let passwordref=useRef(null)

 let passwordGenerator=useCallback(()=>{
  let pass="";
  let str="ABCDEFGHIJKLMNOPQUVXYZabcdefghijklmnopquvxyz";
  if(numberAllowed) str +="0123456789";
  if(characterAllowed) str += "@#%&*!~/|{}"

  // eslint-disable-next-line no-undef
  for(let i=1;i<=length;i++){
    let char= Math.floor(Math.random()*str.length+1)
    pass +=str.charAt(char)
  }

  setPassword(pass)
 }, [length,numberAllowed,characterAllowed])

 let copytoclipboard=useCallback(()=>{
  passwordref.current?.select()
  window.navigator.clipboard.writeText(password)
 },[password])

 useEffect(()=>{
  passwordGenerator();
 },[numberAllowed,length,characterAllowed,passwordGenerator])
  return (
    <>
    <div className=" w-full max-w-md mx-auto shadow-md text-orange-300 px-3 py-2 
     bg-zinc-600 my-8 flex flex-col align-center rounded-md ">
      <h2 className=" text-center text-3xl text-blue-50 mb-3 
      font-sansarif ">password generator</h2>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text" 
         value={password}
         readOnly
         ref={passwordref}
         placeholder="password"
         className=" outline-none w-full py-1 px-3 "/>
         <button className=" outline-none bg-blue-500
          text-white px-3 py-0.5 shrink-0 " 
          onClick={copytoclipboard()}>copy</button>
         </div>
         <div className="flex text-sm gap-x-4" >
          <div className="flex items-center gap-x-1">
            <input type="range"
              min={6} 
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e)=>{setLength(e.target.value)}}/>
              <label > Length:{length}</label>
            </div>
             <div className="flex items-center gap-x-1">
            <input type="checkbox"
            defaultChecked={numberAllowed} 
            id="numberInput"
            onChange={()=>{
              setNumberAllowed((prev)=>!prev);
            }}/>
            <label htmlFor="numberInput">Number</label>
            </div>
             <div className="flex items-center gap-x-1">
             <input type="checkbox"
            defaultChecked={characterAllowed} 
            id="characterInput"
            onChange={()=>{
              setCharacterAllowed((prev)=>!prev);
            }}/>
            <label htmlFor="characterInput">Character</label>
          </div>
         </div>
 
      </div>
    </>
  )
}

export default App
