import React from 'react'
import './LoginScreen.css'
import { useState } from 'react'
import SignInScreen from './SignInScreen'
function LoginScreen() {
  const [signIn,setSignIn]=useState(false)
  
  return (
    <div className='loginScreen'>
        <div className="loginScreen__background">
            <img className='loginScreen__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="netflix logo" />
            <button onClick={()=>setSignIn(true)} className='loginScreen__button'> Sign In</button>
           <div className="loginScreen__gradient"></div>
        </div>
        <div className="loginScreen__body">
             {signIn? (<SignInScreen/>): (
                 <>
                 <h1>Unlimited movies, TV shows and more.</h1>
                 <h2>Watch anywhere. Cancel anytime.</h2>
                 <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                 <div className="loginScreen__input">
                  <form>
                    <input type="email" placeholder='Email address'/>
                    <button onClick={()=>setSignIn(true)} className='loginScreen__getStarted'>GET STARTED</button>
                  </form>
                 </div>
                </>
             )}
           
        </div>
    </div>
  )
}

export default LoginScreen