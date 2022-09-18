import React, { useState } from "react";
import contactUs from "../Images/contactUs.png";
import "./contactUs.css";
import {db} from "../../firebase"
function Index() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [phoneno,setPhoneno]=useState("")
  const [message,setMessage]=useState("")
  const [loader,setLoader]=useState(false)

  const handleSubmit=(e)=>{
    e.preventDefault()
    setLoader(true)
    db.collection('contacts').add({
      name:name,email:email,phoneno:phoneno,message:message
    })
    .then(()=>{
      alert("Message has been submitted")
      setLoader(false)
    })
    .catch(error=>{
      alert(error.message)
      setLoader(false)

    })
    setName('')
    setEmail('')
    setPhoneno('')
    setMessage('')
  }
  return (
    <div className="contactUsOuterContainer" id="connect">
      <div className="contactus-image">
        <img className="contactUsImage" src={contactUs} alt="contactus-image" />
      </div>
      <div className="form">
        <div className="contactSubHeading">
          <div className="line" />
          <h5>CONTACT US</h5>
        </div>
        <div className="contactMainHeading">
          <h1>Let’s connect</h1>
        </div>
        <div className="contactParaDiv">
          <p className="contactPara">
            We are here to help you. Fill the form below and we will get you in
            touch with our experts soon.
          </p>
        </div>
        <form id="contact-us-form" onSubmit={handleSubmit}>
          <div>
            <input
              className="input"
              type="text"
              name="name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <input
              className="input email"
              name="email"
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <input
              className="input phonenumber"
              name="phoneno"
              type="number"
              value={phoneno}
              onChange={(e)=>setPhoneno(e.target.value)}
              placeholder="Your Phone Number"
              required
            />
          </div>
          <div>
            <textarea
              className="textarea"
              name="message"
              placeholder="How can we help you?"
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
              required
              cols="30"
              rows="7"
            />
          </div>
          <div>
            <button type="submit" className="contactUsButton" style={{opacity: loader?0.3:1}}>
              Contact Us
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Index;
