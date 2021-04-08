import styled from '@emotion/styled/macro';

import iconos from '../../assets/images/base.a0aebc1.png'


export const page_tabs_box = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    background-color: #fff;
    border-top: 1px solid #f1f1f1;
    position: relative;
    top: -41px;
    left: 220px;
    right: 0;
`

export const el_col_24 = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    margin: 0;
    padding: 0;
    float: left;
    box-sizing: border-box;
    width: 100%;
`

export const el_tabs_card = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    margin: 0;
    padding: 0;
    background: #fff;
` 

export const el_tabs_header = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    padding: 0;
    position: relative;
    margin: 0;
    height: 40px;
    border-bottom: 1px solid #f1f1f1;
`

export const el_tabs_nav_wrap = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    margin: 0;
    padding: 0;
    overflow: hidden;
    margin-bottom: -1px;
    position: relative;
`

export const el_tabs_nav_scroll = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    margin: 0;
    padding: 0;
    overflow: hidden;
`

export const el_tabs_nav = styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    margin: 0;
    padding: 0;
    white-space: nowrap;
    position: relative;
    transition: transform .3s,-webkit-transform .3s;
    float: left;
    z-index: 2;
    border-radius: 4px 4px 0 0;
    box-sizing: border-box;
    border: none;
    transform: translateX(0px);
`

export const el_tabs_item =styled.div`
    font: 400 14px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    white-space: nowrap;
    margin: 0;
    padding: 0 20px;
    display: inline-block;
    list-style: none;
    font-weight: 500;
    transition: color .3s cubic-bezier(.645,.045,.355,1),padding .3s cubic-bezier(.645,.045,.355,1);
    height: 40px;
    padding-left: 35px!important;
    border: none;
    border-right: 1px solid #f1f1f1;
    box-sizing: border-box;
    font-size: 14px;
    position: relative;
    border-left: none;
    border-bottom-color: #fff;
    color: #333;
    background-color: #f9fafb;
    border-top: 2px solid #ff9934;
    line-height: 36px;
    padding-right: 20px;
    &:hover{
        color: #ff9934;
    }
`

export const icon_vision = styled.i`
    height: 14px;
    width: 14px;
    display: block;
    position: absolute;
    left: 14px;
    top: 13px;
    background-image: url(${iconos});
    background-repeat: no-repeat;
    background-position: 0 -80px;
`