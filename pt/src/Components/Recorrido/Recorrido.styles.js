import styled from '@emotion/styled/macro';
import iconoPlay from '../../assets/images/base.54837cf.png';
import iconoMapa from '../../assets/images/mapIcons.a9fc51a.png';

export const Body = styled.body`
    overflow-y: hidden;
    width: 100%;
    height: 100%;
    font: 400 13.3333px Arial;
    margin: 0;
    padding: 0;
`;

export const app = styled.div`
    font: 400 13.3333px Arial;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    min-width: 1200px;
`;

export const playback_box = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    margin: 0;
    padding: 0;
    height: 887px;
`;

export const playback_header = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    margin: 0;
    position: relative;
    box-sizing: border-box;
    min-height: 40px;
    padding: 5px 0;
    text-align: center;
    box-shadow: 1px 1px 5px rgba(0,0,0,.2);
    z-index: 1000;
    background-color: #fff;
    min-width: 1200px;
    padding-right: 160px;
`;

export const el_form = styled.form`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    text-align: center;
    margin: 0;
    padding: 0;
`;

export const el_form_item = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    text-align: center;
    margin: 0;
    padding: 0;
    display: inline-block;
    vertical-align: top;
    margin-right: 10px;
    margin-bottom: 0;
`;

export const el_form_item_label = styled.label`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    text-align: right;
    vertical-align: middle;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
    float: none;
    display: inline-block;
`;

export const el_form_item_content = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    text-align: center;
    margin: 0;
    padding: 0;
    line-height: 40px;
    position: relative;
    font-size: 14px;
    display: inline-block;
    vertical-align: top;
`;

export const w150 = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    margin: 0;
    padding: 0;
    position: relative;
    width: 150px;
    padding-right: 20px;
`;

export const el_select_device = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    line-height: 40px;
    margin: 0;
    display: inline-block;
    position: relative;
    border: none;
    outline: 0;
    padding: 0;
    color: #666;
    font-size: 14px;
    appearance: none;
    height: 28px;
    background-color: transparent;
    width: 100%;
    margin-left: 0;
`;

export const el_input = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    line-height: 40px;
    color: #666;
    margin: 0;
    padding: 0;
    position: relative;
    font-size: 14px;
    width: 100%;
    display: block;
`;

export const el_input_inner = styled.input`
    -webkit-font-smoothing: antialiased;
    margin: 0;
    -webkit-appearance: none;
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
    height: 26px;
    line-height: 26px;
    padding-left: 6px;
    cursor: pointer;
    padding-right: 30px;
`;

export const el_input_prefix = styled.span`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    line-height: 40px;
    font-size: 14px;
    position: absolute;
    top: 0;
    color: #c0c4cc;
    text-align: center;
    right: 5px;
    transition: all .3s;
    pointer-events: none;
    height: 26px;
`;

export const el_input_prefix_inner = styled.span`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    line-height: 40px;
    font-size: 14px;
    position: absolute;
    top: 0;
    color: #c0c4cc;
    text-align: center;
    right: 5px;
    transition: all .3s;
    pointer-events: none;
    height: 26px;
`;

export const el_select_caret = styled.i`
    font: 400 13.3333px Arial;
    pointer-events: all;
    font-family: element-icons!important;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    vertical-align: baseline;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    height: 100%;
    width: 25px;
    text-align: center;
    color: #c0c4cc;
    font-size: 14px;
    transition: transform .3s;
    transform: rotate(180deg);
    cursor: pointer;
    line-height: 26px;
`;

export const el_select_dropdown = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    line-height: 40px;
    color: #666;
    font-size: 14px;
    padding: 0;
    position: absolute;
    border: 1px solid #e4e7ed;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    box-sizing: border-box;
    margin: 5px 0;
    text-align: left;
    margin-left: -5px;
    min-width: 150px;
    transform-origin: center top;
    z-index: 2033;
    display: none;
`;

export const el_scrollbar = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    line-height: 40px;
    color: #666;
    font-size: 14px;
    text-align: left;
    margin: 0;
    padding: 0;
    overflow: hidden;
    position: relative;
`;

export const el_select_dropdown_wrap = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    line-height: 40px;
    color: rgb(102, 102, 102);
    font-size: 14px;
    text-align: left;
    margin: 0px;
    padding: 0px;
    max-height: 274px;
    overflow-y: scroll;
    height: 100%;
    margin-bottom: -6px;
    margin-right: -6px;
`;

export const el_scrollbar_view = styled.ul`
    font: 400 13.3333px Arial;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    line-height: 40px;
    color: rgb(102, 102, 102);
    font-size: 14px;
    text-align: left;
    list-style: none;
    padding: 6px 0px;
    margin: 0px;
    box-sizing: border-box;
`;

