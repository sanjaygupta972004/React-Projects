/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useId } from 'react'

const Inputbox = ({
  label,
  Amount,
  onChangeAmount,
  onChangeCurrency,
  SelectCurrency="usd",
  CurrencyOptions=[],
  AmountDisable=false,
  CurrencyDisable=false,
  className="",}) => {

    const amountId=useId();
   
    console.log(CurrencyOptions)

  return (
    <>
   <div className={` bg-white p-3 rounded-lg text-sm flex 
     ${className}`}>
     <div className=' w-1/2'>
     <label htmlFor={amountId} className=' text-black/80 mb-2 inline-block
     '>{label}</label>
     <input type="number"
      id={amountId}
      className='outline-none w-full bg-transparent py-1.5'
      placeholder='Amount'
      value={Amount} 
      disabled={AmountDisable}
      onChange={(e)=>onChangeAmount&&onChangeAmount(Number(e.target.value))}/>  
       </div>
      <div className=' w-1/2 flex flex-wrap 
       justify-end text-right'>
       <p className=' w-full text-black mb-2'>Currency_Type</p>
       <select
        className=' rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none '
        value={SelectCurrency}
        disabled={CurrencyDisable}
        onChange={(e)=>onChangeCurrency&&onChangeCurrency(e.target.value)}>
          { CurrencyOptions.map((currency) =>(
            <option value={currency}
            key={currency}> {currency} </option>
          )
            
        )}
        </select>
       </div>
  
    </div>
    </>
  )
          
         
}

export default Inputbox