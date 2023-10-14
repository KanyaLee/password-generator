import React, { useState } from "react"
import './PasswordGenerator.css'



export default function Password({characters, length}) {
    const [password, setPassword] =  useState('')

    const generatePassword = () => {
        let newPassword = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            newPassword += characters[randomIndex];
            console.log(newPassword)
        }
        setPassword(newPassword);
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(password)
    }

    return (
        <div>
            <input type="text" readOnly value={password}   />
            <button onClick={handleCopy}>Copy</button>
            <br />
            <button onClick={generatePassword}>Generate Password</button>
        </div>
    )
}

