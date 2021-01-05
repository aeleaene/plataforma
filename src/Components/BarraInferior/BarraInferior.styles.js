import styled from '@emotion/styled';
import menus from '../../assets/images/menus.46a5756.png';

export const herramienta_mapa = styled.div`
    height: 35px;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #192c3e;
    padding: 8px 0;
    z-index: 1001;
`

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
        background-position: -60 -120px;
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

export const icono_mapa = styled.span`
    width: 34px;
    height: 34px;
    display: inline-block;
    background-repeat: no-repeat;
    margin-left: 18px;
    float: left;
    cursor: pointer;
    outline: none;
    background-image: url(${menus});
    background-position: -120px -120px;
    position: relative;
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

export const zoom_slider = styled.span`
    display: inline-block;
    height: 34px;
    width: 72px;
    float: left;
    margin: 0 10px;
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
    cursor: pointer;
    margin: 0;
    padding: 0;
    position: absolute;
    height: 36px;
    width: 36px;
    z-index: 1001;
    transform: translateX(-50%);
    background-color: transparent;
    text-align: center;
    user-select: none;
    line-height: normal;
    top: -13px;
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