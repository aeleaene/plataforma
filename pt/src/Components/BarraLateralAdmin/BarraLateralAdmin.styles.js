import styled from '@emotion/styled/macro';

import fondo from '../../assets/images/logo-bg.3cba04d.png';
import logo_gps from '../../assets/images/logo.png';
import colapsar from '../../assets/images/descarga.png';
import perfil from '../../assets/images/perfil.jpg';
import iconos from '../../assets/images/base.a0aebc1.png'
import menus from '../../assets/images/menus.png'

export const body = styled.body`
    font: 400 14px Arial;
    padding: 0;
    margin: 0;
    overflow-y: hidden;
    height: 100%;
    background-color: green;
`

export const tip_box = styled.span`
    font: 400 14px Arial;
    background-color: #ffffcf;
    color: #333333;
    border: 1px solid #929200;
    line-height: 30px;
    padding: 0 6px;
    position: fixed;
    width: auto;
    white-space: nowrap;
    font-size: 14px;
    display: inline-block;
    z-index: 9999991;
    left: 1051px;
    top: 69px;
`

export const app = styled.div`
    font: 400 14px Arial;
    margin: 0;
    padding: 0;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    position: relative;
    min-width: 1300px;
    height: 100%;
    overflow: hidden;
`

export const app_main = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
`

export const sidebar_container = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    margin: 0;
    padding: 0;
    transition: width .28s;
    width: 290px!important;
    background-color: #001529;
    height: 100%;
    position: fixed;
    font-size: 0;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
`

export const header_logo = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    font-size: 0;
    margin: 0;
    padding: 0;
    background-repeat: no-repeat;
    padding-top: 0;
    text-align: center;
    height: 330px;
    box-sizing: border-box;
    background-image: url(${fondo});
    background-size: auto;
    position: relative;
    background-position: center -400px;
`

export const logo = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    font-size: 0;
    text-align: center;
    padding: 0;
    width: 162px;
    height: 60px;
    background-size: cover;
    margin: 0 auto 9px;
    background-image: url(${logo_gps});
`

export const collapse_btn = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    font-size: 0;
    text-align: center;
    margin: 0;
    padding: 0;
    background-repeat: no-repeat;
    position: absolute;
    right: -18px;
    top: 20px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-image: url(${colapsar});
    background-position: -108px 0;
    cursor: pointer;
    z-index: 9;
`

export const user_portrait = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    font-size: 0;
    text-align: center;
    padding: 0;
    background-repeat: no-repeat;
    background-position: 50%;
    width: 90px;
    height: 90px;
    background-size: 92px 92px;
    border-radius: 50%;
    margin: 40px auto auto;
    border: 1px solid hsla(0,0%,100%,.3);
    cursor: pointer;
    background-image: url(${perfil});
`

export const user_name = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
    margin-top: 10px;
    cursor: pointer;
    margin-bottom: 10px;
    font-size: 14px;
    color: #fff;
    text-align: center;
`

export const user_option = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    margin: 0;
    padding: 0;
    font-size: 12px;
    width: 100%;
    color: hsla(0,0%,100%,.5);
`

export const el_row_is_justify_center = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    font-size: 12px;
    color: hsla(0,0%,100%,.5);
    margin: 0;
    padding: 0;
    position: relative;
    box-sizing: border-box;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
`

export const user_option_item_password = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    font-size: 12px;
    color: hsla(0,0%,100%,.5);
    margin: 0;
    padding: 0;
    float: left;
    box-sizing: border-box;
    width: 25%;
    cursor: pointer;
`

export const user_option_item_password_wrapper = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    font-size: 12px;
    color: hsla(0,0%,100%,.5);
    cursor: pointer;
    margin: 0;
    padding: 0;
`
export const icono_password = styled.i`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    font-size: 12px;
    color: hsla(0,0%,100%,.5);
    cursor: pointer;
    background-image: url(${iconos});
    background-repeat: no-repeat;
    height: 30px;
    width: 30px;
    display: block;
    margin: 10px auto;
    background-position: 0 0;
`

export const user_option_item_profile = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    font-size: 12px;
    color: hsla(0,0%,100%,.5);
    margin: 0;
    padding: 0;
    float: left;
    box-sizing: border-box;
    width: 25%;
    cursor: pointer;
`

export const user_option_item_profile_wrapper = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    font-size: 12px;
    color: hsla(0,0%,100%,.5);
    cursor: pointer;
    margin: 0;
    padding: 0;
