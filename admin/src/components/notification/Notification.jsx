import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { Tag } from '../../hooks/useContext/useContext'
export default function Notification ({}) {
 const {setTag} = useContext(Tag)
  return (
    <div>
      <input type="text" />
      <p>sign</p>

     <Link to={'/setting'}> 
     <p>
      <i class="fa-solid fa-gear" style={{
       color: 'orange'
      }} onClick={() => setTag('setting')}></i>
      </p>
      </Link>
      <Link id='tags' to={'/notification'}>
      <i class="fa-solid fa-bell" style={{
       color: 'orange'
      }}></i>
      </Link>
    </div>
  )
}
