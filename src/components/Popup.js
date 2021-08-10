import React from "react"

function Popup({onClickPopupClose, popupTitle, popupContent, isPopupOpened}) {

    return (
        <div className={isPopupOpened ? "popup popupOpened" : "popup"}>
            <button onClick={onClickPopupClose} className="buttonClose" title="Закрыть"><span></span></button>
            <h2>{popupTitle}</h2>
            <p>{popupContent}</p>
            {/* <button className="buttonMoreInfo">Подробнее</button> */}
        </div>
    )
}

export default Popup;