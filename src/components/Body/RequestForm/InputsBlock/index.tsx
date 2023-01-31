import { useController, useForm, useFormContext } from "react-hook-form";
import { Input } from "../../../Input";
import { TCreateRequestSchema } from "../schema";


export interface IInputsBlockProps {
    
}
 
const InputsBlock: React.FC<IInputsBlockProps> = ({}) => {
  const { control, watch, formState } = useFormContext<TCreateRequestSchema>();
   
const nameInput = useController({name: 'name', control})
const emailInput = useController({name: 'email', control})
const phoneInput = useController({name: 'phone', control})

    return ( <div className="inputs-container">
    <Input placeholder="Your name"/>
    <Input placeholder="Email"/>
    <Input placeholder="Phone"/>
    </div> );
}
 
export default InputsBlock;