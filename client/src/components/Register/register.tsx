import React, { useState } from "react";
import { registerWithEmailAndPassword } from "../../firebase";
import { useNavigate } from "react-router-dom";

import "../Login/login.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const registerUser = () => {
    registerWithEmailAndPassword(name, email, password);
    navigate("/");
  };

  return (
    <div className="login">
      <div className="login-container">
        <img
          className="login-logo"
          src="https://static.wixstatic.com/media/3dbed1_c21e470da4924ae2abf0fa851a4464e0~mv2.png/v1/fill/w_499,h_108,al_c,q_85,enc_auto/3dbed1_c21e470da4924ae2abf0fa851a4464e0~mv2.png"
          alt="Subscriber Logo"
        />
        <input
          required
          type="text"
          className="login-textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name..."
        />
        <input
          required
          type="text"
          className="login-textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address..."
        />
        <input
          required
          type="password"
          className="login-textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Create a password..."
        />
        <button className="login-btn" onClick={() => registerUser()}>
          Register
        </button>
      </div>
    </div>
  );
}
export default Register;
