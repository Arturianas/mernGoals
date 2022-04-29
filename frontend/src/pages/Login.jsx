import React, { useEffect, useState } from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import {login, reset} from '../features/authSlice'
import Spinner from '../components/Spinner';


const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const {email, password} = formData;
  

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {user, isLoading, isError,isSuccess, message} = useSelector((state) => state.auth);


  useEffect(() => {
    if(isError) {
      toast.error(message)
    }

    if(isSuccess || user ){
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])
  
  
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  
  
  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password
    }
    dispatch(login(userData))
  };



  if(isLoading){
    return <Spinner/>
  }
  

  return (
    <div className='flex'>
      <div className='section'>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login and start setting goals</p>
      </div>
      <ToastContainer />
      <div className='form'>
        <form onSubmit={onSubmit}>
          

          <div className='form-group'>
              <input type='email'
                className='form-control'
                id='email'
                name='email'
                value={email}
                placeholder='Enter your email'
                onChange={onChange}
              />
          </div>

          <div className='form-group'>
              <input type='password'
                className='form-control'
                id='password'
                name='password'
                value={password}
                placeholder='Enter your password'
                onChange={onChange}
              />
          </div>


          <div className='form-group'>
              <button type='submit' className='btn btn-block'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login