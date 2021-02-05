import styled from '@emotion/styled/macro';

import fondo from '../../assets/images/fondo.jpg';
import iconos from '../../assets/images/bg_home_ui.png';
import cat from '../../assets/images/cat.png';

import es from '../../assets/images/es-es.svg';
import en from '../../assets/images/en-us.svg';
import pt from '../../assets/images/pt-pt.svg';
import br from '../../assets/images/pt-br.svg';
import fr from '../../assets/images/fr-fr.svg';
import de from '../../assets/images/de-de.svg';
import it from '../../assets/images/it-it.svg';
import nl from '../../assets/images/nl-nl.svg';
import no from '../../assets/images/no-no.svg';
import ar from '../../assets/images/ar-sa.svg';
import fa from '../../assets/images/fa-fa.svg';
import vi from '../../assets/images/vi-vn.svg';
import bn from '../../assets/images/bn-bd.svg';
import id from '../../assets/images/in-id.svg';
import th from '../../assets/images/th-th.svg';
import km from '../../assets/images/km-kh.svg';
import cn from '../../assets/images/zh-cn.svg';

export const body = styled.body`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    color: #505050;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
`

export const p = styled.div`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    color: #505050;
    margin: 0;
    padding: 0;
    display: none;
    position: absolute;
`

export const principal = styled.div`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    margin: 0;
    padding: 0;
    position: relative;
    min-width: 1000px;
    background: url(${fondo}) no-repeat center center;
    background-size: cover;
    color: #fff;
    height: 969px;
`

export const cabecera = styled.div`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    color: #fff;
    margin: 0;
    padding: 0;
    position: absolute;
    width: 100%;
    background-color: rgba(0,0,0, 0.3);
    top: 0;
`


export const logo = styled.div`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    color: #fff;
    font-size: 12px;
    visibility: visible;
    margin: 0;
    padding: 0;
    float: left;
    display: inline;
    padding-top: 8px;
`

export const applink = styled.div`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    color: #fff;
    font-size: 12px;
    visibility: visible;
    margin: 0;
    padding: 0;
    padding-top: 20px;
    width: 194px;
    float: right;
`

export const android = styled.a`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    visibility: visible;
    margin: 0;
    padding: 0;
    position: relative;
    float: left;
    display: block;
    width: 90px;
    height: 26px;
    padding-top: 10px;
    border: 1px solid rgba(255,255,255,0.3);
    border-radius: 2px;
    color: #fff;
    font-size: 12px;
    text-decoration: none;
    margin-right: 10px;
    cursor: pointer;
    &:hover{
        background-color: rgba(255,255,255,0.3);
    }
`

export const android_span = styled.span`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    visibility: visible;
    color: #fff;
    font-size: 12px;
    margin: 0;
    padding: 0;
    display: block;
    margin-left: 12px;
    padding-left: 19px;
    background: url(${iconos}) no-repeat center center;
    background-position: -129px 1px;
`

export const ios = styled.a`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    visibility: visible;
    margin: 0;
    padding: 0;
    position: relative;
    float: left;
    display: block;
    width: 90px;
    height: 26px;
    padding-top: 10px;
    border: 1px solid rgba(255,255,255,0.3);
    border-radius: 2px;
    color: #fff;
    font-size: 12px;
    text-decoration: none;
    cursor: pointer;
    &:hover{
        background-color: rgba(255,255,255,0.3);
    }
`

export const ios_span = styled.span`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    visibility: visible;
    color: #fff;
    font-size: 12px;
    margin: 0;
    padding: 0;
    display: block;
    padding-left: 19px;
    background: url(${iconos}) no-repeat 0 0;
    margin-left: 8px;
    background-position: -129px -30px;
`

export const body_ = styled.div`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    color: #fff;
    margin: 0;
    padding: 0;
    min-height: 500px;
    font-size: 12px;
`

export const wrap = styled.div`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    color: #fff;
    font-size: 12px;
    zoom: 1;
    min-width: 1000px;
    max-width: 1450px;
    padding: 0 10px;
    margin: auto;
    width: 1102px;
    visibility: visible; 
    &:after{
        content: '';
        display: block;
        height: 0;
        visibility: hidden;
    }
`

