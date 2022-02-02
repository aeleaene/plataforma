import React from "react";
import "../estilos.css";
import BarraLateralUsers from "./barraLateralUsers";
import AddUserContainer from "../addUserContainer";
import BarraSuperiorUsers from "./barraSuperiorUsers"

const PanelUsers = () => {
    return(
        <div id="app">

        <div className="app-main ">
          <BarraLateralUsers/>
          <div className="main-container ">
            <BarraSuperiorUsers/>
            <AddUserContainer/>
          </div>
        </div>
        </div>
    )
}

export default PanelUsers;