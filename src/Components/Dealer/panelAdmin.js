import react from "react";

import "./estilos.css";
import BarraSuperiorAdmin from "./barraSuperiorAdmin";
import BarraLateral from "./barraLateral";
import MainContainerBox from "./mainContainerBox";

import AddUserContainer from "./addUserContainer";
import AddDeviceContainer from "./addDeviceContainer";
import AddCardContainer from "./addCardContainer";
import ChangeIMEIContainer from "./changeIMEIContainer";
import FunctionsContainer from "./FunctionsContainer";

const PanelAdmin = () => {
  return (
    <div id="app">
      <div className="app-main ">
        <BarraLateral/>
        <div className="main-container ">
          <BarraSuperiorAdmin/>
          <MainContainerBox/>
        </div>
      </div>

      

      </div>
  );
};

export default PanelAdmin;
