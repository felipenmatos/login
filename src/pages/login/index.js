import React, { useState } from 'react';

import './login.css'
import ImageLogo from '../login/foguete.png'
import { MdEmail, MdLock } from "react-icons/md";
import { HiOutlineEyeOff, HiOutlineEye } from "react-icons/hi";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [show, setShow] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setShow(!show);
  }

  return (
    <div className="login">
      <div className="login-logo">
        <img 
          src={ImageLogo} 
          alt="logo" 
        />
        </div>

          <div className="login-right">
            <h1 className="title-login">Connect to Rocket</h1>
            <div className="email">
              <MdEmail/>
                <input
                  type="text"
                  placeholder="Digite um email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
            </div>

          <div className="password">
            <MdLock />
              <input
                type={show ? "text" : "password"}
                placeholder="Digite sua senha"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
          <div className="login-eye">
            {show ? (
              <HiOutlineEye
                size={20}
                onClick={handleClick} 
            />
            ) : (
              <HiOutlineEyeOff
                size={20}
                onClick={handleClick} 
            />
            )}
          </div>
          </div>

            <button type="submit"> 
              Logar
            </button>

            <h4 className="text2">I don't have an account!</h4>

            <button type="submit">
              Register
            </button>
        </div>
    </div>
    )
}

export default Login