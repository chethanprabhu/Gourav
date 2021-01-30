import React from 'react'
import Input from "../Input/Input"

const Signup = () => {
    return(
        <>
            <Input type="text" ph="Enter a username"/> 
            <Input type="password" ph="Enter a password"/>
            <Input type="password" ph="Re-Enter your password"/>
        </>
    )
}

export default Signup
