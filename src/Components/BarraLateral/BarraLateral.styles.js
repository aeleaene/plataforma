import styled from '@emotion/styled';
import fondo from '../../assets/images/logo-bg.3cba04d.png';
import perfil from '../../assets/images/perfil.jpg';



export const BarraLateralContainer = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 72px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 3000;
    box-shadow: 1px 1px 1px #24313d;
    height: 100%;
    background-color: #001529;
`

export const account = styled.div`
    height: 46px;
    width: 72px;
    cursor: pointer;
    padding: 27px 0;
    background: url(${fondo}) no-repeat;
    background-size: auto;
    background-position: center -28px;
    &:hover images_box {
            border: 1px solid #fff;
    }
    &:hover .menu_account_name {
        color: #ffb711;
    }
    &:hover .profile_submenu_box {
        display: block
    }
`;

export const images_box = styled.div`
    box-sizing: border-box;
    height: 46px;
    width: 46px;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    margin-left: 13px;
    border-radius: 55%;
    text-align: center;
    background-image: url(${perfil});

`

export const menu_account_name = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    cursor: pointer;
    margin: 0;
    padding: 0;
    text-align: center;
    color: #fff;
    font-size: 12px;
    padding-left: 5px;
    margin-top: 6px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &:hover {  }
`

export const menu_box = styled.div`
    height: 100%;
    background-color: #001529;
`



export const profile_submenu_box = styled.div`
   
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    margin: 0;
    padding: 0;
    z-index: 9999;
    background-color: #001529;
`

export const submenu_box = styled.div`
    position: absolute;
    background-color: #001529;
    top: 20px;
    left: 72px;
    cursor: pointer;
    z-index: 9999;
`




export const submenu_item = styled.div`
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
`