export const caja_login = styled.div`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    color: #fff;
    font-size: 12px;
    visibility: visible;
    margin: 0;
    padding: 0;
    float: right;
    position: relative;
    width: 338px;
    height: 344px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,0.3);
    border-radius: 2px;
    box-shadow: 1px 1px 3px rgba(0,0,0,0.2);
    margin-top: 294.5px;
    /**Falta agregar ::after & ::before */
    &:before{
        content: "";
        width: 338px;
        height: 344px;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,0.3);
        z-index: 2;
    }
    &:after{
        content: "";
        height: 352px;
        position: absolute;
        top:-4px;
        left:-4px;
        right: -4px;
        background: url(${fondo}) no repeat;
        background-size: cover;
        background-attachment: fixed;
        background-position: 50%;
        filter: blur(2px);
        z-index: 1;
    }

`

export const container = styled.div`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    color: #fff;
    font-size: 12px;
    visibility: visible;
    margin: 0;
    padding: 0;
    width: 338px;
    height: 344px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
`

export const formulario = styled.form`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    color: #fff;
    font-size: 12px;
    visibility: visible;
    margin: 0;
    padding: 0;
`

export const formulatio_titulo = styled.div`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    color: #fff;
    visibility: visible;
    margin: 0;
    padding: 38px 19px 12px;
    font-size: 20px;
    line-height: 1;
`

export const ipt_f_f_ms = styled.input`
    width: 260px;
    padding-left: 40px;
    height: 36px;
    line-height: 36px;
    color: #fff;
    border: none;
    background-color: rgba(255,255,255,0.3);
    outline: none;
    &:hover{
        background-color: rgba(255,255,255,0.4);
    }
`

export const formulario_contenido = styled.ul`
    padding: 18px 19px 0;
    list-style: none;
`
export const formulario_contenido_cuenta = styled.li`
    margin-bottom: 1px;
    position: relative;
    list-style: none;
`

export const formulario_contenido_contrasena = styled.li`
    margin-bottom: 1px;
    position: relative;
    list-style: none;
`

export const barra_entrada = styled.div`
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    height: 36px;
    width: 300px;
    padding-left: 40px;
    line-height: 37px;
    z-index: 2;
    cursor: text;
`

export const icono_contra = styled.i`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    font-size: 12px;
    visibility: visible;
    list-style: none;
    color: #fff;
    margin: 0;
    padding: 0;
    background: url(${cat}) no-repeat 0 0;
    background-image: url(${iconos});
    width: 15px;
    height: 15px;
    position: absolute;
    cursor: pointer;
    background-position: -30px -20px;
    top: 10px;
    left: 15px;
`

export const icono_cuenta = styled.i`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    font-size: 12px;
    visibility: visible;
    list-style: none;
    color: #fff;
    margin: 0;
    padding: 0;
    background: url(${cat}) no-repeat 0 0;
    background-image: url(${iconos});
    width: 15px;
    height: 15px;
    position: absolute;
    cursor: pointer;
    background-position: -30px 0;
    top: 12px;
    left: 15px;
`

export const tips_f13 = styled.div`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    visibility: visible;
    list-style: none;
    color: #fff;
    margin: 0;
    padding: 0;
    font-size: 13px;
    position: absolute;
    top: 42px;
    left: 30px;
    display: none;
    font-weight: bold;
`

export const entrada_limpia = styled.i`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    font-size: 12px;
    visibility: visible;
    list-style: none;
    color: #fff;
    margin: 0;
    padding: 0;
    background: url(${cat}) no-repeat 0 0;
    background-image: url(${iconos});
    position: absolute;
    cursor: pointer;
    width: 10px;
    height: 10px;
    background-position: 0 -40px;
    top: 14px;
    left: 280px;
    display: none;
`

export const cl_verificar = styled.li`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    color: #fff;
    font-size: 12px;
    visibility: visible;
    margin: 0;
    padding: 0;
    list-style: none;
    clear: left;
    margin-bottom: 1px;
    position: relative;
    display: none;
`

export const verificar_wrap = styled.div`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    color: #fff;
    font-size: 12px;
    visibility: visible;
    list-style: none;
    margin: 0;
    padding: 0;
    height: 35px;
    background-color: #e5e5e5;
    position: relative;
    width: 300px;
`

