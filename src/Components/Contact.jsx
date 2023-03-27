import Media from "./Media";
import "../Styles/Contact.css";
import React, { useState } from 'react';

const userData = {
  name:"",
  email: "",
  message: ""
}

function Contact() {

  const [data, setData] = useState(userData);

  const handleChange = (e)=>{
    setData({...data, [e.target.name] : e.target.value})
  }
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(data)
  }

  return (
    <div className="Container">
      <div className="contact">
        <h1>CONTACT</h1>
      </div>
      <div className="inContainer" >

        <div className="logoBox">
          <div className="emailphone">
            <div className="logo">
              <img
                width="50px"
                src="https://img.icons8.com/ios-filled/512/call-male.png"
                alt=""
              />
            </div>
            <p>+91 8103313529</p>
          </div>

          <div className="emailphone">
            <div className="logo">
              <img
                width="50px"
                src="https://img.icons8.com/ios-filled/512/gmail.png"
                alt=""
              />
            </div>
            <p>ayush98277@gmail.com</p>
          </div>
          <div className="media">
            <Media />
          </div>
        </div>

        <div className="form">
          <form onSubmit={handleSubmit} >
            <input type="text" name="name"  value={data.name}  onChange={handleChange} placeholder="Name" />
            <input type="text" name="email" value={data.email} onChange={handleChange} placeholder="Email" />
            <textarea type="text" name="message" value={data.message} onChange={handleChange} placeholder="Message" className="msg" />
            <button type="submit" className="submit" > Send </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;
