
import { useState } from "react"
import "./Square.css"
import React from "react"

export default function Square(props){

    const [square, setSquare] = useState(props.selected)

    const style = {
        backgroundColor: square ? "#000000" : "#FFFFFF",
        color: square ? "#FFFFFF" : "#000000"
    }

    console.log(square)
    
    return (
        <div onClick={()=>setSquare(!square)} 
        style={style} 
        className="square"
        >
            {props.name}
        </div>
    )
}