export const dragProgress = styled.div`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    visibility: visible;
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    height: 35px;
    background-color: #7ac23c;
    color: #fff;
    font-size: 18px;
    text-align: center;
    line-height: 35px;
    width: 0px;
`

export const dragBtn = styled.span`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    color: #fff;
    font-size: 12px;
    visibility: visible;
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    width: 45px;
    height: 35px;
    top: 0;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAiCAYAAAApkEs2AAAA/UlEQVRYhe3XLc9GYBjG8eN6dkdFIQuqoCiCbj6ob2CCIplRaJKqEHT3c/kAz66Xc/fLnvO3UY7N/jNmxDAMF77AQ57iOH53x5/GccTPuyNUcSg1DqXGodQ4lNr/CC3LEsuyaG8mrEKzLEPXdZjnWWszYRXq+z7yPMc0Tej7XnkzYf2Muq6LoiiwrivatsV1XUrby0Mlx3Huu7fvO5qmUd50kL31QgijTdXD+gq/zvNEVVXwPA9pmipvOqxDj+O4Q4IgQJIkypsuq9Bt21DXNaIoug/VzYRVqHw55J0Kw1BrMyHkXyj/3BHiUGocSo1DqXEota8Jvb/18hP16Z7qL3h/w53n4AAAAABJRU5ErkJggg==) no-repeat center center;
    background-size: 100% 100%;
    z-index: 2;
    cursor: move;
    left: 0px;
`

export const fixtips = styled.span`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    visibility: visible;
    list-style: none;
    margin: 0;
    padding: 0;
    background: -webkit-gradient(linear,left top,right top,color-stop(0,#4d4d4d),color-stop(.4,#4d4d4d),color-stop(.5,#fff),color-stop(.6,#4d4d4d),color-stop(1,#4d4d4d));
    -webkit-text-fill-color: transparent;
    -webkit-animation: slidetounlock 2.5s infinite;
    width: 100%;
    position: absolute;
    height: 100%;
    color: #51555c;
    z-index: 1;
    line-height: 33px;
    font-size: 12px;
    text-align: center;
`

export const verifyMsg = styled.span`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    visibility: visible;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    position: absolute;
    height: 100%;
    z-index: 1;
    line-height: 33px;
    font-size: 12px;
    text-align: center;
    background-color: #7ac23c;
    color: #fff;
    display: none;
`

export const formulario_contenido_recordar = styled.li`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    color: #fff;
    font-size: 12px;
    visibility: visible;
    margin: 0;
    list-style: none;
    clear: left;
    margin-bottom: 1px;
    padding: 27px 0 20px;
    position: relative;
`

export const chk_remember = styled.span`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    color: #fff;
    visibility: visible;
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 13px;
    padding-left: 20px;
    cursor: pointer;
`

export const icono_marcar = styled.i`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    color: #fff;
    visibility: visible;
    list-style: none;
    font-size: 13px;
    margin: 0;
    padding: 0;
    background: url(${cat}) no-repeat 0 0;
    background-image: url(${iconos});
    position: absolute;
    cursor: pointer;
    width: 16px;
    height: 16px;
    left: 0;
    top: 29px;
    background-position: -60px 0;
    &:active{
        background-position: -60px -20px;
    }
`

export const iniciar = styled.li`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    color: #fff;
    font-size: 12px;
    visibility: visible;
    margin: 0;
    padding: 0;
    list-style: none;
    margin-bottom: 1px;
    position: relative;
`

export const boton = styled.button`
    visibility: visible;
    list-style: none;
    margin: 0;
    padding: 0;
    font-family: inherit;
    font-style: inherit;
    font-weight: inherit;
    width: 300px;
    height: 38px;
    background-color: #2D8CF0;
    color: #fff;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
    font-size: 18px;
    border: none;
    outline: none;
`

export const formulario_contenido_demo = styled.li`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    color: #fff;
    font-size: 12px;
    visibility: visible;
    margin: 0;
    list-style: none;
    margin-bottom: 1px;
    position: relative;
    padding: 23px 0 35px;
`

export const demo = styled.a`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    font-size: 12px;
    visibility: visible;
    list-style: none;
    margin: 0;
    padding: 0;
    float: right;
    display: inline;
    color: #fff;
`

export const encontrar = styled.a`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    font-size: 12px;
    visibility: visible;
    list-style: none;
    margin: 0;
    padding: 0;
    float: right;
    display: inline;
    color: #fff;
`


