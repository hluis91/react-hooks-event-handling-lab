// Code Keypad Component Here
import React from "react";

function Keypad (){
    function enterPassWord(){
        console.log('Entering password...')
    }
    return (
        <div>
            <input type="password" onChange={enterPassWord}/>
        </div>
    )
}

export default Keypad;