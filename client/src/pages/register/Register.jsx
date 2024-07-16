import { useRef } from 'react';
import './Register.css'
import axios from 'axios'

import {useNavigate} from 'react-router-dom'

export default function Register() {

    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();

    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        if ( passwordAgain.current.value !== password.current.value){
            password.current.setCustomValidity("Passwords Dont Match");
        }
        else{
            const user = {
                username : username.current.value,
                email : email.current.value,
                password : password.current.value,
            };
            try {
                await axios.post("/auth/register", user);
                navigate("/login");
            }catch(err){
                console.log(err);
            }
        }
    };

    const loginClick = () => {
        navigate("/login");
    }

  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Topo Media</h3>
                <span className="loginDesc">Keep on Connect with Friends</span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input placeholder='UserName' required ref={username} className="loginInput" />
                    <input placeholder='Email' required ref={email} type='email' className="loginInput" />
                    <input placeholder='Password' required ref={password} type='password' minLength="6" className="loginInput" />
                    <input placeholder='RetypePassword' required type='password' ref={passwordAgain} className="loginInput" />
                    <button className="loginButton" type='submit'>Sign Up</button>
                    <button className="loginRegisterButton" onClick={loginClick} >Login to Account</button>
                </form>
            </div>

        </div>
      
    </div>
  )
}
