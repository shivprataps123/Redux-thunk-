import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate,useLocation } from "react-router-dom";
import login from "../Redux/AuthReducer/action";

const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const location=useLocation();
  console.log(location);
  const coming=location.state?.data || '/';
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(email&&password){
      dispatch(login({email,password})).then((res)=>{
        navigate(coming,{replace:true})
      })
    }
  }
  return (
    <div data-testid="login">
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Email</label>
          <br />
          <input type="email" value={email} onChange={((e)=>setEmail(e.target.value))} data-testid="login-email" />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input type="password" value={password} onChange={((e)=>setPassword(e.target.value))} data-testid="login-password" />
        </div>
        <button type="submit" data-testid="login-submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
