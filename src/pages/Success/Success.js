import { Grid2 } from "@mui/material";
import "./success.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Success = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const responseMessage = (response) => {
    console.log(response);
    if (response?.credential) {
      navigate("/success");
    }
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  const handleInput = (e, type) => {
    if (type === "username") setUserName(e.target.value);
    else if (type === "password") setPassword(e.target.value);
  };
  const onSubmit = () => {
    console.log(userName, password, "userpass");
  };
  return (
    <div class="card">
      <div className="form-heading">
        <input
          className="form-input"
          placeholder="User Name"
          defaultValue={userName}
          type="text"
          onChange={(e) => handleInput(e, "username")}
        />
      </div>
      <div className="form-heading">
        <input
          className="form-input"
          placeholder="Password"
          defaultValue={password}
          type="text"
          onChange={(e) => handleInput(e, "password")}
        />
      </div>
    </div>
  );
};
export default Success;
