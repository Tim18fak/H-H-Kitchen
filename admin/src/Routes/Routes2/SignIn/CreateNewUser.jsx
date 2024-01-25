import React, { useState } from 'react'
import './createUser.scss'
import PageRoute from '../../../components/pageRoute/PageRoute'
import Notification from '../../../components/notification/Notification'

const urls = {
  chef: '',
  receptionist: '',
}

const state = {
  createAcc : false,
  acctivationCodeState:false 
}
export default function CreateNewUser () {
  const [ ] = useState(urls)
  const [createUser,setCreateUser] =  useState(state);
 


  const changeState = () => {
    setCreateUser({...createUser,createAcc: true})
  }
  return (
    <section className='HH__signIn'>
      <nav>
        <PageRoute currentRoute={'SignIn'}/>
        <Notification/>
      </nav>
      <h2>Welcome Admin</h2>
      <p>Would you like to create a new staff of your company</p>
      <div>
        <button onClick={changeState}>Yes</button>
      </div>
      {createUser.createAcc && (
        <NewUserForm state={''}/>
        
      )}
      {createUser.acctivationCodeState && (
        <ActivateAccount state={''}/>
      )}
    </section>
  )
}

// const 

const ActivateAccount = ({}) => {

  return(
    <form className='HH__admin--activationcode'>
      <div>
        <input type="text" name="" id=""  placeholder='ActivationCode'/>
      </div>
      <button>Validate</button>
    </form>
  )
}

const NewUserForm = ({}) => {
  const [userRoles,setRoles] =  useState('')

  const getRoles = (roles) => {
    console.log(roles)
    setRoles(roles)
  }
  return(
    <form>
      <div>
        <input type="text" />
      </div>
      <div>
        <input type="text" />
      </div>
      <div>
        <input type="text" />
      </div>
      <div>
        <input type="text" />
      </div>
      <div>
        <input type="text" />
      </div>
      <aside>
       <div>
       <input type="radio" name="roles" id="i" onChange={() => getRoles('chef')} />
        <h3>Chef</h3>
       </div>
       <div>
       <input type="radio" name="roles" id="i" onChange={() => getRoles('receptionist')} />
       <h3>Receptionist</h3>
       </div>
      </aside>
      <button>Create New User</button>
    </form>
  )
}



