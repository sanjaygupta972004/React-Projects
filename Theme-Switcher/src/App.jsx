import { useEffect, useState } from "react"
import Card from "./Components/Card"
import ThemeBtn from "./Components/ThemeBtn"
import { ThemeProvider } from "./Context/theme"


function App() {
  const[themeMode,setThemeMode]=useState("light");
  
  const lightTheme=()=>{
    setThemeMode("light")
  }

  const darkTheme=()=>{
    setThemeMode("dark")
    }

//do you want to actual change
useEffect(()=>{
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(themeMode)
},[themeMode])

  return (

  <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
   
  <div className="flex flex-wrap min-h-screen items-center ">
                <div className="w-full">
                <h2 className=" text-3xl text-center bg-cyan-600
                 text-black w-80 ml-16 py-4 rounded-lg mt-5 dark:bg-black dark:text-white">Theme-Switcher</h2>
                    <div className="w-full max-w-xl mx-auto flex justify-end mb-20">
                        <ThemeBtn/>
                    </div>
                      
                    <div className="w-full max-w-lg mx-auto">
                    <Card/>
                    </div>
                </div>
            </div>
  </ThemeProvider>
  )
}

export default App
