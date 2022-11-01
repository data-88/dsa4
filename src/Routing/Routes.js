import React from 'react'
import {BrowserRouter as Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Login from '../pages/Login'

export default function RouterPage() {
  return (
    <div>
        <Route path="/" component={<Home />} />
        <Route path="/about" component={<About />} />
        <Route path="/login" component={<Login/>} />
    </div>
  )
}
