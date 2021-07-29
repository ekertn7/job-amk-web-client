import React from "react"

function Card({type, text}) {

    return (
        <div className="card">
            <input type={type} placeholder={text}/>
            <p>{text}</p>
        </div>
    )
}

export default Card;