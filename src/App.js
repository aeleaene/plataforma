import React from 'react';
import * as s from './App.styles';

//Componentes
import BarraLateral from './Components/BarraLateral/BarraLateral';
import MainView from './Components/MainView/MainView';
import BarraInferior from './Components/BarraInferior/BarraInferior';

function App() {
  return (
    <s.App>
    <BarraLateral />   
    <MainView /> 
    <BarraInferior />
    </s.App>
  );
}

export default App;

