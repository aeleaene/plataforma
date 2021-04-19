import styled from '@emotion/styled/macro';
import max from '../../assets/images/maximization.7a10253.png';
import min from '../../assets/images/minimize.5127082.png';
import header from '../../assets/images/dialog-header.cc6302f.png';



export const contenido_monitor = styled.div`
    position: relative;
    height: 100%;
    overflow-y: hidden;
` 

export const caja_direccion_dispositivo = styled.div`
    min-height: 25px;
    line-height: 25px;
    width: 600px;
    position: absolute;
    left: 50%;
    top: -25px;
    margin-left: -300px;
    z-index: 1001;
    background-color: #fff;
    box-shadow: 1px 1px 4px rgba(0,0,0,.2),-1px -1px 4px rgba(0,0,0,.2);
    border-bottom: 1px solid #ccc;
    text-align: center;
    padding-bottom: 5px;
    padding-top: 30px;
    border-radius: 50px;
    display: none;
`

export const refrescar = styled.div`
    position: absolute;
    left: 50%;
    top: 45px;
    margin-left: -50px;
    background-color: hsla(0,0%,96%,.85);
    width: auto;
    padding: 0 5px;
    text-align: center;
    height: 25px;
    z-index: 999;
    line-height: 25px;
    font-size: 14px;
    color: #686868;
    border: 1px solid #c3c3c3;
`

export const refTemporizador = styled.font`
    width: 15px;
    display: inline-block;
    text-align: center;
    color: #bd0000;
    font-weight: 700;
`


export const caja_dispositivo_panel = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 60px;
    width: 328px;
    background-color: #fff;
    z-index: 500;
    box-shadow: 2px 2px 4px rgba(0,0,0,.2),-2px -2px 4px rgba(0,0,0,.2);
    user-select: none;
    left: 475px;
    top: 15px;
    height: 852px;
    display: ${props => props.visibility? 'none':'block'};
`

export const caja_dispositivo_titulo = styled.div`
    margin: 0;
    padding: 0;
`

export const barra_arrastable = styled.div`
    position: absolute;
    height: 6px;
    width: 100%;
    background-color: transparent;
    cursor: n-resize;
    z-index: 99;
`

export const barra_superior_titulo = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    user-select: none;
    margin: 0;
    padding: 0;
    text-align: left;
    position: relative;
    padding-right: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: grab;
    color: #fff;
    background: #596673 url(${header}) no-repeat center 0;
    height: 35px;
    line-height: 36px;
    font-size: 14px;
`

export const contenido_panel_dispositivo = styled.div`
    position: relative;
`
export const busqueda_dispositivo = styled.div`
    background-color: #e4e4e4;
    padding: 5px 10px;
    height: 26px;
`
export const busqueda_en_linea = styled.div`
    width: 100%;
`

export const sufijo_entrada = styled.div`
    width: 100%;
`
export const entrada_interna = styled.input`
   -webkit-font-smoothing: antialiased;
    user-select: none;
    margin: 0;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    outline: 0;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
    padding: 0 8px;
    border-radius: 0;
    padding-right: 30px;
    height: 26px;
    line-height: 26px;
    &:hover{
        border-color: #ff9934;
    }
    &:active{
        border-color: #ff9934;
    }   
`

export const el_input__suffix = styled.span`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    user-select: none;
    font-size: 14px;
    position: absolute;
    color: #c0c4cc;
    text-align: center;
    right: 5px;
    transition: all .3s;
    pointer-events: none;
    height: 26px;
    top: 0;
    cursor: pointer;
`

export const el_input__suffix_inner = styled.span`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    user-select: none;
    font-size: 14px;
    color: #c0c4cc;
    text-align: center;
    cursor: pointer;
    pointer-events: all;
`
export const icono_cerrar = styled.i`
    content: "";
    transition: none;
    line-height: 26px;
    &::after{ 
    height: 100%;
    width:0;
    display: inline-block;
    vertical-align: middle;
    };
`

export const arbol_caja_monitor = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    user-select: none;
    margin: 0;
    padding: 0;
    display: none;
`

export const titulo_caja = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    user-select: none;
    margin: 0;
    padding: 0;
    height: 34px;
    line-height: 34px;
    background-color: #fbfbfb;
    display: block;
    padding-left: 10px;
    position: relative;
    border-bottom: 1px solid #f9f2f2;
    cursor: pointer;
`

export const icono_fondo = styled.i`
    font: 400 13.3333px Arial;
    color: #2c3e50;
    user-select: none;
    cursor: pointer;
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
`

export const caja_dispositivo_pequena = styled.button`
    border: none;
    background: none;
    height: 36px;
    width: 36px;
    position: absolute;
    left: 10px;
    top: 10px;
    background-repeat: no-repeat;
    background-image: url(${max});
    background-position: 50%;
    z-index: 599;
    cursor: pointer;
    display: ${props => props.visibility? 'block':'none'};
}
`

export const opcion_derecha = styled.button`
    position: absolute;
    border: none;
    background: none;
    right: 0;
    top: 0;
    height: 35px;
    width: 35px;
    background-image: url(${min});
    background-repeat: no-repeat;
    background-position: 50%;
    cursor: pointer;
`
