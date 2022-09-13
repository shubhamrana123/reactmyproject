import React from 'react'
import Login from '../../component/Login'
import {useForm} from  'react-hook-form'
import { IUserInfo } from '../../types/user.types'
import CardView from '../../component/layout/Card'
const LoginView = () => {
const {register,handleSubmit,getValues,formState:{errors}} = useForm()
const onLoginHander = (userInfo:IUserInfo)=>{

}
  return (
    <CardView>
      <Login onLoginHandler={onLoginHander} errors={errors}  handleSubmit={handleSubmit} getValues={getValues} register={register}/>
    </CardView>
 
  )
}

export default LoginView