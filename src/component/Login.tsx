import React from 'react'
import Input from './layout/form-controls/Input'
import { useForm } from 'react-hook-form'
import { IUserInfo } from '../types/user.types'
import { ILogin } from '../types/login.types'
const Login = (props: ILogin) => {
  console.log(props.register);
  
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onLoginHandler = () => {
    const userDetails: IUserInfo = {
      email: props.getValues('email'),
      password: props.getValues('password')
    }
  }
  return (
    <>
      <div className='login-dialog'>
        <div className="innerLeftContainer">
          <p>Login</p>
          <p>Get access to your Orders, Wishlist and Recommendations</p>
        </div>
        <div className="innerRightContainer">

        <form onSubmit={handleSubmit(onLoginHandler)}>
          <Input controller='email' label='' placeholder='Enter Email' type='email' register={register} errors={props.errors} fields={{ required: true, minLength: 2, maxLength: 20, }} />
          {props?.errors?.email && <p>please enter value</p>}
          <Input controller='password' label='' placeholder='Enter Password' type='password' register={register} errors={errors} fields={{ required: true, minLength: 2, maxLength: 20, }} />
          {props?.errors?.password && <p>please enter value</p>}
          <p>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
          <button className='btn btn-primary'>Login</button>
        </form>
        </div>

      </div>
    </>
  )
}

export default Login