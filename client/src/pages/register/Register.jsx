import './Register.css'

export default function Register() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Topo Media</h3>
                <span className="loginDesc">Keep on Connect with Friends</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder='UserName' className="loginInput" />
                    <input placeholder='Email' className="loginInput" />
                    <input placeholder='Password' className="loginInput" />
                    <input placeholder='RetypePassword' className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegisterButton">Login In to Account</button>
                </div>
            </div>

        </div>
      
    </div>
  )
}
