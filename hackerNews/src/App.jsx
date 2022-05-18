import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Header'
import Home from './components/Home'
import NewsDetails from './components/Newsdetails'

import {Routes, Route } from 'react-router-dom'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items/:id" element={<NewsDetails />} />
        </Routes>
  
    </div>
  )
}

export default App
