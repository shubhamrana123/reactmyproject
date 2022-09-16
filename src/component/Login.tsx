import React from 'react'
import Input from './layout/form-controls/Input'
import { useForm } from 'react-hook-form'
import { IUserInfo } from '../types/user.types'
import { ILogin } from '../types/login.types'
const Login = (props: ILogin) => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onLoginHandler = () => {
    const userDetails: IUserInfo = {
      email: props.getValues('email'),
      password: props.getValues('password')
    }
  }
  return (
    <>
    <div className='container'>
      <form onSubmit={handleSubmit(onLoginHandler)}>
        <Input controller='email' label='Email' type='email' register={register} errors={errors} fields={{ required: true, minLength: 2, maxLength: 20, }} />
        {errors && <p>please enter value</p>}
        <Input controller='password' label='Password' type='password' register={register} errors={errors} fields={{ required: true, minLength: 2, maxLength: 20, }} />
        {errors && <p>please enter value</p>}
        <button className='btn btn-primary'>Login</button>
      </form>
      </div>
    </>
  )
}

export default Login