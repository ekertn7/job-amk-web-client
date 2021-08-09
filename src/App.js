import React from "react"
import axios from "axios"

import Popup from "./components/Popup"
import Menu from "./components/Menu"
import Card from "./components/Card"

function App() {
  const [items, setItems] = React.useState([]);
  const [indicators, setIndicators] = React.useState([]);
  const [cards, setCards] = React.useState([]);
  const [menus, setMenus] = React.useState([]);
  const [cardId, setCardId] = React.useState([]);
  const [isPopupOpened, setIsPopupOpened] = React.useState(false);
  const [isChoiseItem, setIsChoiseItem] = React.useState('');
  const [isChoiseMenu, setIsChoiseMenu] = React.useState('01');
  const [searchValue, setSearchValue] = React.useState('');
  const popupTitle = 'Вышло обновление сервиса!';
  const popupContent = 'Здесь отобразится текст уведомления, который пользователь будет видеть в момент вывода popup на экран. При закрытиии, уведомление будет повторно отображаться на экране через определенный промежуток времени.'

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  }

  const onClickChoiseItem = (item) => {
    setIsChoiseItem(item);
    setCardId(item.cardId);
    // setSearchValue(item.code);
  }

  const onClickChoiseMenu = (menu) => {
    setIsChoiseMenu(menu.id);
  }

  // console.log(items)

  React.useEffect(() => {
    axios.get("https://60f13ced38ecdf0017b0fb06.mockapi.io/amk-items").then((response) => {
      setItems(response.data);
    })
    axios.get("https://60f13ced38ecdf0017b0fb06.mockapi.io/amk-indicators").then((response) => {
      setIndicators(response.data);
    })
    axios.get("https://60f13ced38ecdf0017b0fb06.mockapi.io/amk-cards").then((response) => {
      setCards(response.data);
    })
    axios.get("https://60f13ced38ecdf0017b0fb06.mockapi.io/amk-menus").then((response) => {
      setMenus(response.data);
    })
  }, []);

  return (
    <div className="wrapper clear">
      <ul className="menuBlock">
        {menus
          .map((menu) => (
            <li key={menu.id} onClick={() => onClickChoiseMenu(menu)} className={isChoiseMenu === menu.id ? "choised" : ""}>
              <img src={isChoiseMenu === menu.id ? menu.imgActive : menu.img} alt={menu.name} />
              <p>{menu.name}</p>
            </li>
          ))
        }
      </ul>
      <div className={isChoiseItem ? "leftWrapper minLeftWrapper" : "leftWrapper"}>
        <h2 onClick={() => setIsPopupOpened(true)} >Индикаторы мониторинга</h2>
        <div className="searchBlock">
          <img src="/img/search.svg" alt="Поиск" />
          <input onChange={onChangeSearchValue} value={searchValue} type="text" maxLength="30" placeholder="Поиск..." />
          <button onClick={() => setSearchValue("")} style={searchValue ? {display: "block"} : {display: "none"}} title="Очистить поиск"><span></span></button>
        </div>
        <Menu 
          items={items}
          indicators={indicators}
          searchValue={searchValue}
          onClickChoiseItem={(item) => onClickChoiseItem(item)}
          isChoiseItem={isChoiseItem}
        />
        {/* {items
          .filter((item, i, a) => a.indexOf(item) === i)
          .map((item) => (
            <p>{item.category}</p>
          ))
        } */}
      </div>
      
      <div className="content">
        {isChoiseItem ? (
          <div>
            <h1>{isChoiseItem.code}</h1>
            <p className="describeText">{isChoiseItem.description}</p>
            <div className="contentPapa">
              {cards
                  .filter((card) => cardId.includes(card.id))
                  .map((card) => (
                    <Card
                      key={card.id}
                      // class={card.class}
                      type={card.type}
                      text={card.text}
                    />
                  )
                )
              }
              
              {/* <div className="card">
                <button className="buttonMoreInfo">Сформировать отчет</button>
              </div> */}
              
            </div>
          </div>
          ):(
          <div className="chioseIndicator">
            <img src="/img/sberkot_anim-512px-29.gif" alt="Стикер сберкот ест попкорн"></img>
            <h3>Выберите индикатор мониторинга</h3>
          </div>
          )
        }
        
      </div>

      {isPopupOpened && 
        <Popup 
          onClickPopupClose={() => setIsPopupOpened(false)}
          popupTitle={popupTitle}
          popupContent={popupContent}
        />
      }
      
    </div>
  );
}

export default App;