import React from 'react'
import Login from './components/Login'
import SignUp from './components/Signup'
import { Route, Routes } from 'react-router-dom'
import DashBoard from './components/DashBoard'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/dashboard' element= {<DashBoard/>}/>
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
