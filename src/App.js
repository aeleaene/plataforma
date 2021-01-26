import React from 'react';
import * as s from './App.styles';

//Componentes
import BarraLateral from './Components/BarraLateral/BarraLateral';

import Login from './Components/LogIn/Login';

import Monitor from './Components/ContenidoMonitor/Monitor';
import BarraInferior from './Components/BarraInferior/BarraInferior';

function App() {
  return (
    <s.App>

      <Login/>

      {/*<s.content_box>
        
        <s.menu_izquierdo>
          <BarraLateral/>
        </s.menu_izquierdo>

        <s.contenido_derecho>
          <Monitor />
          <BarraInferior/>
        </s.contenido_derecho>
      
      </s.content_box>*/}
    </s.App>
  );
}

export default App;



