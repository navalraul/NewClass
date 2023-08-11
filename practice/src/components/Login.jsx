
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/Auth.context'

const Login = () => {

  const { state, Login} = useContext(AuthContext)

  const [ userData, setUserData] = useState({ email: "", password: ""})
  const router = useNavigate();


  const handleChange =(event) => {
    setUserData({...userData, [event.target.name]: event.target.value})
  }

  const handleSubmit =(event) => {
    event.preventDefault();
    if(userData.email && userData.password) {
      const user = JSON.parse(localStorage.getItem("NewUsers"))

      var flag = false;
      for ( var i = 0; i < user.length; i++) {
        if(user[i].email == userData.email && user[i].password == userData.password) {
          flag= true;
          break;
        }
      }
      if( flag = false) {
        return alert("Credentails not matched")
      } else {
        localStorage.setItem("Current-user",JSON.stringify(user))
        Login(user)
        alert("Login Succesful")
        setUserData({ email: "", password: ""})
        router('/')
      }
    } 
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email</label><br />
        <input type="email" name='email' onChange={handleChange} /><br />
        <label>Password</label><br />
        <input type="password" name="password" onChange={handleChange} /><br />
        <input type="submit" value='Login' /><br />
      </form>
    </div>
  )
}

export default Login;
