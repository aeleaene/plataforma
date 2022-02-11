import React from "react";

import "./estilos.css";

const FunctionsContainer = () => {
    return(
        <div className="funtions h100b functions-page"><h3 className="block-titlebar">Funciones</h3> <div className="has-titlebar-content white-bg"><div className="functions-cont"><div className="function-comp"><div className="func-filter-box">{/**/} {/**/} {/**/}</div> <div className="function-m-scroll el-scrollbar" style={{height: '460px'}}><div className="el-scrollbar__wrap" style={{marginBottom: '-6px', marginRight: '-6px'}}><div className="el-scrollbar__view"><div className="function-cont"><div className="function-type-imei"><div className="func-item-title func-item-type">IMEI
        <i className="ml5 el-icon-arrow-down" /></div> <div><button type="button" className="el-button func-item-btn el-button--default function-menu-item " title="Crear una cuenta imei por lote">{/**/}{/**/}<span><i className="menu-icon func-batchcreateaccount" /> 
            Crear una cuenta imei por lote
          </span></button></div></div>{/**/}{/**/}{/**/}{/**/}{/**/}{/**/}{/**/}{/**/}<div className="function-type-other"><div className="func-item-title func-item-type">Otro
        <i className="ml5 el-icon-arrow-down" /></div> <div><button type="button" className="el-button func-item-btn el-button--default function-menu-item " title="Clave API de Google Maps">{/**/}{/**/}<span><i className="menu-icon func-googleApiKey" /> 
            Clave API de Google Maps
          </span></button></div></div></div></div></div><div className="el-scrollbar__bar is-horizontal"><div className="el-scrollbar__thumb" style={{transform: 'translateX(0%)'}} /></div><div className="el-scrollbar__bar is-vertical"><div className="el-scrollbar__thumb" style={{transform: 'translateY(0%)'}} /></div></div></div></div></div></div>
    );
}

export default FunctionsContainer;