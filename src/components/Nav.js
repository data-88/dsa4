import React from 'react'

export default function Nav() {
  return (
        <React.Fragment>
        <div class="container">
            <div class="logo">
                <i class="fas fa-newspaper fa-3x"></i>
                <h1>Daily<span>South African</span></h1>
            </div>
            <div class="options">
                <a href="./index.html" class="current">Home</a>
                <a href="./about.html">About</a>
            </div>
        </div>
        </React.Fragment>
  )
}
