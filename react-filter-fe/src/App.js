import React, { useState } from 'react';
import ButtonFilter from './components/ButtonFilter';
import RangeFilter from './components/RangeFilter';
import Button from './components/Button';
import './App.css';
import imageFrom from './assets/Quilataje/pequeno.png'
import imageTo from './assets/Quilataje/grande.png'

function App() {

  const filterNames = {
    forma: "FORMA",
    color: "COLOR",
    claridad: "CLARIDAD",
    corte: "CORTE",
    quilataje: "QUILATAJE",
    precio: "PRECIO"
  }

  const rangeValues = {
    min: 10,
    max: 100
  }

  const priceRangeValues = {
    min: 200,
    max: 5000000
  }

  //Set of states
  const [forma, setForma] = useState('not selected');
  const [color, setColor] = useState('not selected');
  const [clarity, setClarity] = useState('not selected');
  const [cut, setCut] = useState('not selected');

  const [carat, setCarat] = useState('not selected');
  const [price, setPrice] = useState('not selected');

  function changeForma(receivedForma){
    setForma(receivedForma);
  }

  function changeColor(receivedColor){
    setColor(receivedColor);
  }

  function changeClarity(receivedClarity){
    setClarity(receivedClarity);
  }

  function changeCut(receivedCut){
    setCut(receivedCut);
  }

  function changeCarat(receivedCarat){
    setCarat(receivedCarat);
  }

  function changePrice(receivedPrice){
    setPrice(receivedPrice);
  }

  const handleSubmit = () => {
    const filters = {
      forma: forma,
      color: color,
      claridad: clarity,
      corte: cut,
      quilataje: carat,
      precio: price
    }
    console.table(filters);
  }

  function wipeFilters() {
    setForma('not selected');
    setColor('not selected');
    setClarity('not selected');
    setCut('not selected');
    setCarat('not selected');
    setPrice('not selected');
    const filters = {
      forma: forma,
      color: color,
      claridad: clarity,
      corte: cut,
      quilataje: carat,
      precio: price
    }
    console.table(filters);
  };



  return (
    <div className="main-container">
      <div className="left-filters">
        <ButtonFilter stateChanger={changeForma} optionSelected={forma} title={filterNames.forma}></ButtonFilter>
        <ButtonFilter stateChanger={changeColor} optionSelected={color} title={filterNames.color}></ButtonFilter>
        <ButtonFilter stateChanger={changeClarity} optionSelected={clarity} title={filterNames.claridad}></ButtonFilter>
      </div>
      <div className="right-filters">
        <ButtonFilter stateChanger={changeCut} optionSelected={cut} title={filterNames.corte} ></ButtonFilter>
        <RangeFilter stateChanger={changeCarat} optionSelected={carat} title={filterNames.quilataje} from={rangeValues.min} to={rangeValues.max} imageFrom={imageFrom} imageTo={imageTo}/>
        <RangeFilter stateChanger={changePrice} optionSelected={price} title={filterNames.precio} from={priceRangeValues.min} to={priceRangeValues.max} append={"$"} imageFrom={null} imageTo={null}/>
      </div>
      <div className="buttons">
        <Button label="BUSCAR" color="#1724ab" onClick={handleSubmit} fontColor="#ffffff"/> 
        <Button label="LIMPIAR FILTROS" color="#ffffff" onClick={wipeFilters} fontColor="#1724ab"/>
      </div>
    </div>
  );
}

export default App;
