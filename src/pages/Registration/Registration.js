import "./registration.css";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../Assets/logo.png";
import { FcGoogle } from "react-icons/fc";
const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleInput = (e, type) => {
    // if (type === "name") setName(e.target.value);
    // else if(type==='email') setEmail(e.target.value);
    // else if(type==='phone') setPhone(e.target.value);
    // else if (type === "password") setPassword(e.target.value);
    // else if (type === "cfmpassword") setConfirmPassword(e.target.value);
    setFormData({
      ...formData,
      [type]: e.target.value,
    });
  };
  const onSubmit = () => {
    const newErrors = validateForm(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      navigate("Login");
    }
    console.log(name, password, email, phone, confirmPassword, "userpass");
  };
  const validateForm = (data) => {
    const errors = {};

    if (!data.name.trim()) {
      errors.name = "Name is required";
    } else if (data.name.length < 4) {
      errors.name = "Username must be at least 4 characters long";
    }

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
    }

    if (!data.password) {
      errors.password = "Password is required";
    } else if (data.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }
    if (!data.confirmPasswordpassword) {
      errors.confirmPassword = "Please type password again";
    }

    if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  return (
    <div className="main-wrapper">
      <div className="cards">
        <div className="input-wrapper">
          <img src={logo} alt="logo" width="110px" height="40px" />
        </div>
        <div className="input-wrapper">
          <div className="form-heading">
            <input
              className="form-input"
              placeholder="Full Name"
              defaultValue={formData.name}
              type="text"
              required
              onChange={(e) => handleInput(e, "name")}
            />
            {errors.name && (
              <span className="error-message">{errors.name}</span>
            )}
          </div>
          <div className="form-heading">
            <input
              className="form-input"
              placeholder="Email"
              defaultValue={formData.email}
              type="email"
              required
              onChange={(e) => handleInput(e, "email")}
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>
          <div className="form-heading">
            <input
              className="form-input"
              placeholder="Phone"
              defaultValue={formData.phone}
              type="phone"
              required
              onChange={(e) => handleInput(e, "phone")}
            />
            {errors.phone && (
              <span className="error-message">{errors.phone}</span>
            )}
          </div>
          <div className="form-heading">
            <input
              className="form-input"
              placeholder="Password"
              defaultValue={formData.password}
              type="password"
              required
              onChange={(e) => handleInput(e, "password")}
            />
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>
          <div className="form-heading">
            <input
              className="form-input"
              placeholder="Confirm Password"
              defaultValue={formData.confirmPassword}
              type="password"
              required
              onChange={(e) => handleInput(e, "confirmPassword")}
            />
            {errors.confirmPassword && (
              <span className="error-message">{errors.confirmPassword}</span>
            )}
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
