import styled from '@emotion/styled/macro';
import menus from '../../assets/images/menus.46a5756.png';
import cabezera from '../../assets/images/dialog-header.cc6302f.png'
import capa from '../../assets/images/maplayer.0b9b41f.png';
import iconoBusqueda from '../../assets/images/search.svg';


export const herramienta_mapa = styled.div`
    height: auto;
    left: 0;
    bottom: 0;
    right: 0;
    margin: 0;
    background-color: #192c3e;
    padding: 8px 0;
    display: flex;
    justify-content: space-between;
    position: fixed;
    margin-left: 4.5rem;
    
    @media screen and (max-width: 998px){
        min-width: 1024px;
        overflow-x: scroll;
        position: absolute;
    }

`
export const caja_izquierda = styled.div`
    /* width: 100%; */
    
`;

export const icono_distancia = styled.span`
    width: 34px;
    height: 34px;
    display: inline-block;
    background-repeat: no-repeat;
    margin-left: 18px;
    float: left;
    cursor: pointer;
    outline: none;
    position: relative;
    background-image: url(${menus});
    background-position: 0 -120px;
    &:hover{
        background-position: -60px -120px;
    }
`

export const icono_area = styled.span`
    width: 34px;
    height: 34px;
    display: inline-block;
    background-repeat: no-repeat;
    margin-left: 18px;
    float: left;
    cursor: pointer;
    outline: none;
    position: relative;
    background-image: url(${menus});
    background-position: 0 -60px;
    &:hover{
        background-position: -60px -60px;
    }
`

export const icono_trafico = styled.span`
    width: 34px;
    height: 34px;
    display: inline-block;
    background-repeat: no-repeat;
    margin-left: 18px;
    float: left;
    cursor: pointer;
    outline: none;
    position: relative;
    background-image: url(${menus});
    background-position: 0 -300px;
    &:hover{
        background-position: -60px -300px;
    }
`


export const capa_mapa_titulo = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    cursor: pointer;
    margin: 0;
    padding: 0;
    color: #fff;
    background: #001529 url(${cabezera}) no-repeat center 0;
    height: 35px;
    line-height: 35px;
    font-size: 14px;
    padding-left: 30px;
    position: relative;
`

export const capa_mapa_titulo_icono_izquierda = styled.i`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    cursor: pointer;
    color: #fff;
    line-height: 35px;
    font-size: 14px;
    background-image: url(${capa});
    background-position: 2px;
    background-repeat: no-repeat;
    height: 16px;
    width: 16px;
    position: absolute;
    left: 6px;
    top: 8px;
`
export const capa_mapa_titulo_icono_izquierdaGeo = styled.i`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    cursor: pointer;
    color: #fff;
    line-height: 35px;
    font-size: 14px;
    background-image: url(${menus}); 
    background-position: -126px -68px;
    background-repeat: no-repeat;
    height: 16px;
    width: 16px;
    position: absolute;
    left: 6px;
    top: 8px;
`
export const capa_mapa_titulo_icono_izquierdaAlert = styled.i`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    cursor: pointer;
    color: #fff;
    line-height: 35px;
    font-size: 14px;
    background-image: url(${menus}); 
    background-position: -126px -68px;
    background-repeat: no-repeat;
    height: 16px;
    width: 16px;
    position: absolute;
    left: 6px;
    top: 8px;
`
export const capa_mapa_titulo_icono_derecha = styled.i`
    font: 400 13.3333px Arial;
    cursor: pointer;
    color: #fff;
    font-family: element-icons!important;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    height: 35px;
    line-height: 35px;
    width: 35px;
    text-align: center;
    display: inline-block;
    float: right;
    font-size: 14px;
`

export const capa_mapa_item_seleccionado = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    margin: 0;
    padding: 0;
    height: 32px;
    line-height: 32px;
    cursor: pointer;
    padding-left: 15px;
    font-size: 13px;
    background-color: #ffb771;
`

export const capa_mapa_item = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    margin: 0;
    padding: 0;
    height: 32px;
    line-height: 32px;
    cursor: pointer;
    padding-left: 15px;
    font-size: 13px;
    
    &:hover{
        background-color: #ffb771;
    }
`

export const capa_mapa = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    cursor: pointer;
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 44px;
    width: 190px;
    background-color: #fff;
    left: -80px;
    box-shadow: 2px 2px 4px rgba(0,0,0,.2),-2px -2px 4px rgba(0,0,0,.2);
    display: ${props => props.visibility? 'block':'none'};
`
export const geofences = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 52px;
    width: 320px;
    height: 450px;
    background-color: #fff;
    right: 10px;
    box-shadow: 2px 2px 4px rgba(0,0,0,.2),-2px -2px 4px rgba(0,0,0,.2);
    display: ${props => props.visibility? 'block':'none'};
`
export const alarms = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 52px;
    width: 320px;
    height: 450px;
    background-color: #fff;
    right: 10px;
    box-shadow: 2px 2px 4px rgba(0,0,0,.2),-2px -2px 4px rgba(0,0,0,.2);
    display: ${props => props.visibility? 'block':'none'};
`
export const icono_mapa = styled.buton`
    width: 34px;
    height: 34px;
    background-repeat: no-repeat;
    margin-left: 18px;
    float: left;
    cursor: pointer;
    outline: none;
    background-image: url(${menus});
    background-position: -120px -120px;
    position: relative;
    display: inline-block;
    &:hover{ 
        background-position: -180px -120px;
    }
`


