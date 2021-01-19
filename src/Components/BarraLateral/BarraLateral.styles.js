import styled from '@emotion/styled/macro';
import fondo from '../../assets/images/logo-bg.3cba04d.png';
import menus from '../../assets/images/menus.46a5756.png';

export const mostrar = styled.div`
    display: none;
    :hover{
        display:block;
    }
`

export const menu_caja = styled.div`
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: #001529;
`

export const caja_imagen = styled.div`
    box-sizing: border-box;
    height: 46px;
    width: 46px;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    margin-left: 13px;
    border-radius: 55%;
    text-align: center;
`

export const nombre_cuenta = styled.div`
    text-align: center;
    color: #fff;
    font-size: 12px;
    padding-left: 5px;
    margin-top: 6px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

export const submenu_perfil = styled.div`
    position: absolute;
    display: none;
    top: 20px;
    left: 72px;
    cursor: pointer;
    z-index: 9999;
    background-color: #001529;
`

export const submenu_elemento = styled.div`
    height: 45px;
    line-height: 45px;
    min-width: 150px;
    text-align: left;
    padding: 0 15px;
    font-size: 13.33px;
    position: relative;
    white-space: nowrap;
    transition: all .2s;
    color: #c4c9ce;
    &:hover{
    background-color:#2c3e50; 
    }
`


export const menu_superior = styled.div`
    position: relative;
`

export const redireccionador_activo = styled.a`
    text-decoration: none;
    text-decoration-line: none;
    text-decoration-thickness: initial;
    text-decoration-style: initial;
    text-decoration-color: initial;
`

export const elemento_menu_activo = styled.div`
    transition: border-color .3s,background-color .3s,color .3s;
    box-sizing: border-box;
    height: 60px;
    text-align: center;
    line-height: normal;
    padding: 0;
    color: #ff9934;
    background-color: #233645!important;
`

export const icono_monitor = styled.i`
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    background-repeat: no-repeat;
    background-image: url(${menus});
    height: 24px;
    margin-right: 5px;
    width: 24px;
    text-align: center;
    font-size: 18px;
    vertical-align: middle;
    margin-top: 10px;
    color: inherit;
    background-position: -180px -480px;
    &:hover{
        background-position: -180px -480px;
    }
`

export const texto_elemento_menu = styled.p`
    margin-top: 5px;
    font-size: 10px;
`

export const redireccionador_inactivo = styled.a`
    text-decoration: none;
`

export const elemento_menu_inactivo = styled.div`
    margin: 0;
    list-style: none;
    position: relative;
    white-space: nowrap;
    font-size: 14px;
    cursor: pointer;
    transition: border-color .3s,background-color .3s,color .3s;
    box-sizing: border-box;
    height: 60px;
    text-align: center;
    line-height: normal;
    padding: 0;
    color: #babec1;
    &:hover{
        background-color: #233645!important;
    }
`

export const submenu_reportes_submenu = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    margin: 0;
    padding: 0;
    position: absolute;
    z-index: 9999;
    background-color: #001529;
    top: -20px;
    left: 222px;
    display: none;
`

export const submenu_reportes = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    margin: 0;
    padding: 0;
    position: absolute;
    left: 72px;
    z-index: 9999;
    background-color: #001529;
    top: 0px;
    display: none;
`

export const submenu_reportes_grupo = styled.div`
    text-align: left;
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    border-top: 1px solid #233645;
    color: #a0a0a0;
    padding: 15px 10px 8px 15px;
`

export const submenu_reportes_grupo_dos = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    height: 45px;
    line-height: 45px;
    min-width: 150px;
    text-align: left;
    padding: 0 15px;
    font-size: 13.33px;
    position: relative;
    white-space: nowrap;
    transition: all .2s;
    color: #c4c9ce;
    &:hover{
        background-color: #2c3e50;
        ${submenu_reportes_submenu}{
            display:block;
        }
    }
`

export const submenu_reportes_grupo_dos_icono_izquierda = styled.i`
    font: 400 13.3333px Arial;
    line-height: 45px;
    text-align: left;
    white-space: nowrap;
    color: #c4c9ce;
    font-family: iconfont!important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    pointer-events: none;
    font-size: 12px;
`

export const submenu_reportes_grupo_dos_icono_derecha = styled.i`
    font: 400 13.3333px Arial;
    text-align: left;
    font-size: 13.33px;
    white-space: nowrap;
    color: #c4c9ce;
    font-family: element-icons!important;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: baseline;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    position: absolute;
    right: 10px;
    top: 17px;
`

export const submenu_reportes_grupo_contenido = styled.a`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    text-decoration: none;
    color: #fff;
`



export const reportes = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    list-style: none;
    position: relative;
    white-space: nowrap;
    font-size: 14px;
    cursor: pointer;
    transition: border-color .3s,background-color .3s,color .3s;
    box-sizing: border-box;
    height: 60px;
    text-align: center;
    line-height: normal;
    padding: 0;
    color: #babec1;
    &:hover{
        background-color: #2c3e50;
        ${submenu_reportes}{
            display: block;
        }
    }
`

export const submenu_dispositivo = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    left: 72px;
    z-index: 9999;
    background-color: #001529;
    display: none;

`

export const submenu_dispositivo_contenido = styled.a`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    text-decoration: none;
    color: #fff;

`

