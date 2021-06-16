import { useEffect, useState } from "react";

import MainDetail from "./components/MainDetail";
import {CRIPTO_LIST} from './constants'
import{STATUS_UPDATES} from'./constants' 
import SideListItem from "./components/SideListItem"
import NewsCard from './components/NewsCard'

function App() {
  // This piece of state keeps the id from the selected coin to be displayed in the MainDetail component
  const [selectedCripto, setSelectedCripto] = useState(null);
  const [cryptoList, setCryptoList] = useState([]);
  const [statusUpdates, setStatueUpdates] = useState([])
  useEffect(() => {
    fetch(CRIPTO_LIST).then(resp => resp.json()).then(setCryptoList)
    fetch(STATUS_UPDATES).then(resp => resp.json()).then(setStatueUpdates)
  },[])






  // This function gives you whether a coin has been selected or not
  // You will need this for the SideListItem component
  function isSelectedCripto(id) {
    return selectedCripto === id;
  }
  return (
    /* These (<> </>) are called React Fragments, and allow us to return more than one top element */
    <>
      <aside className="side-list">
        {cryptoList.map(item => <SideListItem  isSelectedCripto={isSelectedCripto} item={item} selectCripto={setSelectedCripto} selectedCripto={selectedCripto}/>)}
  
      </aside>
      <main className="main-detail">
        {selectedCripto
          ? <MainDetail selectedCripto={selectedCripto} cryptoList={cryptoList} />
          : "Select a coin bro!"};
       
      </main>
     
    </>
  );
}

export default App;
