import React from 'react'
import Login from '../../component/Login'
import {useForm} from  'react-hook-form'
import { IUserInfo } from '../../types/user.types'
const LoginView = () => {
const {register,handleSubmit,getValues,formState:{errors}} = useForm()
const onLoginHander = (userInfo:IUserInfo)=>{

}
  return (
 <Login onLoginHandler={onLoginHander} errors={errors}  handleSubmit={handleSubmit} getValues={getValues} register={register}/>
  )
}

export default LoginView