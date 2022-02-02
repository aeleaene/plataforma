import React from "react";

import "../estilos.css";

import BarraLateralCard from "./barraLateralCard";
import BarraSuperiorCard from "./barraSuperiorCard"
import AddCardContainer from "../addCardContainer";

const PanelCard= () => {
    return(
        <div id="app">

        <div className="app-main ">
          <BarraLateralCard/>
          <div className="main-container ">
            <BarraSuperiorCard/>
            <AddCardContainer/>
          </div>
        </div>
        </div>
    )
}

export default PanelCard;