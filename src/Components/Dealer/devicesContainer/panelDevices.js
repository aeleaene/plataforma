import React from "react";

import "../estilos.css";

import BarraLateralDevices from "./barraLateralDevices";
import AddDeviceContainer from "../addDeviceContainer";
import BarraSuperiorDevices from "./barraSuperiorDevices"

const PanelDevices= () => {
    return(
        <div id="app">

        <div className="app-main ">
          <BarraLateralDevices/>
          <div className="main-container ">
            <BarraSuperiorDevices/>
            <AddDeviceContainer/>
          </div>
        </div>
        </div>
    )
}

export default PanelDevices;