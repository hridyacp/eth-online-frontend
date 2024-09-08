import "./registration.css";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../Assets/logo.png";
import { FcGoogle } from "react-icons/fc";
const Registration = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  
 
  const handleInput = (e, type) => {
    if (type === "name") setName(e.target.value);
    else if(type==='email') setEmail(e.target.value);
    else if(type==='phone') setPhone(e.target.value);
    else if (type === "password") setPassword(e.target.value);
    else if (type === "cfmpassword") setConfirmPassword(e.target.value);
   
    }
  const onSubmit = () => {
    if(password!==confirmPassword){
setError("Passwords dont match")
setPassword("");
setConfirmPassword("");
    }
    else if(password==="" && confirmPassword==="")setError("please enter password")
    else{
      navigate('Login');
    }
    console.log(name, password,email,phone,confirmPassword, "userpass");
  };
  return (
    <div className="main-wrapper">
      <div class="cards">
        <div className="input-wrapper">
          <img src={logo} alt="logo" width="110px" height="40px" />
        </div>
        <div className="input-wrapper">
          <div className="form-heading">
            <input
              className="form-input"
              placeholder="Full Name"
              defaultValue={name}
              type="text"
              required
              onChange={(e) => handleInput(e, "name")}
            />
          </div>
          <div className="form-heading">
            <input
              className="form-input"
              placeholder="Email"
              defaultValue={email}
              type="email"
              required
              onChange={(e) => handleInput(e, "email")}
            />
          </div>
          <div className="form-heading">
            <input
              className="form-input"
              placeholder="phone"
              defaultValue={phone}
              type="phone"
              required
              onChange={(e) => handleInput(e, "phone")}
            />
          </div>
          <div className="form-heading">
            <input
              className="form-input"
              placeholder="Password"
              defaultValue={password}
              type="password"
              required
              onChange={(e) => handleInput(e, "password")}
            />
          </div>
          <div className="form-heading">
            <input
              className="form-input"
              placeholder="Confirm Password"
              defaultValue={confirmPassword}
              type="password"
              required
              onChange={(e) => handleInput(e, "cfmpassword")}
            />
            <div className="error-message">{error}</div>
          </div>
         
          <div className="button-wrapper">
            <button className="form-button" onClick={onSubmit}>
              Submit
            </button>
          
          </div>
        </div>
      </div>
    </div>
  );
};
export default Registration;
