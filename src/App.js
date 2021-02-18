import React from 'react';
import * as s from './App.styles';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//Componentes
import Login from './Components/LogIn/Login';
import Principal from './Components/Principal/Principal';

function App() {
  return (
    <Router>        
       { /* <s.content_box>
        <s.menu_izquierdo>
          <BarraLateral/>
        </s.menu_izquierdo>

        <s.contenido_derecho>
          <ContenidoMonitor />
          <BarraInferior/>
        </s.contenido_derecho>
      
       </s.content_box> */}
      
     <Switch>
        <Route exact={true} path="/" component={Login}/>
        <Route path="/Mapa" component={Principal}/>
     </Switch> 
    </Router>

  );
}

export default App;



