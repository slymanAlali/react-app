 import axios from 'axios'
import React, { useState } from 'react'
import { baseUrl } from '../Api/Api'
import Loading from '../loading/Loading'

function Register() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",

    })

    const [loading, setLoading] = useState(true)
    function handleChange(e) {
       // e.preventDefault()
        setForm({...form, [e.target.name]: e.target.value})
    }

async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true)
        try {
        await axios.post(`${baseUrl}/${Register}`, form)
        window.location.pathname = "./";
            // console.log('succes');
        } catch(err) {
            // console.log('error');
        // if (e)
        }

    }
    
  return (
    <>
    {/* {loading && <Loading />} */}
    <div className='container'>
        <div className='row h-100'>
        <form className='form' onSubmit={handleSubmit}>
    <div className='custom-form'>
    <h1>Register Now</h1>
    <div className='form-control'>  
    
    <input 
    type='text'
    name='name'
    value={form.name}
    onChange={handleChange}
    id='name'
    placeholder='enter your name...'
    required ></input>
    <label htmlFor='name' >Name</label>
    </div>

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
    <label htmlFor='password'>Password</label>
    </div>
    <button className='button-button'>Submit</button>
    </div>
    </form>
    </div>
    </div>
    </>
  )
  
} 

export default Register