export const footer = styled.div`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    color: #fff;
    margin: 0;
    padding: 0;
    position: absolute;
    width: 100%;
    background-color: rgba(0,0,0, 0.3);
    bottom: 0;
`

export const wrap_footer = styled.div`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    color: #fff;
    zoom: 1;
    min-width: 1000px;
    max-width: 1450px;
    margin: 0 auto;
    padding: 0 10px;
    height: 80px;
    width: 1100px;
    visibility: visible;
`

export const panel_lenguaje = styled.div`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    color: #fff;
    visibility: visible;
    margin: 0;
    display: none;
    position: absolute;
    z-index: 999;
    bottom: 58px;
    right: -1px;
    width: 623px;
    padding: 10px 0;
    border: 1px solid rgba(255,255,255,0.3);
    background-color: rgba(0,0,0, 0.3);
    text-align: left;
    border-radius: 2px;
`

export const seleccion_lenguaje = styled.div`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    color: #fff;
    visibility: visible;
    padding: 0;
    float: right;
    position: relative;
    margin: 20px 0;
    width: 260px;
    height: 36px;
    text-align: right;
    border: 2px solid transparent;
    &:hover{
        ${panel_lenguaje}{
            display: block;
        }
    }
`


export const seleccion_lenguaje_cur = styled.div`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    color: #fff;
    visibility: visible;
    margin: 0;
    padding: 0;
    border: 1px solid rgba(255,255,255,0.3);
    position: relative;
    width: 260px;
    height: 36px;
    line-height: 36px;
    cursor: pointer;
    text-indent: 50px;
    text-align: left;
    display: inline-block;
    border-radius: 2px;
`

export const elemento_lenguaje = styled.a`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    visibility: visible;
    text-align: left;
    margin: 0;
    padding: 0;
    color: #fff;
    display: inline-block;
    width: 150px;
    height: 32px;
    line-height: 29px;
    font-size: 12px;
    position: relative;
    text-indent: 46px;
    text-decoration: none;
    cursor: pointer;
    &:hover{
        color: #0095FF;
    }
`

export const icono_bandera = styled.b`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    color: #fff;
    visibility: visible;
    line-height: 36px;
    cursor: pointer;
    text-indent: 50px;
    text-align: left;
    margin: 0;
    padding: 0;
    background-repeat: no-repeat;
    background-size: 100%;
    height: 18px;
    width: 24px;
    position: absolute;
    left: 15px;
    display: inline-block;
    border-radius: 2px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1), -1px -1px 1px rgba(0, 0, 0, 0.1);
    background-image: url(${es});
    top: 8px;
    &::after{
        content: " ";
        position: absolute;
        right: -210px;
        top: 9px;
        height: 6px;
        width: 9px;
        display: block;
        background: url(${iconos}) no-repeat -16px -40px;
    }
`

export const bandera_ingles = styled.div`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    visibility: visible;
    text-align: left;
    color: #fff;
    line-height: 29px;
    font-size: 12px;
    text-indent: 46px;
    margin: 0;
    padding: 0;
    background-repeat: no-repeat;
    background-size: 100%;
    height: 18px;
    width: 24px;
    position: absolute;
    left: 15px;
    top: 6px;
    display: inline-block;
    border-radius: 2px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1), -1px -1px 1px rgba(0, 0, 0, 0.1);
    background-image: url(${en});
`

export const bandera_espanol = styled.div`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    visibility: visible;
    text-align: left;
    color: #fff;
    line-height: 29px;
    font-size: 12px;
    text-indent: 46px;
    margin: 0;
    padding: 0;
    background-repeat: no-repeat;
    background-size: 100%;
    height: 18px;
    width: 24px;
    position: absolute;
    left: 15px;
    top: 6px;
    display: inline-block;
    border-radius: 2px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1), -1px -1px 1px rgba(0, 0, 0, 0.1);
    background-image: url(${es});
`

export const bandera_portugues = styled.div`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    visibility: visible;
    text-align: left;
    color: #fff;
    line-height: 29px;
    font-size: 12px;
    text-indent: 46px;
    margin: 0;
    padding: 0;
    background-repeat: no-repeat;
    background-size: 100%;
    height: 18px;
    width: 24px;
    position: absolute;
    left: 15px;
    top: 6px;
    display: inline-block;
    border-radius: 2px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1), -1px -1px 1px rgba(0, 0, 0, 0.1);
    background-image: url(${pt});
`

