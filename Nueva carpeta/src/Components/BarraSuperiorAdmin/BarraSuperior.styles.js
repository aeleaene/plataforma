import styled from '@emotion/styled/macro';

import iconos from '../../assets/images/base.a0aebc1.png'

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

export const header_top = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    left: 225px;
    right: 0;
`

export const header_box = styled.header`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    position: relative;
    height: 78px;
`

export const header_content = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    margin: 0;
    padding: 0;
`

export const btn_monitor = styled.a`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    text-decoration: none;
    cursor: pointer;
    outline: none;
    display: inline-block;
    height: 78px;
    line-height: 78px;
    font-size: 16px;
    color: #ff9934;
    margin-left: 50px;
`

export const base_icon = styled.i`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    cursor: pointer;
    line-height: 78px;
    font-size: 16px;
    color: #ff9934;
    background-image: url(${iconos});
    background-repeat: no-repeat;
    height: 14px;
    width: 16px;
    display: inline-block;
    background-position: -41px -1px;
    margin-right: 10px;
    position: relative;
    top: 2px;
`

export const search_box = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    margin: 0;
    padding: 0;
    width: 560px;
    position: absolute;
    height: 36px;
    left: 50%;
    top: 50%;
    margin-left: -330px;
    margin-top: -18px;
`

export const header_search_box = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    margin: 0;
    padding: 0;
    position: relative;
    float: left;
    display: inline;
    width: 310px;
    height: 36px;
`

export const prefix_header_search_box = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    margin: 0;
    padding: 0;
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 100%;
`

export const base_icon_device = styled.i`
    -webkit-font-smoothing: antialiased;
    white-space: nowrap;
    cursor: pointer;
    text-align: center;
    font-weight: 400;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    line-height: 1;
    color: #656565;
    font-size: 14px;
    background-image: url(${iconos});
    background-repeat: no-repeat;
    display: inline-block;
    width: 13px;
    height: 14px;
    margin-right: 10px;
    background-position: -42px -41px;
    position: relative;
    top: 2px;
    left: 4px;
`

export const btn_search_device = styled.button`
    -webkit-font-smoothing: antialiased;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 400;
    float: left;
    display: inline;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    border: 1px solid #dbe1e5;
    height: 36px;
    line-height: 1;
    padding: 0 10px;
    border-radius: 0;
    color: #656565;
    font-size: 14px;
    margin-left: -1px;
    &:hover{
        border-color: #ff9934;
        background-color: #fff5eb; 
        ${base_icon_device}{
            background-image: url(${iconos});
            background-repeat: no-repeat;
            display: inline-block;
            width: 13px;
            height: 14px;
            margin-right: 10px;
            background-position: -81px -41px;
            position: relative;
            top: 2px;
            left: 4px;
        }
    }
`



export const input_inner = styled.input`
    -webkit-font-smoothing: antialiased;
    margin: 0;
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
    height: 36px;
    line-height: 36px;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    padding-right: 30px;
    border: 1px solid #dbe1e5;
    border-radius: 0;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    padding-left: 36px;
    &:hover{
        border-color: #ff9934;
    }
`

export const input_prefix = styled.span`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 14px;
    position: absolute;
    left: 5px;
    top: 0;
    color: #c0c4cc;
    height: 100%;
    text-align: center;
    transition: all .3s;
`
export const icon_search_box = styled.i`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 14px;
    color: #c0c4cc;
    text-align: center;
    transition: all .3s;
    width: 25px;
    background-image: url(${iconos});
    background-repeat: no-repeat;
    display: inline-block;
    background-position: -36px -120px;
    height: 36px;
    line-height: 36px;
`

export const base_icon_user = styled.i`
-webkit-font-smoothing: antialiased;
white-space: nowrap;
cursor: pointer;
text-align: center;
font-weight: 400;
font-family: Avenir,Helvetica,Arial,sans-serif;
line-height: 1;
color: #656565;
font-size: 14px;
background-image: url(${iconos});
background-repeat: no-repeat;
display: inline-block;
height: 14px;
margin-right: 10px;
background-position: -39px -78px;
position: relative;
top: 1px;
left: 4px;
width: 16px;
`


export const btn_search_user = styled.button`
-webkit-font-smoothing: antialiased;
white-space: nowrap;
cursor: pointer;
background: #fff;
-webkit-appearance: none;
text-align: center;
box-sizing: border-box;
outline: none;
margin: 0;
transition: .1s;
font-weight: 400;
float: left;
display: inline;
font-family: Avenir,Helvetica,Arial,sans-serif;
border: 1px solid #dbe1e5;
height: 36px;
line-height: 1;
padding: 0 10px;
border-radius: 0;
color: #656565;
font-size: 14px;
margin-left: -1px;
&:hover{
        border-color: #ff9934;
        background-color: #fff5eb; 
        ${base_icon_user}{
            background-image: url(${iconos});
            background-repeat: no-repeat;
            display: inline-block;
            width: 13px;
            height: 14px;
            margin-right: 10px;
            background-position: -78px -78px;
            position: relative;
            top: 2px;
            left: 4px;
        }
    }
`


export const header_option = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    margin: 0;
    padding: 0;
    position: absolute;
    right: 28px;
    top: 19px;
    width: 250px;
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    -webkit-box-align: end;
    align-items: flex-end;
`

export const go_back_icon = styled.i`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #20a8d8;
    background-image: url(${iconos});
    background-repeat: no-repeat;
    height: 20px;
    width: 20px;
    display: inline-block;
    cursor: pointer;
    margin-left: 20px;
    background-position: 0 -250px;
    position: relative;
    top: 0;
    &:hover{
        background-position: -38px -250px;
    }
`

export const badge_item = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    margin: 0;
    padding: 0;
    position: relative;
    vertical-align: middle;
    display: inline-block;
`

export const message_icon = styled.i`
font: 400 14px Arial;
font-family: Avenir,Helvetica,Arial,sans-serif;
-webkit-font-smoothing: antialiased;
color: #2c3e50;
background-image: url(${iconos});
background-repeat: no-repeat;
height: 20px;
width: 20px;
display: inline-block;
cursor: pointer;
margin-left: 20px;
background-position: 0 -220px;
position: relative;
top: 5px;
&:hover{
        background-position: -38px -220px;
    }
`

export const set_icon = styled.i`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    background-image: url(${iconos});
    background-repeat: no-repeat;
    height: 20px;
    width: 20px;
    display: inline-block;
    cursor: pointer;
    margin-left: 20px;
    background-position: 0 -291px;
    position: relative;
    top: -1px;
    &:hover{
        background-position: -38px -291px;
    }
`
export const user_lang = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    margin: 0;
    padding: 0;
    background-repeat: no-repeat;
    background-position: 50%;
    display: inline-block;
    width: 24px;
    height: 18px;
    position: relative;
    top: 1px;
    margin-left: 10px;
    background-size: cover;
    cursor: pointer;
    background-image: url(${es});
`