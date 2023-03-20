import React, { useState } from "react"
import squares from "./Squares/squares"
import Square from "./Squares/Square"
import "./Lottery.css"

export default function Lottery(){

  const [numbers, setNumbers] = useState(squares)

  function toggle(id){
    setNumbers(prevState => {
      return prevState.map((square) => {
        return square.id === id ? {...square, selected: !square.selected} : square
      })
    })
}

  const [boxes, setBoxes] = useState(squares)


  const squareElements = boxes.map((square, i) => (
    <Square
    key={square.id}
    name={square.id}
    selected={square.selected}
    toggle={()=>toggle(i)}
    />
))

  return (
    <div>
      <div className="logo">
        Lottery
      </div>
      <div className="lottery">
        {squareElements}
      </div>
      <div className="play">
        <button>Let`s play!</button>
      </div>
    </div>
  )
}