import { useState } from "react";

export interface IInputProps {
  placeholder?: string
}
export const Input:React.FC<IInputProps>  =({placeholder = 'Placeholder'}) => {
  const [InputValue, setInputValue] = useState('')
    return ( <div className="input-container">
  <input
    type="text"
    id="input"
    name="input"
    value={InputValue}
    aria-labelledby="label-input"
    autoComplete='off'
    onChange={(event)=>setInputValue(event.target.value)}
  />
  <label className="label" htmlFor="input" id="label-input">
    <div className="text">{placeholder}</div>
  </label>
</div> );
}


