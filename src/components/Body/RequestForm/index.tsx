import { FormProvider, useForm } from "react-hook-form";
import InputsBlock from "./InputsBlock";
import { TCreateRequestSchema } from "./schema";

export interface IRequestFormProps {
    
}
 
const RequestForm: React.FC<IRequestFormProps> = ({}) => {
    const formMethods = useForm<TCreateRequestSchema>()
    return ( <FormProvider {...formMethods}>
        <InputsBlock/>
    </FormProvider>);
}
 
export default RequestForm;