export const el_select_dropdown_item = styled.li`
    font: 400 13.3333px Arial;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    margin: 0px;
    list-style: none;
    white-space: nowrap;
    font-size: 14px;
    padding: 0px 20px;
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgb(96, 98, 102);
    height: 34px;
    line-height: 34px;
    box-sizing: border-box;
    cursor: pointer;
`;

export const el_scrollbar_horizontal = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    line-height: 40px;
    color: rgb(102, 102, 102);
    font-size: 14px;
    text-align: left;
    margin: 0px;
    padding: 0px;
    position: absolute;
    right: 2px;
    bottom: 2px;
    z-index: 1;
    border-radius: 4px;
    opacity: 0;
    transition: opacity 0.12s ease-out 0s;
    height: 6px;
    left: 2px;
`;

export const el_scrollbar_thumb = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    line-height: 40px;
    color: rgb(102, 102, 102);
    font-size: 14px;
    text-align: left;
    margin: 0px;
    padding: 0px;
    position: relative;
    display: block;
    width: 0px;
    cursor: pointer;
    border-radius: inherit;
    background-color: rgba(144, 146, 152, 0.3);
    transition: background-color 0.3s ease 0s;
    height: 100%;
    transform: translateX(0%);
`;

export const el_scrollbar_vertical = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    line-height: 40px;
    color: rgb(102, 102, 102);
    font-size: 14px;
    text-align: left;
    margin: 0px;
    padding: 0px;
    position: absolute;
    right: 2px;
    bottom: 2px;
    z-index: 1;
    border-radius: 4px;
    opacity: 0;
    transition: opacity 0.12s ease-out 0s;
    width: 6px;
    top: 2px;
`;

export const el_scrollbar_thumb_v = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    line-height: 40px;
    color: rgb(102, 102, 102);
    font-size: 14px;
    text-align: left;
    margin: 0px;
    padding: 0px;
    position: relative;
    display: block;
    cursor: pointer;
    border-radius: inherit;
    background-color: rgba(144, 146, 152, 0.3);
    transition: background-color 0.3s ease 0s;
    width: 100%;
    transform: translateY(485.821%);
    height: 11.047%;
`;

export const popper_arrow = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    line-height: 40px;
    color: black;
    font-size: 14px;
    text-align: left;
    margin: 0px;
    padding: 0px;
    position: absolute;
    display: block;
    width: 0px;
    height: 0px;
    border-color: transparent;
    border-style: solid;
    border-width: 6px;
    filter: drop-shadow(rgba(0, 0, 0, 0.03) 0px 2px 12px);
    top: -6px;
    margin-right: 3px;
    border-top-width: 0px;
    border-bottom-color: rgb(235, 238, 245);
    left: 30px;
`;

export const form_item_detail = styled.i`
    font: 400 13.3333px Arial;
    color: rgb(44, 62, 80);
    text-align: center;
    line-height: 40px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    font-family: iconfont !important;
    font-size: 16px;
    position: absolute;
    right: 0px;
    cursor: pointer;
`;

export const el_popover_reference_wrapper = styled.span`
    font: 400 13.3333px Arial;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    color: rgb(44, 62, 80);
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    &:hover{
        color: rgb(255, 153, 52);
    }
`;



export const iconfont = styled.i`
    font: 400 13.3333px Arial;
    text-align: center;
    line-height: 40px;
    color: rgb(44, 171, 227);
    cursor: pointer;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    font-family: iconfont !important;
`;

export const link = styled.a`
    font: 400 13.3333px Arial;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    text-decoration: none;
    color: rgb(44, 171, 227);
    cursor: pointer;
    &:hover{
        color: rgb(255, 153, 52);
        ${iconfont}{
            color: rgb(255, 153, 52);
        }
    }
`;



export const el_button_warning = styled.button`
    -webkit-font-smoothing: antialiased;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: rgb(255, 255, 255);
    border: 1px solid rgb(220, 223, 230);
    appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: 0px;
    margin: 0px;
    transition: all 0.1s ease 0s;
    font-weight: 500;
    user-select: none;
    font-size: 14px;
    border-radius: 4px;
    color: rgb(255, 255, 255);
    background-color: rgb(255, 153, 52);
    border-color: rgb(255, 153, 52);
    padding: 7px 15px;
    &:hover{
    background-color: rgb(252, 180, 110);
    border-color: rgb(252, 180, 110);
    }
`;

export const el_button_info = styled.button`
    -webkit-font-smoothing: antialiased;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: rgb(255, 255, 255);
    border: 1px solid rgb(220, 223, 230);
    appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: 0px;
    margin: 0px;
    transition: all 0.1s ease 0s;
    font-weight: 500;
    user-select: none;
    font-size: 14px;
    border-radius: 4px;
    color: rgb(255, 255, 255);
    background-color: rgb(144, 147, 153);
    border-color: rgb(144, 147, 153);
    padding: 7px 15px;
    margin-left: 10px;
    &:hover{
    background-color: rgb(252, 180, 110);
    border-color: rgb(252, 180, 110);
    }
