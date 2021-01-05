import React from 'react';
import * as s from './App.styles';

//Componentes
import BarraLateral from './Components/BarraLateral/BarraLateral';

import Monitor from './Components/Monitor/Monitor';
import BarraInferior from './Components/BarraInferior/BarraInferior';

function App() {
  return (
    <s.App>
      <s.content_box>

        <s.menu_izquierdo>
          <BarraLateral/>
        </s.menu_izquierdo>

        <s.contenido_derecho>
          <BarraInferior/>
        </s.contenido_derecho>
      
      </s.content_box>
    </s.App>
  );
}

export default App;



