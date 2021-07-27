import React from "react"
import axios from "axios"

import Popup from "./components/Popup"
import Menu from "./components/Menu"

// import Drawer from "./components/Drawer"

function App() {
  const [items, setItems] = React.useState([]);
  const [indicators, setIndicators] = React.useState([]);
  const [isPopupOpened, setIsPopupOpened] = React.useState(false);
  const [isChoiseItem, setIsChoiseItem] = React.useState('');
  const [searchValue, setSearchValue] = React.useState('');

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  }

  const onClickChoiseItem = (item) => {
    // console.log(item.code)
    setIsChoiseItem(item);
    // setSearchValue(item.code);
  }

  console.log(items)

  React.useEffect(() => {
    axios.get("https://60f13ced38ecdf0017b0fb06.mockapi.io/amk-items").then((response) => {
      setItems(response.data);
    })
    axios.get("https://60f13ced38ecdf0017b0fb06.mockapi.io/amk-indicators").then((response) => {
      setIndicators(response.data);
    })
  }, []);

  return (
    <div className="wrapper clear">
      <div className={isChoiseItem ? "leftWrapper minLeftWrapper" : "leftWrapper"}>
        <h2 onClick={() => setIsPopupOpened(true)} >Индикаторы мониторинга</h2>
        <div className="searchBlock">
          <img src="/img/search.svg" alt="Поиск" />
          <input onChange={onChangeSearchValue} value={searchValue} type="text" maxLength="30" placeholder="Поиск..." />
          <button onClick={() => setSearchValue("")} style={searchValue ? {display: "block"} : {display: "none"}} className="buttonClose" title="Очистить поиск"><span></span></button>
        </div>
        <Menu 
          // key={items}
          items={items}
          indicators={indicators}
          searchValue={searchValue}
          onClickChoiseItem={(item) => onClickChoiseItem(item)}
          isChoiseItem={isChoiseItem}
        />
      </div>
      
      <div className="content">
        {isChoiseItem ? (
          <div>
            <h1>{isChoiseItem.code}</h1>
            <p className="describeText">{isChoiseItem.description}</p>
            <div className="contentPapa">
              <div className="card">
                <input type="text" placeholder="Логин EKS"/>
                <p>Логин EKS</p>
              </div>
              <div className="card">
                <input type="password" placeholder="Логин EKS"/>
                <p>Пароль EKS</p>
              </div>
              <div className="card">
                <input type="text" placeholder="Логин EKS"/>
                <p>ID транзакции</p>
              </div>
              <div className="card">
                <input type="text" placeholder="Логин EKS"/>
                <p>Что-то еще</p>
              </div>
              <div className="card">
                <input type="text" placeholder="Логин EKS"/>
                <p>И еще что-то</p>
              </div>
              <div className="card">
                <button className="buttonMoreInfo">Сформировать отчет</button>
              </div>
              
            </div>
          </div>
          ):(
          <div className="chioseIndicator">
            <img src="/img/sberkot_anim-512px-32.gif" alt="Стикер выберите индикатор"></img>
            <h3>Выберите индикатор мониторинга</h3>
          </div>
          )
        }
        
      </div>

      {isPopupOpened && 
        <Popup 
          onClickPopupClose={() => setIsPopupOpened(false)}
        />
      }

      {/* <a>Отчеты</a>
          <a>Источники</a>
          <a>Администрирование</a> */}
      
    </div>
  );
}

export default App;