import NavScrollExample from "./commponts/navbar";
import Header from "./commponts/header"
import React, { useState } from "react";
import { Container } from 'react-bootstrap';
import Catgory from './commponts/catgory';
import Items from './commponts/items';
import data from './data';
function App() {
  const[ itemData, setitemData] = useState(data);
  const allCat =['الكل', ...new Set (data.map((i)=>i.catgory))]

  console.log(allCat)
  const catgoryFilter = (cat)=>{
    if (cat === 'الكل'){
      setitemData(data)
    }else{
      const newArr = data.filter((item)=> item.catgory===cat)
      setitemData(newArr)
    }
   
  }

  const filterSearch =(word)=>{
    if(word !==""){
      const newArr = data.filter((item)=> item.title === word)
      setitemData(newArr)
   
    }
  }

  return (
    <div className="App"> 
    <NavScrollExample  filterSearch={filterSearch}/>
   <Container>
    <Header />
    <Catgory allCat={allCat} catgoryFilter={catgoryFilter}/>
    
    <Items myData={itemData} />
   </Container>

    </div>
  );
}

export default App;
