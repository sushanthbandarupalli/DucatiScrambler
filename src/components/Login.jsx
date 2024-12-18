import React  from "react";
import "../styles/login.css";


const Login = () => {

  return (
    <div class="login-container">
      <div class="logo">
        <img style={{height:"200px" , width:"200px"}} src="./images/ducati-logo.png" alt="Ducati Logo" />
      </div>
      <form class="login-form">
        <h1>Login</h1>
        <div class="input-group">
          <input
           
            placeholder="E-MAIL"
            type="email"
            name="email"
            required
          />
        </div>
        <div class="input-group">
          <input
            placeholder="PASSWORD"
            type="password"
            id="password"
            name="password"
            required
          />
        </div>
        <div className="bottom">
          <p>Forgot Your Password?</p>
          <button type="submit">LOGIN</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
