import React from 'react';
import "./register.css";

function Register(props) {
    return (
        <div className='login'>
             <div className="loginWrapper">
             {/* <div >  
                  <video autoPlay muted loop className="myVideo">
    
                      <source src={vid1} type="video/mp4" />
                      
                  </video>
                </div>
                 */}
                 <div className="loginLeft">
                     <h3 className="loginLogo">PetSutra</h3>
                     <span className="loginDesc">Connect with pets all around you on PetSutra</span>
                 </div>
                 <div className="loginRight">
                     <div className="loginBox">
                         <input placeholder="Username" className='loginInput'/>
                         <input placeholder="Email" className='loginInput'/>
                         <input placeholder="Password" className='loginInput'/>
                         <input placeholder="Password Again" className='loginInput'/>
                         <button className="loginButton">Sign Up</button>
                         {/* <span className="loginForgot">Forgot Password?</span> */}
                         <button className="loginRegisterButton">Log into your account</button>
                     </div>
                 </div>
             </div>           
        </div>
    );
}

export default Register;