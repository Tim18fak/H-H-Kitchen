import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './sidepanel.scss';

import { Tag } from '../../hooks/useContext/useContext';
export default function SidePanel() {

  const {tag,setTag} = useContext(Tag)
  console.log(Tag)
  // const [tag,setTag] =  useState('')
  useEffect(() => {
    setTag('dashboard')
  },[])
 
  const ChangeUI =  (id) => {
    setTag(id)
  }

  return (
    <nav className='HH__sidepanel'>
      <h3 className='tag__name'>H&H Kitchen</h3>
      <Link id='tags' to={'/dashboard'}>
        <li id={tag === 'dashboard'? 'active' : 'not_active'}  onClick={() => ChangeUI('dashboard')}>Dashboard</li>
      </Link>

      <Link id='tags' to={'/orders'}>
        <li id={tag === 'orders'? 'active' : 'not_active'} onClick={() => ChangeUI('orders')}>Orders</li>
      </Link>


      <Link id='tags' to={'/tasks'}>
        <li id={tag === 'tasks'? 'active' : 'not_active'}  onClick={() => ChangeUI('tasks')}>Tasks</li>
      </Link>
  
       <h2>Account Pages</h2>

      <Link id='tags' to={'/profile'}>
        <li id={tag === 'profile'? 'active' : 'not_active'} onClick={() => ChangeUI('profile')}>Profile</li>
      </Link>

      <Link id='tags' to={'/create_user'}>  
      <li id={tag === 'create_user'? 'active' : 'not_active'}  onClick={() => ChangeUI('create_user')}>Sign IN</li>
      </Link>

      <Link id='tags' to={'/setting'}>
        <li id={tag === 'setting'? 'active' : 'not_active'}  onClick={() => ChangeUI('setting')}>Setting</li>
      </Link>

      <Link id='tags'>
        <li id={tag === 'signout'? 'active' : 'not_active'}  onClick={() => ChangeUI('signout')}>Sign Out</li>
      </Link>
    </nav>
  )
}
