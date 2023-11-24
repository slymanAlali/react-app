import axios from 'axios'
import React, { useState } from 'react'
import { LOGIN, baseUrl } from '../Api/Api'

function Login() {
    const [form, setForm] = useState({
        email: "",
        password: "",

    })
    function handleChange(e) {
       // e.preventDefault()
        setForm({...form, [e.target.name]: e.target.value})
    }

async function handleSubmit(e) {
        e.preventDefault();
        try {
        await axios.post(`${baseUrl}/${LOGIN}`, form)
            console.log('succes');
        } catch(err) {
            console.log('error');
        }
    }
    
  return (
    <>
        <div className='container'>
        <div className='row h-100'>
        <form className='form-one' onSubmit={handleSubmit}>
    <div className='custom-form'>
    <h1>Login</h1>
      {/* <div className='form-control'>  
    
     <input 
    type='text'
    name='name'
    value={form.name}
    onChange={handleChange}
    id='name'
    placeholder='enter your name...'
    required ></input>
    <label htmlFor='name' >Name</label> 
    </div>  */}

    <div className='form-control'>
    
    <input 
    type='email'
    value={form.email}
    name='email'
    onChange={handleChange}
    id='email'
    placeholder='enter your name...'
    required ></input>
    <label htmlFor='email'>Email</label>
    </div>

    <div className='form-control'>
    
    <input 
    type='password'
    name='password'
    value={form.password}
    onChange={handleChange}
    id='password'
    placeholder='enter your password...'
    minLength="6"
    required ></input>
    {/* <label htmlFor='password'>Password</label> */}
    </div>
    <label htmlFor='password'>Password</label>
    <button className='button'>Submit</button>
    
    </div>
    </form>
    </div>
    </div>
    </>
  )
} 

export default Login