`;

export const el_button_default = styled.button`
    -webkit-font-smoothing: antialiased;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: rgb(255, 255, 255);
    border: 1px solid rgb(220, 223, 230);
    color: rgb(96, 98, 102);
    appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: 0px;
    margin: 0px;
    transition: all 0.1s ease 0s;
    font-weight: 500;
    user-select: none;
    font-size: 14px;
    border-radius: 4px;
    padding: 7px 15px;
    margin-left: 10px;
    &:hover{
    background-color: rgb(252, 180, 110);
    border-color: rgb(252, 180, 110);
    }
`;

export const outline_play_btn = styled.a`
    font: 400 13.3333px Arial;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    position: absolute;
    color: rgb(120, 121, 124);
    right: 10px;
    top: 16px;
    &:hover{
        color: rgb(255, 153, 52);
    }
`

export const play_progress_box = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    color: rgb(44, 62, 80);
    margin: 0px;
    padding: 0px;
    position: absolute;
    left: 22%;
    width: 56%;
    background-color: rgb(89, 102, 115);
    height: 40px;
    z-index: 999;
    bottom: 60px;
`;

export const play_progress_content = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    color: rgb(44, 62, 80);
    margin: 0px;
    position: relative;
    padding: 0px 150px 0px 45px;
    height: 40px;
    box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 2px, rgba(0, 0, 0, 0.2) -1px -1px 2px;
`;

export const play_progress_stop = styled.span`
    font: 400 13.3333px Arial;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    color: rgb(44, 62, 80);
    background-repeat: no-repeat;
    cursor: pointer;
    height: 30px;
    width: 30px;
    position: absolute;
    left: 5px;
    top: 5px;
    display: inline-block;
    background-image: url(${iconoPlay});
    background-position: 10px -392px;
`;

export const left_map_control = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    color: rgb(44, 62, 80);
    margin: 0px;
    padding: 0px;
    position: absolute;
    left: 10px;
    top: 45%;
    height: 122px;
    margin-top: -66px;
    width: 40px;
    z-index: 998;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 2px, rgba(0, 0, 0, 0.2) -1px -1px 2px;
`;

export const l_m_c_item = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    color: rgb(44, 62, 80);
    margin: 0px;
    padding: 0px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    width: 100%;
    cursor: pointer;
    border-bottom: 1px solid rgb(220, 223, 230);
`;

export const iconfont_speed = styled.i`
    font: 400 13.3333px Arial;
    color: rgb(44, 62, 80);
    text-align: center;
    line-height: 40px;
    cursor: pointer;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    font-family: iconfont !important;
    font-size: 20px;
    &:hover{
        color: #fff;
        ${l_m_c_item}{
            background-color: rgb(255, 153, 52);
        }
    }
`;

export const right_map_control = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    color: rgb(44, 62, 80);
    margin: 0px;
    padding: 0px;
    position: absolute;
    right: 10px;
    top: 45%;
    height: 204px;
    margin-top: -66px;
    width: 40px;
    z-index: 998;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 2px, rgba(0, 0, 0, 0.2) -1px -1px 2px;
`;

export const alert_icon = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    margin: 0px;
    padding: 0px;
    background-repeat: no-repeat;
    height: 40px;
    width: 100%;
    cursor: pointer;
    border-bottom: 1px solid rgb(220, 223, 230);
    background-image: url(${iconoMapa});
    color: rgb(255, 255, 255);
    background-color: rgb(255, 153, 52);
    border-color: rgb(255, 255, 255);
    background-position: -54px 8px;
`;

export const starting_icon = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    color: rgb(44, 62, 80);
    margin: 0px;
    padding: 0px;
    background-repeat: no-repeat;
    height: 40px;
    width: 100%;
    cursor: pointer;
    border-bottom: 1px solid rgb(220, 223, 230);
    background-image: url(${iconoMapa});
    background-position: -113px 6px;
`;

export const stop_icon = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    color: rgb(44, 62, 80);
    margin: 0px;
    padding: 0px;
    background-repeat: no-repeat;
    height: 40px;
    width: 100%;
    cursor: pointer;
    border-bottom: 1px solid rgb(220, 223, 230);
    background-image: url(${iconoMapa});
    background-position: 10px -52px;
`;

export const info_icon = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    color: rgb(44, 62, 80);
    margin: 0px;
    padding: 0px;
    background-repeat: no-repeat;
    height: 40px;
    width: 100%;
    cursor: pointer;
    border-bottom: 1px solid rgb(220, 223, 230);
    background-image: url(${iconoMapa});
    background-position: -113px -52px;
`;

export const route_icon = styled.div`
    font: 400 13.3333px Arial;
    margin: 0px;
    padding: 0px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    font-family: iconfont !important;
    height: 40px;
    width: 100%;
    cursor: pointer;
    text-align: center;
    line-height: 40px;
    font-size: 20px;
    background-image: none;
    color: rgb(167, 177, 194);
    border: none;
`;