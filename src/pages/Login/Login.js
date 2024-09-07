import { Grid2 } from "@mui/material";
import './login.css';
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
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
            {/* <video autoPlay loop muted>
          <source src = {vid} type = 'video/mp4' autoPlay loop/>
          </video> */}
            <div className="form-container">

        <div className="form-wrapper">
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
          {/* <div className="form-heading form-set">
            <input className="form-input" placeholder="Email" type="email" />
            <input className="form-input" placeholder="Phone" type="num" />
          </div> */}
          <div className="button-wrapper">
                <button className="form-button" onClick={onSubmit}>Submit</button>
                <GoogleLogin style={{backgroundColor:'blue'}} shape={'pill'} onSuccess={responseMessage} onError={errorMessage} />
                </div>
        </div>
        
    </div>
    </div>
)
}
export default Login;