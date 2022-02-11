import React from "react";
import "../estilos.css";

import BarraLateralBussiness from "./barraLateralBussiness";
import BussinessContainer from "../bussinessContainerBox";
import BarraSuerirorBussiness from "./barraSuperiorBussiness";

const PanelBussiness = () => {
    return(
        <div id="app">

        <div className="app-main ">
          <BarraLateralBussiness/>
          <div className="main-container ">
            <BarraSuerirorBussiness />
            <BussinessContainer/>
          </div>
        </div>
  
        
  
        </div>
    );
}

export default PanelBussiness;