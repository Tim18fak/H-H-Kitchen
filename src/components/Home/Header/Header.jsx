import React from 'react'
import './header.scss'
const Header = () => {
  return (
    <>
    <input type="checkbox" name="" id="navCheck" />
    <nav className='HH__nav'>
      <section className='HH__nav--section'>
        <p><label htmlFor="navCheck"></label></p>
        <h3>H&H Kitchen</h3>
        <button>Book a Meal Now</button>
      </section>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Register Now</li>
      </ul>
    </nav>
    </>
  )
}

export default Header