export const submenu_dispositivo_contenido_item = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    height: 45px;
    line-height: 45px;
    min-width: 150px;
    text-align: left;
    padding: 0 15px;
    font-size: 13.33px;
    position: relative;
    white-space: nowrap;
    transition: all .2s;
    color: #c4c9ce;
    &:hover{
        background-color: #2c3e50;
    }
`

export const submenu_dispositivo_contenido_item_dividido = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    border-bottom: 1px solid #233645;
    height: 45px;
    line-height: 45px;
    min-width: 150px;
    text-align: left;
    padding: 0 15px;
    font-size: 13.33px;
    position: relative;
    white-space: nowrap;
    transition: all .2s;
    color: #c4c9ce;
    &:hover{
        background-color: #2c3e50;
    }
`

export const submenu_dispositivo_contenido_item_icono = styled.i`
    font: 400 13.3333px Arial;
    line-height: 45px;
    text-align: left;
    white-space: nowrap;
    color: #c4c9ce;
    font-family: iconfont!important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    font-size: 12px;
`


export const dispositivo = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    list-style: none;
    position: relative;
    white-space: nowrap;
    font-size: 14px;
    cursor: pointer;
    transition: border-color .3s,background-color .3s,color .3s;
    box-sizing: border-box;
    height: 60px;
    text-align: center;
    line-height: normal;
    padding: 0;
    color: #babec1;
    &:hover{
        background-color: #2c3e50;
        ${submenu_dispositivo}{
            display: block;
        }
    }
`


export const icono_reportes = styled.i`
    font: 400 13.3333px Arial;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    color: #909399;
    background-repeat: no-repeat;
    background-image: url(${menus});
    height: 24px;
    background-position: 0 -600px;
    margin-right: 5px;
    width: 24px;
    text-align: center;
    font-size: 18px;
    vertical-align: middle;
    margin-top: 10px;
`
export const icono_dispositivos = styled.i`
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    color: #909399;
    background-repeat: no-repeat;
    background-image: url(${menus});
    height: 24px;
    background-position: -120px -300px;
    margin-right: 5px;
    width: 24px;
    text-align: center;
    font-size: 18px;
    vertical-align: middle;
    margin-top: 10px;
`

export const menu_inferior = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 71px;
    color: #fff;
`

export const anterior = styled.div`
    height: 50px;
    text-align: center;
    position: relative;
    cursor: pointer;
    &:hover{
        background-color: #2c3e50;
    }
`

export const icono_anterior = styled.div`
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    margin-right: 0;
    background-image: url(${menus});
    background-repeat: no-repeat;
    height: 24px;
    width: 24px;
    position: absolute;
    display: inline-block;
    top: 13px;
    left: 24px;
    background-position: -177px -360px;
`

export const submenu_opciones = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #fff;
    margin: 0;
    padding: 0;
    position: absolute;
    left: 72px;
    z-index: 9999;
    background-color: #001529;
    bottom:0px;
    cursor: pointer;
    display: none;
`

export const submenu_opciones_item = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    cursor: pointer;
    margin: 0;
    height: 45px;
    line-height: 45px;
    min-width: 150px;
    text-align: left;
    padding: 0 15px;
    font-size: 13.33px;
    position: relative;
    white-space: nowrap;
    transition: all .2s;
    color: #c4c9ce;
    &:hover{
        background-color: #2c3e50;
    }
`

export const submenu_opciones_item_icono = styled.i`
    font: 400 13.3333px Arial;
    cursor: pointer;
    text-align: left;
    font-size: 13.33px;
    white-space: nowrap;
    color: #c4c9ce;
    font-family: element-icons!important;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: baseline;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    margin-right: 3px;
`

export const opciones = styled.div`
    height: 50px;
    text-align: center;
    position: relative;
    cursor: pointer;
    &:hover{
        background-color: #2c3e50;
        ${submenu_opciones}{
            display:block;
        }
    }
`

export const icono_opciones = styled.i`

    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    margin-right: 0;
    background-image: url(${menus});
    background-repeat: no-repeat;
    height: 24px;
    width: 24px;
    position: absolute;
    display: inline-block;
    top: 13px;
    left: 24px;
    background-position: -122px -602px;
`

export const mensajes = styled.div`
    height: 50px;
    text-align: center;
    position: relative;
    cursor: pointer;
    &:hover{
        background-color: #2c3e50;
    }
`

export const icono_mensajes = styled.div`
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    margin-right: 0;
    background-image: url(${menus});
    background-repeat: no-repeat;
    height: 24px;
    width: 24px;
    position: absolute;
    display: inline-block;
    top: 13px;
    left: 24px;
    background-position: 0 -540px;
`

export const salir = styled.div`
    height: 50px;
    text-align: center;
    position: relative;
    cursor: pointer;
    &:hover{
        background-color: #2c3e50;
    }
`

export const icono_salir = styled.div`
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    margin-right: 0;
    background-image: url(${menus});
    background-repeat: no-repeat;
    height: 24px;
    width: 24px;
    position: absolute;
    display: inline-block;
    top: 13px;
    left: 24px;
    background-position: -120px -540px;
`


export const cuenta = styled.div`
    height: 46px;
    width: 72px;
    cursor: pointer;
    padding: 27px 0;
    background: url(${fondo});
    background-size: auto;
    background-position: center -28px;
    &:hover { 
        ${caja_imagen} {
            border: 1px solid #fff;
        }
        ${nombre_cuenta} {
            color: #ffb711;
        }
        ${submenu_perfil} {
            display: block;
        }
    }
`