export const bandera_portugues_brasil = styled.div`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    visibility: visible;
    text-align: left;
    color: #fff;
    line-height: 29px;
    font-size: 12px;
    text-indent: 46px;
    margin: 0;
    padding: 0;
    background-repeat: no-repeat;
    background-size: 100%;
    height: 18px;
    width: 24px;
    position: absolute;
    left: 15px;
    top: 6px;
    display: inline-block;
    border-radius: 2px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1), -1px -1px 1px rgba(0, 0, 0, 0.1);
    background-image: url(${br});
`

export const bandera_frances = styled.div`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    visibility: visible;
    text-align: left;
    color: #fff;
    line-height: 29px;
    font-size: 12px;
    text-indent: 46px;
    margin: 0;
    padding: 0;
    background-repeat: no-repeat;
    background-size: 100%;
    height: 18px;
    width: 24px;
    position: absolute;
    left: 15px;
    top: 6px;
    display: inline-block;
    border-radius: 2px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1), -1px -1px 1px rgba(0, 0, 0, 0.1);
    background-image: url(${fr});
`

export const bandera_aleman = styled.div`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    visibility: visible;
    text-align: left;
    color: #fff;
    line-height: 29px;
    font-size: 12px;
    text-indent: 46px;
    margin: 0;
    padding: 0;
    background-repeat: no-repeat;
    background-size: 100%;
    height: 18px;
    width: 24px;
    position: absolute;
    left: 15px;
    top: 6px;
    display: inline-block;
    border-radius: 2px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1), -1px -1px 1px rgba(0, 0, 0, 0.1);
    background-image: url(${de});
`
export const bandera_italiano = styled.div`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    visibility: visible;
    text-align: left;
    color: #fff;
    line-height: 29px;
    font-size: 12px;
    text-indent: 46px;
    margin: 0;
    padding: 0;
    background-repeat: no-repeat;
    background-size: 100%;
    height: 18px;
    width: 24px;
    position: absolute;
    left: 15px;
    top: 6px;
    display: inline-block;
    border-radius: 2px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1), -1px -1px 1px rgba(0, 0, 0, 0.1);
    background-image: url(${it});
`

export const bandera_holandes = styled.div`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    visibility: visible;
    text-align: left;
    color: #fff;
    line-height: 29px;
    font-size: 12px;
    text-indent: 46px;
    margin: 0;
    padding: 0;
    background-repeat: no-repeat;
    background-size: 100%;
    height: 18px;
    width: 24px;
    position: absolute;
    left: 15px;
    top: 6px;
    display: inline-block;
    border-radius: 2px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1), -1px -1px 1px rgba(0, 0, 0, 0.1);
    background-image: url(${nl});
`

export const bandera_noruego = styled.div`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    visibility: visible;
    text-align: left;
    color: #fff;
    line-height: 29px;
    font-size: 12px;
    text-indent: 46px;
    margin: 0;
    padding: 0;
    background-repeat: no-repeat;
    background-size: 100%;
    height: 18px;
    width: 24px;
    position: absolute;
    left: 15px;
    top: 6px;
    display: inline-block;
    border-radius: 2px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1), -1px -1px 1px rgba(0, 0, 0, 0.1);
    background-image: url(${no});
`

export const bandera_arabe = styled.div`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    visibility: visible;
    text-align: left;
    color: #fff;
    line-height: 29px;
    font-size: 12px;
    text-indent: 46px;
    margin: 0;
    padding: 0;
    background-repeat: no-repeat;
    background-size: 100%;
    height: 18px;
    width: 24px;
    position: absolute;
    left: 15px;
    top: 6px;
    display: inline-block;
    border-radius: 2px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1), -1px -1px 1px rgba(0, 0, 0, 0.1);
    background-image: url(${ar});
`

export const bandera_farsi = styled.div`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    visibility: visible;
    text-align: left;
    color: #fff;
    line-height: 29px;
    font-size: 12px;
    text-indent: 46px;
    margin: 0;
    padding: 0;
    background-repeat: no-repeat;
    background-size: 100%;
    height: 18px;
    width: 24px;
    position: absolute;
    left: 15px;
    top: 6px;
    display: inline-block;
    border-radius: 2px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1), -1px -1px 1px rgba(0, 0, 0, 0.1);
    background-image: url(${fa});
`