`

export const icono_profile = styled.icon`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    font-size: 12px;
    color: hsla(0,0%,100%,.5);
    cursor: pointer;
    background-image: url(${iconos});
    background-repeat: no-repeat;
    height: 30px;
    width: 30px;
    display: block;
    margin: 10px auto;
    background-position: 0 -123px;
`

export const user_option_item_logout = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    font-size: 12px;
    color: hsla(0,0%,100%,.5);
    margin: 0;
    padding: 0;
    float: left;
    box-sizing: border-box;
    width: 25%;
    cursor: pointer;
`

export const user_option_item_logout_wrapper = styled.a`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    font-size: 12px;
    text-decoration: none;
    cursor: pointer;
    outline: none;
    display: inline-block;
    width: 100%;
    overflow: hidden;
    color: hsla(0,0%,100%,.5);
`

export const icono_logout = styled.i`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    font-size: 12px;
    cursor: pointer;
    color: hsla(0,0%,100%,.5);
    background-image: url(${iconos});
    background-repeat: no-repeat;
    height: 30px;
    width: 30px;
    display: block;
    margin: 10px auto;
    background-position: 0 -161px;
`
export const el_scrollbar = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    font-size: 0;
    margin: 0;
    padding: 0;
    overflow: hidden;
    position: relative;
    height: calc(100% - 330px);
    ::-webkit-scrollbar {
    display: none;
}
`

export const scrollbar_wrapper = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    font-size: 0;
    margin: 0;
    padding: 0;
    overflow: scroll;
    height: 100%;
    overflow-x: hidden!important;
    margin-bottom: -6px;
    margin-right: -6px;
    ::-webkit-scrollbar {
    display: none;
}
`

export const scrollbar_view = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    font-size: 0;
    margin: 0;
    padding: 0;
    ::-webkit-scrollbar {
    display: none;
}
`

export const menu_box = styled.ul`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    font-size: 0;
    padding: 0;
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
    border: none;
    height: 100%;
    width: 100%!important;
    background-color: #001529;
`

export const el_menu_item = styled.li`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    height: 56px;
    line-height: 56px;
    font-size: 14px;
    padding: 0 20px;
    list-style: none;
    cursor: pointer;
    position: relative;
    transition: border-color .3s,background-color .3s,color .3s;
    box-sizing: border-box;
    white-space: nowrap;
    background-color: #192d3f;
    color: #ff9934;
    padding-left: 20px;
    &:hover{
        background-color: #233645;
    }
`

export const icono_dashboard = styled.i`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    line-height: 56px;
    list-style: none;
    cursor: pointer;
    white-space: nowrap;
    margin-right: 5px;
    width: 16px;
    height: 16px;
    display: inline-block;
    background-repeat: no-repeat;
    text-align: center;
    font-size: 18px;
    vertical-align: middle;
    background-image: url(${menus});
    background-position: 0 -2px;
    color: inherit;
    opacity: 1;
`

export const el_menu_item_uf = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    height: 56px;
    line-height: 56px;
    font-size: 14px;
    padding: 0 20px;
    list-style: none;
    cursor: pointer;
    position: relative;
    transition: border-color .3s,background-color .3s,color .3s;
    box-sizing: border-box;
    white-space: nowrap;
    color: hsla(0,0%,100%,.65);
    padding-left: 20px;
    &:hover{
        background-color: #233645;
    }
`

export const icono_bussines = styled.i`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    line-height: 56px;
    list-style: none;
    cursor: pointer;
    white-space: nowrap;
    margin-right: 5px;
    width: 16px;
    height: 16px;
    display: inline-block;
    background-repeat: no-repeat;
    text-align: center;
    font-size: 18px;
    vertical-align: middle;
    background-image: url(${menus});
    background-position: -3px -62px;
    color: #909399;
    opacity: .7;
`

export const el_menu_item_uf_border = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    height: 56px;
    line-height: 56px;
    font-size: 14px;
    padding: 0 20px;
    list-style: none;
    cursor: pointer;
    position: relative;
    transition: border-color .3s,background-color .3s,color .3s;
    box-sizing: border-box;
    white-space: nowrap;
    margin-top: 10px;
    border-top: 1px solid #1a2d3e;
    color: hsla(0,0%,100%,.65);
    padding-left: 20px;
    &:hover{
        background-color: #233645;
    }
