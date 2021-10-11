import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Monitor from '../Components/ContenidoMonitor/Monitor';


const Router = () => {
    <BrowserRouter>
        <Switch>
            <Route exact={true} path="/Mapa" component={Monitor}/>
        </Switch>
    </BrowserRouter>
}

export default Router;