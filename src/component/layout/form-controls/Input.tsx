import { IInputProps } from "../../../types/common.types"
import { useForm } from "react-hook-form";
const Input = (props:IInputProps) =>{
    const fields = props.fields;
    const {register,handleSubmit, formState:{errors}} =  useForm()
return (
    <>
    <div className="container">
        <label>{props.label}</label> <br/>
        <input className="form-control" type={props.type} placeholder={props.placeholder} {...props?.register(props.controller,{ required: fields.required, minLength: fields.minLength, maxLength: fields.maxLength })} /> <br />
    </div>
    </>
)

}
export default Input