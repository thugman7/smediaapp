import React from 'react';
import "./login.css";
import vid1 from './vid1.mp4';
import vid2 from './vid2.mp4';
function Login(props) {
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
                         <input placeholder="Email" className='loginInput'/>
                         <input placeholder="Password" className='loginInput'/>
                         <button className="loginButton">Log In</button>
                         <span className="loginForgot">Forgot Password?</span>
                         <button className="loginRegisterButton">Create a New account</button>
                     </div>
                 </div>
             </div>           
        </div>
    );
}

export default Login