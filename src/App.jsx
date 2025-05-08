// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import User from './user'
import './App.css'



function App() {

  return (
    <BrowserRouter>
      <nav style={{ marginBottom: "1rem" }}>
        <Link to="/">Home</Link> |{''}
        <Link to="/about">About</Link> |{''}
        <Link to="/contact">Contact</Link> |{''}
        <Link to="/user/arif/arif@gmail.com?id=123">User </Link>

      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:name/:email" element={<User />} />



        <Route path="*" element={<h2> 404 Not Found </h2>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
