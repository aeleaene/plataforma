import React from "react";
import "../estilos.css";

const BarraLateralDevices = () => {
  const Link = require("react-router-dom").Link;

  return (
    <div className="sidebar-container has-logo">
      <div className="header-logo bg">
        <div
          className="logo"
          style={{
            backgroundImage:
              'url("https://www.protrack365.com/local/protrack365.com/images/v2/header_logo.png")',
          }}
        >
          <img src="https://www.protrack365.com/local/protrack365.com/images/v2/header_logo.png" />
        </div>{" "}
        <div className="collapse-btn bg" />{" "}
        <div
          className="user-portrait bg"
          style={{
            backgroundImage:
              'url("https://image2.protrack365.com/portrait/17/177073_201906240115458_s.jpg")',
          }}
        />{" "}
        <div className="user-name mt10 pointer">ANDTRACK</div>{" "}
        <div className="user-option">
          <div className="el-row is-justify-center el-row--flex">
            <div className="user-option-item password el-col el-col-6">
              <div>
                <i className="base-icon user-o-i-icon" />
                Contraseña
              </div>
            </div>{" "}
            <div className="user-option-item profile el-col el-col-6">
              <div>
                <i className="base-icon user-o-i-icon" />
                Mi Perfil
              </div>
            </div>{" "}
            <div className="user-option-item logout el-col el-col-6">
              <a href="/dealer/?logout=1">
                <i className="base-icon user-o-i-icon" />
                Salir
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="el-scrollbar" style={{ height: "calc(100% - 330px)" }}>
        <div
          className="scrollbar-wrapper el-scrollbar__wrap"
          style={{ marginBottom: "-6px", marginRight: "-6px" }}
        >
          <div className="el-scrollbar__view">
            <ul role="menubar" className="h-menu-box el-menu">
              <li
                role="menuitem"
                tabIndex={-1}
                className="el-menu-item"
                style={{ paddingLeft: "20px" }}
              >
                {" "}
                <Link
                className="el-menu-item"
                  to={{
                    pathname: "/dealer2/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }}
                >
                  <i className="menu-icon dashboard-icon" />{" "}
                  <span>Visión general</span>
                </Link>
              </li>
              <li
                role="menuitem"
                tabIndex={-1}
                className="el-menu-item"
                style={{ paddingLeft: "20px" }}
              >
                <Link
                className="el-menu-item"
                  to={{
                    pathname: "/dealer2/bussiness",
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }}
                >
                  <i className="menu-icon business-icon" />{" "}
                  <span>Negocios</span>
                </Link>
              </li>
              <li
                role="menuitem"
                tabIndex={-1}
                className="el-menu-item mt10 menu-border"
                style={{ paddingLeft: "20px" }}
              >
                <Link
                className="el-menu-item"
                  to={{
                    pathname: "/dealer2/adduser",
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }}
                >
                  <i className="menu-icon add-user-icon" />{" "}
                  <span>Añadir al cliente</span>
                </Link>
              </li>
              <li
              
                role="menuitem"
                tabIndex={-1}
                className="el-menu-item is-active"
                style={{ paddingLeft: "20px" }}
              >
                <Link
                className="el-menu-item is-active"
                  to={{
                    pathname: "/dealer2/adddevice",
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }}
                >
                  <i className="menu-icon add-device-icon" />{" "}
                  <span>Añadir Objetivos</span>
                </Link>
              </li>
              <div className="menu-border" />{" "}
              <div>
                <div>
                  <li
                    role="menuitem"
                    tabIndex={-1}
                    className="el-menu-item"
                    style={{ paddingLeft: "20px" }}
                  >
                    <Link
                    className="el-menu-item"
                      to={{
                        pathname: "/dealer2/movecard",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }}
                    >
                      <i className="menu-icon card-icon" />{" "}
                      <i className="el-icon-arrow-right function-right-icon" />
                      <span>Tarjeta</span>
                    </Link>
                  </li>
                </div>{" "}
              </div>{" "}
              <div className="menu-border" />
              <li
                role="menuitem"
                tabIndex={-1}
                className="el-menu-item"
                style={{ paddingLeft: "20px" }}
              >
                <Link
                className="el-menu-item"
                  to={{
                    pathname: "/dealer2/changeimei",
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }}
                >
                  <i className="menu-icon menu-changeimei" />{" "}
                  <span>Cambiar IMEI</span>
                </Link>
              </li>
              <div className="function-menu-item">
                <li
                  role="menuitem"
                  tabIndex={-1}
                  className="el-menu-item"
                  style={{ paddingLeft: "20px" }}
                >
                  <Link
                  className="el-menu-item"
                    to={{
                      pathname: "/dealer2/functions",
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }}
                  >
                    <i className="menu-icon function-icon p-event-none" />
                    <i className="el-icon-arrow-right function-right-icon p-event-none" />
                    <span className="p-event-none">Funciones</span>
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className="el-scrollbar__bar is-horizontal">
          <div
            className="el-scrollbar__thumb"
            style={{ transform: "translateX(0%)" }}
          />
        </div>
        <div className="el-scrollbar__bar is-vertical">
          <div
            className="el-scrollbar__thumb"
            style={{ height: "85.396%", transform: "translateY(0%)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default BarraLateralDevices;
