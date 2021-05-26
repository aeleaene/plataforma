import React, {useState} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//Componentes
import Login from './Components/LogIn/Login';
import Principal from './Components/Principal/Principal';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
import AgregarDispositivo from './Components/agregarDispositivos/agregarDispositivos';
import T from './Components/agregarDispositivos/t';
import AgregarUsuario from './Components/agregarUsuarios/agregarUsuarios';

import { getSessionCookie, SessionContext } from './sessions';


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
        <Route exact={true} path="/dealer2/" component={AdminDashboard} />
        <Route exact={true} path="/" component={Login}/>
        <Route path="/mapa" component={Principal}/>
        <Route exact={true} path="/dealer2/adddevice" component={AgregarDispositivo} />
        <Route exact={true} path="/dealer2/adduser" component={AgregarUsuario} />
        <Route exact={true} path="/t" component={T} />
    </Switch> 
    </Router>
  );
}

export default App;



