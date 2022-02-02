import React from "react";

import "../estilos.css";


import BarraLateralFunctions from "./barraLateralFunctions";
import BarraSuperiorFunctions from "./barraSuperiorFunctions"
import FunctionsContainer from "../FunctionsContainer";

const PanelFunctions= () => {
    return(
        <div id="app">

        <div className="app-main ">
          <BarraLateralFunctions/>
          <div className="main-container ">
            <BarraSuperiorFunctions/>
            <FunctionsContainer/>
          </div>
        </div>
        </div>
    )
}
export default PanelFunctions;