import React from "react";
import LoginForm from '../../components/LoginForm.jsx'
import LoginWithSocialNetworks from '../../components/LoginWithSocialNetworks.jsx'


const Login = () => (
  <div className = "App">
    <LoginForm/>
    <LoginWithSocialNetworks/>    
  </div>
)
export default Login;