`

export const icono_add = styled.i`
font: 400 14px Arial;
font-family: Avenir,Helvetica,Arial,sans-serif;
-webkit-font-smoothing: antialiased;
line-height: 56px;
list-style: none;
cursor: pointer;
white-space: nowrap;
margin-right: 5px;
width: 16px;
height: 16px;
display: inline-block;
background-repeat: no-repeat;
text-align: center;
font-size: 18px;
vertical-align: middle;
background-image: url(${menus});
background-position: 0 -102px;
color: #909399;
opacity: .7;
`

export const icono_add_obj = styled.i`
font: 400 14px Arial;
font-family: Avenir,Helvetica,Arial,sans-serif;
-webkit-font-smoothing: antialiased;
line-height: 56px;
list-style: none;
cursor: pointer;
white-space: nowrap;
margin-right: 5px;
width: 16px;
height: 16px;
display: inline-block;
background-repeat: no-repeat;
text-align: center;
font-size: 18px;
vertical-align: middle;
background-image: url(${menus});
background-position: 0 -141px;
color: #909399;
opacity: .7;
`

export const opcion_tarjeta = styled.div`
    font: 400 14px Arial;
    margin: 0;
    padding: 0;
    width: 200px;
    position: fixed;
    z-index: 9999;
    background-color: #001529;
    top: 565px;
    left: 290px;
    display: none;
`

export const menu_border = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    font-size: 0;
    list-style: none;
    margin: 0;
    padding: 0;
    border-top: 1px solid #1a2d3e;
`

export const wrapper_card = styled.div`
    margin: 0;
    padding: 0;
    border-top: 1px solid #1a2d3e;
    cursor: pointer;
    &:hover{
        ${opcion_tarjeta}{
            display: block;
        }
        }
`

export const icono_card = styled.i`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    line-height: 56px;
    list-style: none;
    cursor: pointer;
    white-space: nowrap;
    margin-right: 5px;
    width: 16px;
    height: 16px;
    display: inline-block;
    background-repeat: no-repeat;
    text-align: center;
    font-size: 18px;
    vertical-align: middle;
    background-image: url(${menus});
    background-position: -161px -64px;
    color: #909399;
    opacity: .7;
`

export const contenido_opcion_tarjeta = styled.ul`
    font: 400 14px Arial;
    list-style: none;
    position: relative;
    margin: 0;
    z-index: 100;
    min-width: 200px;
    border: none;
    padding: 5px 0;
    border-radius: 2px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    margin-left: 5px;
    margin-right: 5px;
    background-color: #001529;
    max-height: 100vh;
    overflow-y: auto;

`

export const contenido_opcion_tarjeta_item = styled.a`
    font: 400 14px Arial;
    list-style: none;
    text-decoration: none;
    color: #20a8d8;
    cursor: pointer;
    outline: none;

`

export const contenido_opcion_tarjeta_item_texto = styled.li`
    font: 400 14px Arial;
    margin: 0;
    height: 56px;
    line-height: 56px;
    font-size: 14px;
    padding: 0 20px;
    list-style: none;
    cursor: pointer;
    position: relative;
    transition: border-color .3s,background-color .3s,color .3s;
    box-sizing: border-box;
    white-space: nowrap;
    padding-left: 20px;
    color: hsla(0,0%,100%,.65);
    &:hover{
        background-color: #233645;
    }
`

export const icono_chevron = styled.i`
    font: 400 14px Arial;
    list-style: none;
    cursor: pointer;
    white-space: nowrap;
    font-family: element-icons!important;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    color: #909399;
    position: absolute;
    right: 2px;
    top: 24px;
    font-size: 12px!important;
    margin-right: 5px;
    width: 24px;
    text-align: center;
    vertical-align: middle;
`

export const icono_imei = styled.i`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    line-height: 56px;
    list-style: none;
    cursor: pointer;
    white-space: nowrap;
    margin-right: 5px;
    width: 16px;
    height: 16px;
    display: inline-block;
    background-repeat: no-repeat;
    text-align: center;
    font-size: 18px;
    vertical-align: middle;
    background-image: url(${menus});
    background-position: -42px -142px;
    color: #909399;
    opacity: .7;
`

export const icono_func = styled.i`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    line-height: 56px;
    list-style: none;
    cursor: pointer;
    white-space: nowrap;
    margin-right: 5px;
    width: 16px;
    height: 16px;
    display: inline-block;
    background-repeat: no-repeat;
    text-align: center;
    font-size: 18px;
    vertical-align: middle;
    background-image: url(${menus});
    background-position: -21px -140px;
    pointer-events: none;
    color: #909399;
    opacity: .7;
`