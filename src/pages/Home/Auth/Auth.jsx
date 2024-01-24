import React, { useEffect, useState } from "react";
import "./auth.scss";

const loginForm = {
  username: '',
  email: '',
  password: ''
}

const SignINForm = {
  fullname: '',
  username: '',
  password: '',
  confirmPass: '',
  contact: '',
  address: '',
  email: '',
  }
  


export default function Auth({ overlay }) {
  const [signIn, setSignIn] = useState(false);

  const [login,setLoginForm] =  useState(loginForm)

  const [form,setForm] =  useState(SignINForm)

  const CloseModal = (e) => {
    e.stopPropagation()
    console.log(e.currentTarget.className)
    if(e.currentTarget.className === 'HH__close--modal'){
        overlay(false)
    }
  }
 
  const submitForm = (e) => {
    e.preventDefault()

    const url =  signIn ? '' : ''
    

  }
  return (
    <>
      <section className="HH__auth--form">
        <figure className={signIn ? "side--image": 'side--image2'} >
        <button className="HH__close--modal" onClick={CloseModal}>X</button>
        </figure>
        <form className={signIn? "HH__auth--form-main": "HH__auth--form-main2"} onSubmit={submitForm}>
          <h1 className={signIn ? 'HH__Com1' : 'HH__Com2'}>H&H Kitchen</h1>
          <a className="HH__close--modal" id='HH__mobile--closeModal' onClick={CloseModal}>X</a>
          <p id="subText">Drop your email to register and login</p>
          {signIn && <SignIn setSignIn={setSignIn} form={form} setForm={setForm} />}
          {!signIn && <Login setSignIn={setSignIn} login={login} setLoginForm={setLoginForm} />}
        </form>
      </section>
    </>
  );
}


const Login = ({setSignIn,login,setLoginForm}) => {
  const [hideState,setState] =  useState(true)

  // const hidePassword = () => {
  //   console.log(hideState)
  // }

  const getInput = (e) => {
    const {name,value} =  e.target;
    setLoginForm({...login,[name]: value})
    console.log(login)
  }

  return(
  <section className="HH__form">
    <div>
      <input type="text" placeholder="Username" name="username" onChange={getInput}/>
    </div>
    <div>
      <input type="text" placeholder="Email" name="email" onChange={getInput} />
    </div>
    <div>
      <input type={hideState ? 'password': 'text'} placeholder="Password" onChange={getInput} name="password"/>
      <span onClick={() => setState(!hideState)}>
      {hideState ? <i class="fa-solid fa-lock fa-beat"></i>: <i class="fa-solid fa-unlock"></i>}
      </span>
    </div>
    <button>Login</button>
    <p>Don't have an account, <a href="#" onClick={() =>setSignIn(true)}>Create one now</a></p>
  </section>)
  ;
};



const SignIn = ({setSignIn,form,setForm}) => {
  const [hideState,setState] =  useState(true)
  const [hideState1,setState1] =  useState(true)

  const [err,setErr] =  useState('')
  

  useEffect(function() {
    console.log(form)
    console.log(form.confirmPass,form.password)
    if(form.confirmPass !== form.password){
      setErr('invalid')
    }else{
      setErr('')
    }
    if(form.password.length< 8 && form.confirmPass.length < 8){}
  },[form.confirmPass,form.password])

// get user input from the browser

const getInput =(e)=> {
const {name,value} =  e.target
setForm({...form,[name]: value})
console.log(form)
}

  return(
    <section className="HH__form">
      <div>
      <input type="text" placeholder="Fullname" name="fullname" onChange={getInput} />
    </div>
    <div>
      <input type="text" placeholder="username" onChange={getInput}/>
    </div>
    <div>
      <input type="text" placeholder="Email" name="email" onChange={getInput}/>
    </div>
    <div>
      <input name="password" type={hideState ? 'password': 'text'} placeholder="Password" onChange={getInput} style={err === 'invalid'?{
        border:'1px solid red'
      } : {
        borderBottom: '2px solid black'
      }} />
      <span onClick={() => setState(!hideState)}>
      {hideState ? <i class="fa-solid fa-lock fa-beat"></i>: <i class="fa-solid fa-unlock"></i>}
      </span>
    </div>
    <div>
      <input name="confirmPass" type={hideState1 ? 'password': 'text'} placeholder="Confirm Password" onChange={getInput} style={err === 'invalid'?{
        border:'1px solid red'
      } : {
        borderBottom: '2px solid black'
      }}/>
      <span onClick={() => setState1(!hideState1)}>{hideState1 ? <i class="fa-solid fa-lock fa-beat"></i>: <i class="fa-solid fa-unlock"></i>}</span>
    </div>
    <div>
      <input type="number" placeholder="Phone Number" name='' onChange={getInput} />
    </div>
    <div>
      <input type="text" placeholder="Contact" name="contact" onChange={getInput}/>
    </div>
    <button disabled={err? true: false}>SignIN</button>
    <p>Already have an account, <a onClick={() => setSignIn(false)}>Sign in</a></p>
    </section>
  )
}
