import React from 'react';
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

  const handleClick = () => {
    console.log("Print: ");
  }

  let info;

  const gatherInfo = (value) => {
    info.push(value);
  }

  return (
    <div className="main-container">
      <div className="left-filters">
        <ButtonFilter title={filterNames.forma} gatherInfo={gatherInfo}></ButtonFilter>
        <ButtonFilter title={filterNames.color} gatherInfo={gatherInfo}></ButtonFilter>
        <ButtonFilter title={filterNames.claridad} gatherInfo={gatherInfo}></ButtonFilter>
      </div>
      <div className="right-filters">
        <ButtonFilter title={filterNames.corte} gatherInfo={gatherInfo}></ButtonFilter>
        <RangeFilter title={filterNames.quilataje} gatherInfo={gatherInfo} value="none" onChange="none" from={rangeValues.min} to={rangeValues.max} imageFrom={imageFrom} imageTo={imageTo}/>
        <RangeFilter title={filterNames.precio} gatherInfo={gatherInfo} value="none" onChange="none" from={priceRangeValues.min} to={priceRangeValues.max} imageFrom={null} imageTo={null}/>
      </div>
      <div className="buttons">
        <Button label="BUSCAR" color="#1724ab" onClick={handleClick.bind(this)} fontColor="#ffffff"/> 
        <Button label="LIMPIAR FILTROS" color="#ffffff" fontColor="#1724ab"/>
      </div>
    </div>
  );
}

export default App;
