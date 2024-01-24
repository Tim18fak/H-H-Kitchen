import React, { useState } from 'react'
import './login.scss'

const AdminData = {
 username: '',
 email: '',
 password: ''
}

export default function Login() {
 const [form,setForm] =  useState(AdminData)

 const getInput = (e) => {
  const {name,value} =  e.target
  setForm({...form,[name]: value})
 } 
  return (
   <section className='HH__admin--register'>
      <form className='HH__admin-form'>
      <div>
       <input type="text" onChange={getInput}/>
      </div>
      <div>
       <input type="text" onChange={getInput} />
      </div>
      <div>
       <input type="password" onChange={getInput} />
      </div>
    </form>
   </section>
  )
}
