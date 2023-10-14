import React, { useEffect } from "react";
import { useState } from "react";

export default function Requirement({onCharactersChange}) {
    const [upperCase, setUpperCase] = useState(false);
    const [lowerCase, setLowerCase] = useState(false);
    const [number, setNumber] = useState(false);
    const [specialChar, setSpecialChar] = useState(false);

    useEffect(() => {
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const numberChars = '0123456789';
        const specialChars = '!@#$%^&*()_-+=<>?/[]{}|';
    

    let characters = '';
    if (upperCase) {
        characters += uppercaseChars;
    }
    if (lowerCase) {
        characters += lowercaseChars;
    }
    if (number) {
        characters += numberChars;
    }
    if (specialChar) {
        characters += specialChars;
    }
    
    onCharactersChange(characters);
}, [upperCase,lowerCase,number,specialChar,onCharactersChange]);

    return (
        <div>
            <div>
                <span>Uppercase</span>
                <input type="checkbox" checked={upperCase} onChange={() => setUpperCase(!upperCase)}/>
                <span>LowerCase</span>
                <input type="checkbox" checked={lowerCase} onChange={() => setLowerCase(!lowerCase)}/>
                <span>Number</span>
                <input type="checkbox" checked={number} onChange={() => setNumber(!number)}/>
                <span>Special Character</span>
                <input type="checkbox" checked={specialChar} onChange={() => setSpecialChar(!specialChar)}/>
            </div>
        </div>
    )
}