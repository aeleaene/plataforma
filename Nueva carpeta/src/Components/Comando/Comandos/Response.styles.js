
import styled from '@emotion/styled/macro';

export const response_wrapper= styled.div`
    font: 400 13.3333px Arial;
    margin: 0;
    padding: 0;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 2003;
    background-color: rgba(0, 0, 0, 0.3);
    display: ${props => props.visibility? 'none':'block'};
`

export const el_message_box = styled.div`
font: 400 13.3333px Arial;
margin: 0;
padding: 0;
overflow: hidden;
display: inline-block;
width: 420px;
position: fixed;
top: 40%;
left: 45%;
padding-bottom: 10px;
vertical-align: middle;
background-color: #fff;
border-radius: 4px;
border: 1px solid #ebeef5;
font-size: 18px;
box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
text-align: left;
backface-visibility: hidden;
`;

export const el_message_box_header = styled.div`
font: 400 13.3333px Arial;
font-size: 18px;
text-align: left;
margin: 0;
position: relative;
padding: 10px 11px 2px;
`;

export const el_message_box_content = styled.div`
font: 400 13.3333px Arial;
text-align: left;
margin: 0;
padding: 10px 15px;
color: #606266;
font-size: 14px;
`;

export const el_message_box_btns = styled.div`
font: 400 13.3333px Arial;
font-size: 18px;
margin: 0;
padding: 5px 15px 0;
text-align: right;
`;

export const el_message_box_title = styled.div`
    font: 400 13.3333px Arial;
    text-align: left;
    margin: 0;
    padding: 0;
    padding-left: 0;
    margin-bottom: 0;
    font-size: 18px;
    line-height: 1;
    color: #303133;
`;

export const Span = styled.span`
    font: 400 13.3333px Arial;
    text-align: left;
    font-size: 18px;
    line-height: 1;
    color: #303133;
`;

export const el_message_box_headerBtn = styled.button`
    margin: 0;
    position: absolute;
    top: 15px;
    right: 15px;
    padding: 0;
    border: none;
    outline: 0;
    background: 0 0;
    font-size: 16px;
    cursor: pointer;
`;

export const el_message_box_close = styled.i`
    font-size: 16px;
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
    color: #909399;
    &:hover{
        color: #4DA4FF;
    }
`;

export const el_message_box_container = styled.div`
    font: 400 13.3333px Arial;
    text-align: left;
    color: #606266;
    font-size: 14px;
    margin: 0;
    padding: 0;
    position: relative;
`;

export const el_message_box_status = styled.div`
    font: 400 13.3333px Arial;
    text-align: left;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 24px!important;
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
    color: #909399;
`;

export const el_message_box_message = styled.div`
    font: 400 13.3333px Arial;
    text-align: left;
    color: #606266;
    font-size: 14px;
    padding: 0;
    margin: 0;
    padding-left: 36px;
    padding-right: 12px;
`;

export const P = styled.p`
    font: 400 13.3333px Arial;
    text-align: left;
    color: #606266;
    font-size: 14px;
    padding: 0;
    margin: 0;
    line-height: 24px;
`;

export const f13 = styled.p`
    font: 400 13.3333px Arial;
    text-align: left;
    color: #606266;
    padding: 0;
    font-size: 13px;
    margin: 0;
    line-height: 24px;
    word-wrap: break-word;
    word-break: break-all;
`