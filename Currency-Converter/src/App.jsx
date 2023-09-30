/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { useState } from "react"
import { Inputbox } from "./Components";
import CurrencyInfo from "./Hooks/CurrencyInfo"

function App() {
 const[amount,setAmount]=useState();
 const[from,setFrom]=useState("usd");
 const[to,setTo]=useState("inr");
 const[convertedAmount,setConvertedAmount]=useState(0)
  
 const currencyInfo=CurrencyInfo(from)



  let Option= Object.keys(currencyInfo)

 let convert= ()=>{
  setConvertedAmount(amount*currencyInfo[to])
 }

 const BackgroundImage= "https://images.pexels.com/photos/683940/pexels-photo-683940.jpeg"
 const swap=()=>{
  setFrom(to)
  setTo(from)
  setAmount(convertedAmount)
  setConvertedAmount(amount )
 }
 return ( 

<>
<div className=" w-full h-screen flex flex-wrap justify-center items-center 
 bg-cover bg-no-repeat "
 style={{backgroundImage:`url(${BackgroundImage})`}}>

  <div className=" w-full" >
    <div className=" w-full max-w-lg mx-auto border border-gray-110 
      rounded-lg p-4 backdrop-blur-sm  bg-white/50  ">
        <form 
            onSubmit={(e)=>{
            e.preventDefault() 
             convert()
        }}>
          <div className=" w-full mb-1 ">
            <Inputbox 
                Amount={amount}
                CurrencyOptions ={Option}
                label="From"
                onChangeCurrency={(currency)=>setFrom(currency)}
                SelectCurrency={from}
                onChangeAmount={(amount)=>setAmount(amount)}
             />
          </div>
          <div className=" relative w-full h-1">
            <button type="submit"
              className=" absolute left-1/2  -translate-y-1/2 
                border-2 border-white rounded-lg  bg-blue-700 text-white  px-[3px] h-8"
                 onClick={swap}>Swap 
             </button>
          </div>
          <div className="w-full mt-2 mb-4 " >
            <Inputbox
               Amount={convertedAmount}
               CurrencyOptions ={Option}
               onChangeCurrency={(currency)=>setTo(currency)}  
               label="To" 
               SelectCurrency={to}
               AmountDisable ={true} 
                />
          </div>
          <div>
            <button type="submit" 
             className=" w-full bg-blue-600 text-white  p-[3px] rounded-lg h-7 ">
              Convert  {from.toUpperCase()} To {to.toUpperCase()}
            </button>
          </div>
        </form>
      </div>
  </div>
 </div>
</>

  )
}

export default App
