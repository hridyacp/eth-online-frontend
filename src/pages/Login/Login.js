import './login.css';
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../Assets/logo.png";
import { FcGoogle } from 'react-icons/fc';
const Login=()=>{
    const navigate=useNavigate();
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const responseMessage = (response) => {
        console.log(response);
        if(response?.credential){
            navigate('/success')
        }
    };
    const errorMessage = (error) => {
        console.log(error);
    };
    const login = useGoogleLogin({
        onSuccess: tokenResponse => {console.log(tokenResponse);  navigate('/success')},
      });
    const handleInput=(e,type)=>{
        if(type==='username')
setUserName(e.target.value)
        else if(type==='password')
        setPassword(e.target.value)
    }
    const onSubmit=()=>{
        console.log(userName,password,"userpass")
    }
return(
        <div className="main-wrapper">
           
         <div class="card">
         <div className="input-wrapper"> 
            <img src={logo} alt="logo" width="90px" height="10px"/>
            </div>
            <div className="input-wrapper"> 
          <div className="form-heading">
            <input
              className="form-input"
              placeholder="User Name"
              defaultValue={userName}
              type="text"
              onChange={(e)=>handleInput(e,'username')}
            />
          </div>
          <div className="form-heading">
            <input className="form-input" placeholder="Password" defaultValue={password} type="text" onChange={(e)=>handleInput(e,'password')} />
          </div>
          </div>
          <div className="button-wrapper">
                <button className="form-button" onClick={onSubmit}>Submit</button>
                {/* <GoogleLogin shape="pill"  onSuccess={responseMessage} onError={errorMessage} /> */}
                <button className="form-button" onClick={()=>login()}><FcGoogle size={'1.5em'}/>Sign in with Google</button>
                </div>
        </div>
        
    </div>
)
}
export default Login;