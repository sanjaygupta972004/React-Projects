
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
 

  return (
    <>
    <div className=' min-h-screen min-w-fit border-2 bg-fuchsia-300  rounded-lg px-10' >
      <h2 className=' my-10 py-1 px-3 rounded-sm  text-black bg-cyan-50 w-fit 
         font-medium  text-xl'>Add Todo App With Redux-Toolkit</h2>
      <AddTodo/>
      <Todos/>
      </div>
    </>
  )
}

export default App