export const caja_zoom = styled.div`
    margin-left: 20px;
    height: 34px;
    display: inline-block;
    float: left;
`

export const icono_zoom_menos = styled.i`
    height: 24px;
    display: inline-block;
    width: 24px;
    padding-top: 5px;
    float: left;
    cursor: pointer;
    background-repeat: no-repeat;
    background-image: url(${menus});
    background-position: 0 -415px;
`

export const zoom_slider = styled.input`
    appearance: none;
    background-color: #d3d3d3;
    outline: none;
    display: inline-block;
    height: 12px;
    width: 72px;
    float: left;
    border-radius: 5px;
    margin: 10px 10px;
    &:hover{
        opacity: 1;
    }
    &::-webkit-slider-thumb{
        position: relative;
        appearance: none;
        cursor: grab;
        background: #9c9c9c;
        width: 14px;
        height: 14px;
        border-radius: 50%;
    }
    &::-webkit-slider-thumb:active{
        cursor: grabbing;
    }
`

export const slider = styled.div`
    margin: 0;
    padding: 0;
`

export const slider_runway = styled.div`
    margin: 12px 0;
    background-color: #7c8899;
    height: 10px;
    border-radius: 5px;
`

export const slider_bar = styled.div`
    margin: 0;
    padding: 0;
`

export const slider_button_wrapper = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    cursor: pointer;
    margin: 0;
    padding: 0;
    position: absolute;
    height: 36px;
    width: 36px;
    z-index: 1001;
    transform: translateX(-40%);
    background-color: transparent;
    text-align: center;
    user-select: none;
    line-height: normal;
    bottom: -1px;
`

export const slider_button = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    cursor: pointer;
    text-align: center;
    line-height: normal;
    margin: 0;
    padding: 0;
    border-radius: 50%;
    transition: .2s;
    user-select: none;
    background-color: #c4c9ce;
    border: none;
    height: 12px;
    width: 12px;
    vertical-align: middle;
    display: inline-block;
`

export const icono_zoom_mas = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    vertical-align: middle;
    text-align: center;
    height: 24px;
    display: inline-block;
    width: 24px;
    padding-top: 5px;
    float: left;
    cursor: pointer;
    background-repeat: no-repeat;
    background-image: url(${menus});
    background-position: 0 -355px;
`

export const caja_derecha = styled.div`
/*     margin: 0;
    padding: 0;
    display: inline;
    float: left;
    margin-left: 920px;
    position: fixed; */
    /* width: 100%; */
    display: flex;
    justify-content: flex-end;
    margin-right: 1rem;
`

export const icono_POI = styled.span`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    width: 34px;
    height: 34px;
    display: inline-block;
    background-repeat: no-repeat;
    margin-left: 18px;
    float: left;
    cursor: pointer;
    outline: none;
    position: relative;
    background-image: url(${menus});
    background-position: -120px -180px;
    &:hover{
        background-position: -180px -180px;
    }
`

export const icono_Ruta = styled.span`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    width: 34px;
    height: 34px;
    display: inline-block;
    background-repeat: no-repeat;
    margin-left: 18px;
    float: left;
    cursor: pointer;
    outline: none;
    position: relative;
    background-image: url(${menus});
    background-position: 0px -240px;
    &:hover{
        background-position: -60px -240px;
    }
`

export const icono_GEO = styled.span`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    width: 34px;
    height: 34px;
    display: inline-block;
    background-repeat: no-repeat;
    margin-left: 18px;
    float: left;
    cursor: pointer;
    outline: none;
    position: relative;
    background-image: url(${menus});
    background-position: -120px -60px;
    &:hover{
        background-position: -180px -60px;
    }
`

export const icono_Alertas = styled.span`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    width: 34px;
    height: 34px;
    display: inline-block;
    background-repeat: no-repeat;
    margin-left: 18px;
    float: left;
    cursor: pointer;
    outline: none;
    position: relative;
    background-image: url(${menus});
    background-position: 0px 0px;
    &:hover{
        background-position: -60px 0px;
    }
`

export const icono_Recorrido = styled.span`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    width: 34px;
    height: 34px;
    display: inline-block;
    background-repeat: no-repeat;
    margin-left: 18px;
    float: left;
    cursor: pointer;
    outline: none;
    position: relative;
    background-image: url(${menus});
    background-position: -120px 0px;
    &:hover{
        background-position: -180px 0px;
    }
`

export const direccion_mapa = styled.div`
    width: 252px;
    float: left;
    height: 24px;
    padding: 5px 0;
    margin-left: 20px;
`

export const busqueda = styled.input`
    -webkit-font-smoothing: antialiased;
    margin: 0;
    background-image: none;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    display: inline-block;
    font-size: inherit;
    outline: 0;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
    padding: 0 8px;
    padding-left: 30px;
    height: 24px;
    line-height: 24px;
    background-color: #192c3e;
    border-color: #babec1;
    color: #ddd;
    border-radius: 15px;
`

export const input_prefix = styled.span`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 14px;
    position: absolute;
    color: #c0c4cc;
    text-align: center;
    left: 5px;
    transition: all .3s;
    height: 24px;
    line-height: 24px;
    top: 5px;
    border-radius: 0 10px 10px 0;
    cursor: pointer;
`

export const icono_busqueda = styled.i`
    height: 24px;
    line-height: 24px;
    background-image: url(${iconoBusqueda});
    &::before{
        content: "\E778";
    };
    &::after{
        content: "";
        height: 100%;
        width: 0;
        display: inline-block;
        vertical-align: middle;
    };
`