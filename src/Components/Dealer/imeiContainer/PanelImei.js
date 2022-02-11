import React from "react";

import "../estilos.css";


import BarraLateralImei from "./barraLateralImei";
import BarraSuperiorImei from "./barraSuperiorImei"
import ChangeIMEIContainer from "../changeIMEIContainer";

const PanelImei= () => {
    return(
        <div id="app">

        <div className="app-main ">
          <BarraLateralImei/>
          <div className="main-container ">
            <BarraSuperiorImei/>
            <ChangeIMEIContainer/>
          </div>
        </div>
        </div>
    )
}

export default PanelImei;