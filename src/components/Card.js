import React from "react"

function Card({type, text}) {

    return (
        <div className={`card ${type}`}>
        {/* <div className="card"> */}
            <input type={type} placeholder={text}/>
            <p>{text}</p>
            <button className="buttonMoreInfo">{text}</button>
        </div>
    )
}

export default Card;