export const bandera_vietnamita = styled.div`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    visibility: visible;
    text-align: left;
    color: #fff;
    line-height: 29px;
    font-size: 12px;
    text-indent: 46px;
    margin: 0;
    padding: 0;
    background-repeat: no-repeat;
    background-size: 100%;
    height: 18px;
    width: 24px;
    position: absolute;
    left: 15px;
    top: 6px;
    display: inline-block;
    border-radius: 2px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1), -1px -1px 1px rgba(0, 0, 0, 0.1);
    background-image: url(${vi});
`

export const bandera_camboyano = styled.div`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    visibility: visible;
    text-align: left;
    color: #fff;
    line-height: 29px;
    font-size: 12px;
    text-indent: 46px;
    margin: 0;
    padding: 0;
    background-repeat: no-repeat;
    background-size: 100%;
    height: 18px;
    width: 24px;
    position: absolute;
    left: 15px;
    top: 6px;
    display: inline-block;
    border-radius: 2px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1), -1px -1px 1px rgba(0, 0, 0, 0.1);
    background-image: url(${km});
`


export const bandera_indonesio = styled.div`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    visibility: visible;
    text-align: left;
    color: #fff;
    line-height: 29px;
    font-size: 12px;
    text-indent: 46px;
    margin: 0;
    padding: 0;
    background-repeat: no-repeat;
    background-size: 100%;
    height: 18px;
    width: 24px;
    position: absolute;
    left: 15px;
    top: 6px;
    display: inline-block;
    border-radius: 2px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1), -1px -1px 1px rgba(0, 0, 0, 0.1);
    background-image: url(${id});
`

export const bandera_tailandes = styled.div`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    visibility: visible;
    text-align: left;
    color: #fff;
    line-height: 29px;
    font-size: 12px;
    text-indent: 46px;
    margin: 0;
    padding: 0;
    background-repeat: no-repeat;
    background-size: 100%;
    height: 18px;
    width: 24px;
    position: absolute;
    left: 15px;
    top: 6px;
    display: inline-block;
    border-radius: 2px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1), -1px -1px 1px rgba(0, 0, 0, 0.1);
    background-image: url(${th});
`

export const bandera_bengali = styled.div`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    visibility: visible;
    text-align: left;
    color: #fff;
    line-height: 29px;
    font-size: 12px;
    text-indent: 46px;
    margin: 0;
    padding: 0;
    background-repeat: no-repeat;
    background-size: 100%;
    height: 18px;
    width: 24px;
    position: absolute;
    left: 15px;
    top: 6px;
    display: inline-block;
    border-radius: 2px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1), -1px -1px 1px rgba(0, 0, 0, 0.1);
    background-image: url(${bn});
`

export const bandera_mandarin = styled.div`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    visibility: visible;
    text-align: left;
    color: #fff;
    line-height: 29px;
    font-size: 12px;
    text-indent: 46px;
    margin: 0;
    padding: 0;
    background-repeat: no-repeat;
    background-size: 100%;
    height: 18px;
    width: 24px;
    position: absolute;
    left: 15px;
    top: 6px;
    display: inline-block;
    border-radius: 2px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1), -1px -1px 1px rgba(0, 0, 0, 0.1);
    background-image: url(${cn});
`

export const copyright = styled.div`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    visibility: visible;
    margin: 0;
    padding: 0;
    color: #fff;
    padding-top: 15px;
    font-size: 14px;
    height: 65px;
`

export const derechos = styled.div`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    visibility: visible;
    color: #fff;
    font-size: 14px;
    margin: 0;
    padding: 0;
    height: 25px;
    line-height: 25px;
`

export const enlaces = styled.div`
    font: 12px/1.5 Avenir,Tahoma,Helvetica,"Microsoft YaHei";
    visibility: visible;
    color: #fff;
    font-size: 14px;
    margin: 0;
    padding: 0;
    height: 25px;
    line-height: 25px;
    &:hover{
        color: #ffab05;
    }
`

export const animacionCargar = styled.div`
    width: 100%;
    height: 100;
    display: flex;
    justify-content: center;
    align-items: center
` 