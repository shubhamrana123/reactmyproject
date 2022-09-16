import { IUserInfo } from "./user.types"
export interface ILogin{
    onLoginHandler? : (userInfo:IUserInfo) => void
    register?:any,
    errors?:any,
    handleSubmit?:any,
    getValues?:any
}