import React from 'react'
import "./App.css"
import SignUp from './component/SignUp'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<SignUp />} />
    </Routes>
  )
}

export default App