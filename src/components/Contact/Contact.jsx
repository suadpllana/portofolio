import React from 'react'
import "./Contact.css"
import { Link as ScrollLink, Element } from "react-scroll";
const Contact = () => {
  return (
    <div>
              <Element name="contact"/>
       <h2 id="contact">Contact</h2>
    <div className="contact">
      <div className="responsive"></div>
      <div>
        <p className="emoji">📍</p>
        <h3 className="description">Address</h3>
        <p className="info">Prishtina</p>
      </div>
      <div>
        <p className="emoji">📱</p>
        <h3 className="description">Phone Number</h3>
        <p className="info">+38345244037</p>
      </div>
      <div>
        <p className="emoji">✉️</p>
        <h3 className="description">Email</h3>
        <p className="info">suadpllana14@gmail.com</p>
        <p className="info">suad.pllana@universitetiaab.com</p>
      </div>
      <div className="responsive"></div>
    </div>
    </div>
  )
}

export default Contact
