import styled from '@emotion/styled';
import menus from '../../assets/images/menus.46a5756.png';

export const BarraInferiorContainer = styled.div`
    height: 35px;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #192c3e;
    padding: 8px 0;
    z-index: 1001;
`

export const item_icon_distancia = styled.span`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    width: 34px;
    height: 34px;
    display: inline-block;
    background-repeat: no-repeat;
    margin-left: 98px;
    float: left;
    cursor: pointer;
    outline: none;
    position: relative;
    background-image: url(${menus});
    background-position: 0 -120px;
    &:hover { 
        background-position: -60px -120px;
    }
`

export const item_icon_area = styled.span`
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
    background-position: 0 -60px;
    &:hover { 
        background-position: -60px -60px;
    }
`

export const item_icon_trafico = styled.span`
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
    background-position: 0 -300px;
    &:hover { 
        background-position: -60px -300px;
    }
`
export const item_icon_mapa = styled.span`
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
    background-position: -120px -120px;
    &:hover { 
        background-position: -180px -120px;
    }
`
export const zoom_box = styled.div`
    margin-left: 20px;
    height: 34px;
    display: inline-block;
    float: left;
`

export const zoom_out = styled.i`
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
    background-position: 0 -415px;
`

export const zoom_slider = styled.span`
    display: inline-block;
    height: 34px;
    width: 72px;
    float: left;
    margin: 0 10px;
`

export const slider = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    margin: 0;
    padding: 0;
`

export const zoom_in = styled.i`
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

export const map_address = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    margin: 0;
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 252px;
    float: left;
    height: 24px;
    padding: 5px 0;
    margin-left: 20px;
`

export const input_inner = styled.input`
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
    height: 24px;
    line-height: 24px;
    background-color: #192c3e;
    border-color: #babec1;
    color: #ddd;
    border-radius: 15px;
    padding-left: 10px;
`

export const input_prefix = styled.span`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 14px;
    position: absolute;
    text-align: center;
    transition: all .3s;
    height: 24px;
    line-height: 24px;
    top: 5px;
    border-radius: 0 10px 10px 0;
    cursor: pointer;
    left: 220px;
    background-color: #babec1;
    width: 40px;
    color: #fff;
`

export const item_icon_busqueda = styled.i`
    font: 400 13.3333px Arial;
    font-size: 14px;
    cursor: pointer;
    color: #fff;
    font-family: element-icons!important;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    vertical-align: baseline;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    width: 25px;
    text-align: center;
    transition: all .3s;
    height: 24px;
    line-height: 24px;
`

export const caja_derecha = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    margin: 0;
    padding: 0;
    display: inline;
    float: right;
    margin-right: 20px;
`

export const item_icon_POI = styled.span`
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

export const item_icon_ruta = styled.span`
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

export const item_icon_geo = styled.span`
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

export const item_icon_alerta = styled.span`
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
    background-position: 0 0;
    &:hover{
        background-position: -60px 0px;
    }
`

export const item_icon_descargar = styled.span`
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