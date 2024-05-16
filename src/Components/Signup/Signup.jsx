/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Logo from '../../olx-logo.png';
import toast, { Toaster } from "react-hot-toast";
import './Signup.css';
import Spinner from "../spinner/Spinner"

export default function Signup() {

  const [userName, setUserName] = useState('');
  const [Email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [Password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { user, signUp } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let res = await signUp(userName, Email, phone, Password);

    if (res.success) {
      toast.success("signup successfull");
    } else {
      setLoading(false);
      toast.error("something went wrong");
    }
    
  };
  console.log(user);
  if (user) return navigate("/");


  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <Toaster />
        <form onSubmit={handleSubmit} >
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            id="fname"
            name="name"
            
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            id="fname"
            name="email"
            
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id="lname"
            name="phone"
            
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
           
          />
          <br />
          <br />
          {loading ? (
            <Spinner exact />
          ) : (
          <button>Signup</button>
          )};
        </form>
        <Link to="/login">Already have an account</Link>
      </div>
    </div>
  );
}
