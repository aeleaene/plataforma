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
import Recorrido from './Components/Recorrido/Recorrido';

import PanelAdmin from './Components/Dealer/panelAdmin';
import BussinessContainer from './Components/Dealer/bussinessContainer/panelBussiness';
import PanelUsers from './Components/Dealer/usersContainer/panelUsers';
import PanelDevices from './Components/Dealer/devicesContainer/panelDevices';
import PanelCard from './Components/Dealer/cardContainer/panelCard';
import PanelImei from './Components/Dealer/imeiContainer/PanelImei';
import PanelFunctions from './Components/Dealer/functionsContainer/panelFunctions'


import {MenuContext} from './Context/MenuContext';
import PanelBussiness from './Components/Dealer/bussinessContainer/panelBussiness';
import ShareMap from './Components/ShareMap/ShareMap';

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
        <Route exact={true} path="/dealer2/" component={PanelAdmin} />
        <Route exact={true} path="/dealer2/bussiness" component={PanelBussiness} />
        <Route exact={true} path="/dealer2/adduser" component={PanelUsers} />
        <Route exact={true} path="/dealer2/adddevice" component={PanelDevices} />
        <Route exact={true} path="/dealer2/movecard" component={PanelCard} />
        <Route exact={true} path="/dealer2/changeimei" component={PanelImei} />
        <Route exact={true} path="/dealer2/functions" component={PanelFunctions} />

        <Route exact={true} path="/recorrido" component={Recorrido} />
        <Route exact={true} path="/" component={Login}/>
        <MenuContext>
          <Route path="/mapa" component={Principal}/>
        </MenuContext>
        <Route exact={true} path="/dealer2/" component={AdminDashboard} />
        <Route exact={true} path="/recorrido" component={Recorrido} />
        <Route exact={true} path="/" component={Login}/>
        <Route exact={true} path="/sharemap" component={ShareMap} />
        <MenuContext>
          <Route path="/mapa" component={Principal}/>
        </MenuContext>
        <Route exact={true} path="/dealer2/adddevice" component={AgregarDispositivo} />
        <Route exact={true} path="/dealer2/adduser" component={AgregarUsuario} />
        <Route exact={true} path="/t" component={T} />
    </Switch> 
    </Router>
  );
}

export default App;



