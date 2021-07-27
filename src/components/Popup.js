import React from "react"

function Popup({onClickPopupClose}) {

    return (
        <div className="popup">
            <button onClick={onClickPopupClose} className="buttonClose" title="Закрыть"><span></span></button>
            <h2>Здесь будет заголовок для привлечения внимания!</h2>
            <p>Здесь будет текст уведомления, отображаемого на экране клиента! Пользователь будет читать это уведомление, нажимать крестик, а уведомление все равно появится еще один раз.</p>
            {/* <button className="buttonMoreInfo">Подробнее</button> */}
        </div>
    )
}

export default Popup;