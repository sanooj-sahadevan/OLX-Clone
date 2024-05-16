/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Logo from "../../olx-logo.png";
import "./Login.css";
import {Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Spinner from "../spinner/Spinner"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  

  const { user, logIn } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let res = await logIn(email, password);
    if (res.success) {
      toast.success("signup successfull");
    } else {
      setLoading(false);
      toast.error("something went wrong");
    }
  };

  if (user) return navigate("/");

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <Toaster />
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          {loading ? (
            <Spinner />
          ) : (
          <button>Login</button>
          )}
        </form>
        <Link to="/signup">Create an account</Link>
      </div>
    </div>
  )
}

export default Login;
