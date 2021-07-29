import React from "react"

function Menu({indicators = [], items = [], isChoiseItem, searchValue, onClickChoiseItem, item}) {

    return (
        <div className="indicatorsMenu">
            {indicators
                .map((indicator) => (
                    <div className="indicatorsPapa" key={indicator.category}>
                        <h3>{indicator.category}</h3>
                        {items
                            .filter((item) => indicator.category.toLowerCase().includes(searchValue.toLowerCase()) || item.description.toLowerCase().includes(searchValue.toLowerCase()) || item.code.toLowerCase().includes(searchValue.toLowerCase()))
                            .filter((item) => item.category.toLowerCase().includes(indicator.category.toLowerCase()))
                            .map((item) => (
                                <div onClick={() => {onClickChoiseItem(item)}} className={isChoiseItem === item ? "isChoiseItem" : ""} key={item.code}>
                                    <h5>{item.code}</h5>
                                    <p>{item.description}</p>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Menu;