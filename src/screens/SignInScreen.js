import React from 'react'
import "./SignInScreen.css"
import {Link} from 'react-router-dom'
function SignInScreen() {

  return (
    <div className='signuScreen'>
        <form>
            <h1 className='signinh1'>Sign In</h1>
            <input type="email" placeholder='Email id' />
            <input type="password" placeholder='Password' />
    
            <button> <Link to="/HomeScreen" className="btn btn-primary" id='buttonn'>Sign In</Link> </button>
            <h4><span className='signupscreen__gray'>New to Netflix?</span> 
             <span className='signupscreen__link' >Sign up now</span></h4>
        </form>
    </div>
  )
}

export default SignInScreen