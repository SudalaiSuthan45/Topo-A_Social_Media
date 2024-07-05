import { useContext, useRef } from 'react';
import './Login.css'
import { loginCall } from "../apiCalls"
import {AuthContext} from "../../context/AuthContext"
import CircularProgress from '@mui/material/CircularProgress';

export default function Login() {

    const email = useRef();
    const password = useRef();
    const { user, isFetching, error, dispatch } = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        loginCall( { email : email.current.value, password : password.current.value}, dispatch );
    };

    console.log(user);

  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Topo Media</h3>
                <span className="loginDesc">Keep on Connect with Friends</span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input placeholder='Email' required type="email" className="loginInput" ref={email} />
                    <input placeholder='Password' required type="password" minLength="6" className="loginInput" ref={password} />
                    <button className="loginButton" type='submit' disabled={isFetching}>
                        { isFetching ? <CircularProgress /> : "Log In" }
                    </button>
                    <span className="loginForgot">Forgot Password</span>
                    <button className="loginRegisterButton">
                        { isFetching ? <CircularProgress /> : "Create a New Account" }                        
                    </button>
                </form>
            </div>

        </div>
      
    </div>
  )
}