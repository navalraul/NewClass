import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Register = () => {

    const [ userData, setUserData] = useState({name: "", email: "", password: ""});
    const router = useNavigate();

    const handleChange=(event) => {
        setUserData({...userData, [event.target.name]: event.target.value})
    }
    
    const handleSubmit=(event) => {
        event.preventDefault();
        if(userData.name && userData.email && userData.password) {

            const Ls = JSON.parse(localStorage.getItem("NewUsers")) || [];
            const userObj = {
                name: userData.name,
                email: userData.email,
                password: userData.password,
                cart: []
            };
            Ls.push(userObj);
            
            localStorage.setItem("NewUsers", JSON.stringify(Ls))
            alert("Registration successfull..")
            router('/login')
        } else{
            alert("All fileds are mandatory")
        }
        
    }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label><br/>
        <input type='text' onChange={handleChange} name='name' /><br/>
        <label>Eamil:</label><br/>
        <input type='email' onChange={handleChange} name='email' /><br/>
        <label>Password:</label><br/>
        <input type='password' onChange={handleChange} name='password' /><br/>
        <input type='submit' value='Register' />
      </form>
    </div>
  )
}

export default Register;
