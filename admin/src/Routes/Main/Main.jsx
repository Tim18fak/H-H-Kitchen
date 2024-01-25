import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SidePanel from "../../Pages/SidePanel/SidePanel";
import Dashboard from "../Routes2/Dashboard/Dashboard";
import Profiles from "../Routes2/Profiles/Profiles";
import CreateNewUser from "../Routes2/SignIn/CreateNewUser";
import Setting from "../Routes2/SettingAdmin/Setting";
import Orders from '../Routes2/Orders/Orders';
import Tasks from '../Routes2/Task/Tasks';

import { Tag } from '../../hooks/useContext/useContext';

import './main.scss'
import NotificationRoute from '../Routes2/NotificationRoute/NotificationRoute';


export default function Main() {
  const [tag,setTag] =  useState('dashboard')
  useEffect(() => {
    if(window.location.pathname !== '/dashboard'){
      window.location.href = '/dashboard'
    }
  },[])
  return (
    <>
    <Tag.Provider value={{tag,setTag}}>
     <section className="HH__auth--admin--main">
      <Router>
        <nav>
        <SidePanel />
        </nav>
        <main>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/tasks' element={<Tasks/>}/>
          <Route path="/profile" element={<Profiles />} />
          <Route path="/create_user" element={<CreateNewUser />} />
          <Route path="/setting" element={<Setting />} />
          <Route path='/notification' element={<NotificationRoute/>}/>
        </Routes>
        </main>
      </Router>
    </section>
    </Tag.Provider>
    </>
  );
}
