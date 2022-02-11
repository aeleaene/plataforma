import React from "react";
import "../estilos.css";

const BarraSuperiorImei = () => {
  const Link = require("react-router-dom").Link;
    return(
<div className="header-top"><header className="header-box clearfix"><div className="header-content"><Link to={{pathname: '/mapa', target:'_blank', rel:'noopener noreferrer'}} className="monitor-btn">
              <i className="base-icon" />
              Monitor
              </Link>{" "}<div className="search-box clearfix"><div aria-haspopup="listbox" role="combobox" aria-owns="el-autocomplete-8882" className="el-autocomplete header-search fl"><div className="el-input el-input--prefix el-input--suffix">{/**/}<input type="text" autoComplete="off" valuekey="value" popperclass="h-search-popper" placeholder="IMEI/Cuenta/Cliente" fetchsuggestions="function () { [native code] }" triggeronfocus="true" debounce={300} placement="bottom-start" popperappendtobody="true" title="Haga doble clic Ctrl" className="el-input__inner" role="textbox" aria-autocomplete="list" aria-controls="id" aria-activedescendant="el-autocomplete-8882-item--1" /><span className="el-input__prefix"><i className="el-input__icon search-icon base-icon" /></span>{/**/}{/**/}{/**/}</div><div role="region" className="el-autocomplete-suggestion el-popper h-search-popper" style={{display: 'none'}}><div className="el-scrollbar"><div className="el-autocomplete-suggestion__wrap el-scrollbar__wrap" style={{marginBottom: '-6px', marginRight: '-6px'}}><ul className="el-scrollbar__view el-autocomplete-suggestion__list" role="listbox" id="el-autocomplete-8882" /></div><div className="el-scrollbar__bar is-horizontal"><div className="el-scrollbar__thumb" style={{transform: 'translateX(0%)'}} /></div><div className="el-scrollbar__bar is-vertical"><div className="el-scrollbar__thumb" style={{transform: 'translateY(0%)'}} /></div></div></div></div> <button type="button" className="el-button search-btn device-btn fl el-button--default">{/**/}{/**/}<span><i className="base-icon" />Dispositivo</span></button> <button type="button" className="el-button search-btn user-btn fl el-button--default">{/**/}{/**/}<span><i className="base-icon" />Cliente
                </span></button></div> <div className="header-option"><a href="/dealer" target="_blank"><i className="option-btn go-back-old base-icon" /></a> {/**/} <div className="el-badge item"><i className="option-btn base-icon message-icon" /><sup className="el-badge__content el-badge__content--undefined is-fixed is-dot" style={{}} /></div> <span><div role="tooltip" id="el-popover-7181" aria-hidden="true" className="el-popover el-popper" tabIndex={0} style={{display: 'none'}}>{/**/}<ul className="header-set-ul header-dpdown"><li><i className="header-set-li-icon base-icon set-icon" />Preferencias</li> <li><i className="header-set-li-icon el-icon-bell" />Notificacion de la aplicación</li> <li><i className="header-set-li-icon iconfont font-icon-key" />Clave API de Google Maps</li></ul> </div><span className="el-popover__reference-wrapper"><div className="header-set el-popover__reference" aria-describedby="el-popover-7181" tabIndex={0}><i className="option-btn base-icon set-icon" /> <i className="icon-more" /></div></span></span> <span><div role="tooltip" id="el-popover-1307" aria-hidden="true" className="el-popover el-popper header-lang" tabIndex={0} style={{width: '110px', display: 'none'}}>{/**/}<ul className="lang-list header-dpdown"><li><i style={{backgroundImage: 'url("/images/country/en-us.svg")'}} />
                      English
                    </li><li><i style={{backgroundImage: 'url("/images/country/es-es.svg")'}} />
                      Español
                    </li><li><i style={{backgroundImage: 'url("/images/country/pt-pt.svg")'}} />
                      Português
                    </li><li><i style={{backgroundImage: 'url("/images/country/pt-br.svg")'}} />
                      Português
                    </li><li><i style={{backgroundImage: 'url("/images/country/fr-fr.svg")'}} />
                      Français
                    </li><li><i style={{backgroundImage: 'url("/images/country/de-de.svg")'}} />
                      Deutsch‎
                    </li><li><i style={{backgroundImage: 'url("/images/country/it-it.svg")'}} />
                      Italiano
                    </li><li><i style={{backgroundImage: 'url("/images/country/nl-nl.svg")'}} />
                      Nederlands
                    </li><li><i style={{backgroundImage: 'url("/images/country/no-no.svg")'}} />
                      Norsk
                    </li><li><i style={{backgroundImage: 'url("/images/country/ar-sa.svg")'}} />
                      عربية‎
                    </li><li><i style={{backgroundImage: 'url("/images/country/fa-fa.svg")'}} />
                      ارسی‎
                    </li><li><i style={{backgroundImage: 'url("/images/country/ja-jp.svg")'}} />
                      日本語
                    </li><li><i style={{backgroundImage: 'url("/images/country/vi-vn.svg")'}} />
                      Tiếng Việt
                    </li><li><i style={{backgroundImage: 'url("/images/country/km-kh.svg")'}} />
                      ជនជាតិខ្មែរ
                    </li><li><i style={{backgroundImage: 'url("/images/country/th-th.svg")'}} />
                      ภาษาไทย
                    </li><li><i style={{backgroundImage: 'url("/images/country/in-id.svg")'}} />
                      Bahasa Indonesia
                    </li><li><i style={{backgroundImage: 'url("/images/country/bn-bd.svg")'}} />
                      বাংলা
                    </li><li><i style={{backgroundImage: 'url("/images/country/zh-cn.svg")'}} />
                      简体中文
                    </li></ul> </div><span className="el-popover__reference-wrapper"><div className="user-lang bg el-popover__reference" aria-describedby="el-popover-1307" tabIndex={0} style={{backgroundImage: 'url("/images/country/es-es.svg")'}}><i className="icon-more es-es" /></div></span></span> <span><div role="tooltip" id="el-popover-2123" aria-hidden="true" className="el-popover el-popper header-portrait" tabIndex={0} style={{width: '113px', display: 'none'}}>{/**/}<ul className="portrait-list header-dpdown"><li><i className="base-icon profile-icon" />Mi Perfil</li> <li className="liner"><i className="base-icon password-icon" />Contraseña</li> <li><i className="base-icon doc-icon" />Manual de usuario</li> <li className="liner"><i className="base-icon loginlog-icon" />Registro de inicio de sesión</li> <li><a id="exit" href="/dealer/?logout=1"><i className="base-icon logout-icon" />Salir</a></li></ul> </div><span className="el-popover__reference-wrapper"><div className="user-portrait bg el-popover__reference" aria-describedby="el-popover-2123" tabIndex={0} style={{backgroundImage: 'url("https://image2.protrack365.com/portrait/17/177073_201906240115458_s.jpg")'}}><i className="icon-more" /></div></span></span></div></div> <div className="el-dialog__wrapper search-dialog" style={{display: 'none'}}><div role="dialog" aria-modal="true" aria-label="dialog" className="el-dialog" style={{marginTop: '8vh', width: '900px'}}><div className="el-dialog__header" style={{cursor: 'move'}}><div>
                  Búsqueda
                  <ul className="search-nav clearfix"><li className="active-nav">Dispositivo<i className="el-icon-caret-top" /></li> <li className>Cliente<i className="el-icon-caret-top" style={{display: 'none'}} /></li></ul></div><button type="button" aria-label="Close" className="el-dialog__headerbtn"><i className="el-dialog__close el-icon el-icon-close" /></button></div>{/**/}{/**/}</div></div> <div className="el-dialog__wrapper message-dialog" style={{display: 'none'}}><div role="dialog" aria-modal="true" aria-label="Cupón" className="el-dialog" style={{marginTop: '15vh', width: '500px'}}><div className="el-dialog__header" style={{cursor: 'move'}}><span className="el-dialog__title">Cupón</span><button type="button" aria-label="Close" className="el-dialog__headerbtn"><i className="el-dialog__close el-icon el-icon-close" /></button></div>{/**/}{/**/}</div></div> <div className="el-dialog__wrapper message-dialog" style={{display: 'none'}}><div role="dialog" aria-modal="true" aria-label="Mensaje" className="el-dialog" style={{marginTop: '15vh', width: '900px'}}><div className="el-dialog__header" style={{cursor: 'move'}}><span className="el-dialog__title">Mensaje</span><button type="button" aria-label="Close" className="el-dialog__headerbtn"><i className="el-dialog__close el-icon el-icon-close" /></button></div>{/**/}{/**/}</div></div> <div className="el-dialog__wrapper perference-dialog" style={{display: 'none'}}><div role="dialog" aria-modal="true" aria-label="Preferencias" className="el-dialog" style={{marginTop: '15vh', width: '600px'}}><div className="el-dialog__header" style={{cursor: 'move'}}><span className="el-dialog__title">Preferencias</span><button type="button" aria-label="Close" className="el-dialog__headerbtn"><i className="el-dialog__close el-icon el-icon-close" /></button></div>{/**/}{/**/}</div></div> <div className="el-dialog__wrapper" style={{display: 'none'}}><div role="dialog" aria-modal="true" aria-label="Modificar la contraseña" className="el-dialog" style={{marginTop: '15vh', width: '500px'}}><div className="el-dialog__header" style={{cursor: 'move'}}><span className="el-dialog__title">Modificar la contraseña</span><button type="button" aria-label="Close" className="el-dialog__headerbtn"><i className="el-dialog__close el-icon el-icon-close" /></button></div>{/**/}{/**/}</div></div> <div className="el-dialog__wrapper message-dialog" style={{display: 'none'}}><div role="dialog" aria-modal="true" aria-label="Manual de usuario" className="el-dialog" style={{marginTop: '15vh', width: '500px'}}><div className="el-dialog__header" style={{cursor: 'move'}}><span className="el-dialog__title">Manual de usuario</span><button type="button" aria-label="Close" className="el-dialog__headerbtn"><i className="el-dialog__close el-icon el-icon-close" /></button></div>{/**/}{/**/}</div></div> <div className="el-dialog__wrapper message-dialog" style={{display: 'none'}}><div role="dialog" aria-modal="true" aria-label="Registro de inicio de sesión" className="el-dialog" style={{marginTop: '15vh', width: '900px'}}><div className="el-dialog__header" style={{cursor: 'move'}}><span className="el-dialog__title">Registro de inicio de sesión</span><button type="button" aria-label="Close" className="el-dialog__headerbtn"><i className="el-dialog__close el-icon el-icon-close" /></button></div>{/**/}{/**/}</div></div> <div className="el-dialog__wrapper" style={{display: 'none'}}><div role="dialog" aria-modal="true" aria-label="Mi Perfil" className="el-dialog" style={{marginTop: '15vh', width: '800px'}}><div className="el-dialog__header" style={{cursor: 'move'}}><span className="el-dialog__title">Mi Perfil</span><button type="button" aria-label="Close" className="el-dialog__headerbtn"><i className="el-dialog__close el-icon el-icon-close" /></button></div>{/**/}{/**/}</div></div></header> <div className="page-tabs-box clearfix"><div className="el-col el-col-24"><div className="el-tabs el-tabs--card el-tabs--top"><div className="el-tabs__header is-top"><div className="el-tabs__nav-wrap is-top"><div className="el-tabs__nav-scroll"><div role="tablist" className="el-tabs__nav is-top" style={{transform: 'translateX(0px)'}}><div id="tab-dashboard" aria-controls="pane-dashboard" role="tab" tabIndex={-1} className="el-tabs__item is-top">Visión general</div><div id="tab-changeimei" aria-controls="pane-changeimei" role="tab" aria-selected="true" tabIndex={0} className="el-tabs__item is-top is-active is-closable">Cambiar IMEI<span className="el-icon-close" /></div></div></div></div></div><div className="el-tabs__content"><div role="tabpanel" id="pane-dashboard" aria-labelledby="tab-dashboard" className="el-tab-pane" style={{display: 'none'}} aria-hidden="true" /><div role="tabpanel" id="pane-changeimei" aria-labelledby="tab-changeimei" className="el-tab-pane" /></div></div></div> <ul className="context-menu" style={{left: '0px', top: '0px', display: 'none'}}><li>Recargar</li> <li>Cerrar</li> <li>Cerrar otras pestañas</li> <li>Cierra todas las pestañas</li></ul></div></div>
    )
}

export default BarraSuperiorImei