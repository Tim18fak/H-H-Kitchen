import React, { useState } from 'react'
import './login.scss'

const AdminData = {
 username: '',
 email: '',
 password: ''
}

export default function Login() {
 const [form,setForm] =  useState(AdminData)
  const [hidePass,setState] =  useState(true)
 const getInput = (e) => {
  const {name,value} =  e.target
  setForm({...form,[name]: value})
 } 

 const adminSumbit = (e) => {
  e.preventDefault()
  const url = ''

 }
  return (
   <section className='HH__admin--register'>
      {/* <figure>

      </figure> */}
      <form className='HH__admin-form' onSubmit={adminSumbit}>
        {/* <h3>hhh</h3> */}
        <h1>H&H Kitchen</h1>
        <p>Drop your email to register and login</p>
      <div>
       <input type="text" onChange={getInput} placeholder='Username'/>
      </div>
      <div>
       <input type="text" onChange={getInput} placeholder='Email'/>
      </div>
      <div>
       <input type="password" onChange={getInput} placeholder='Password'/>
      </div>
      <button>SignIn</button>
    </form>
   </section>
  )
}
