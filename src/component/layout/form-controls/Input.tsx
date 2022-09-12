import { IInputProps } from "../../../types/common.types"
import { useForm } from "react-hook-form";
const Input = (props:IInputProps) =>{
    const fields = props.fields;
    const {register,handleSubmit, formState:{errors}} =  useForm()
return (
    <>
    <div className="container">
        <label>{props.label}</label> <br/>
        <input className="form-control" type={props.type} {...props.register(props.controller)} /> <br />
    </div>
    </>
)

}
export default Input