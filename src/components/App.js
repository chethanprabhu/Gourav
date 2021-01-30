import React, { useState } from 'react'
import SignIn from "./SignUpAndSignIn/SignIn"
import SignUp from "./SignUpAndSignIn/Signup"
import Button from "./Button/Button"
import classes from './App.module.css'

const App = () => {
  const [signInActive, setSignInActive] = useState(true);
  let userLoginScreen = "";

  userLoginScreen = signInActive ?  <SignIn/> : <SignUp/>;
  
  const onClickHandlerSignIn = () => {
    if(!signInActive) {
      setSignInActive(true);
    } else {
      //add logic for sign In
    }
  }

  const onClickHandlerSignUp = () => {
    if(signInActive) {
      setSignInActive(false);
    } else {
      //add logic for sign Up
    }
  }

  return (
    <>
      <div className={classes.main}>
        <div className={classes.content}>
          {userLoginScreen}
          <div>
            <Button onClickHandler={onClickHandlerSignIn}>SIGN IN</Button>
            <Button onClickHandler={onClickHandlerSignUp}>SIGN UP</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
