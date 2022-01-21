import styled from '@emotion/styled/macro';

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
`;
export const Options = styled.ul`
    margin: 0px;
    list-style: none;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0px 0px 0px 20px;
    
`;
export const SpanOptions = styled.li`
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
    margin: 0px 20px 0px 2px;
    border-bottom: 2px solid transparent;
    height: 39px;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover{
        color: #ff9934;
    }
`;
export const Horario = styled.a`
    text-align: right;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
    margin: 0px 10px 0px 0px;
    color: #2cabe3;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover{
        color: #ff9934;
    }
`;
export const Hr = styled.div`
    background-color: #e4e7ed;
    height: 2px;
`;
export const Contenedor = styled.div`
    background-color: #fbfbfb;
    display: flex;
    flex-direction: row;
`;
export const ContentComands = styled.div`
    width: 100%;
    flex: 1.2;
    
    border-right: 1px solid #f9f2f2;
`;
export const ComandsBody = styled.div`
    width: 100%;
    flex: 2;
`;

export const HeadComands = styled.span`
    padding: 0px 0px 0px 10px;
    font-size: 13.3px;
    color: #606266;
    display: flex;
    align-items: center;
    height: 34px;
    font-family: Arial, Helvetica, sans-serif;
    border-bottom: 1px solid #f9f2f2;
`;
export const ComandList = styled.ul`
    list-style: none;
    margin-left: 0px;
    margin-bottom: 0px;
    margin-top: 2px;
    padding-left: 0px;
`;
export const ComandElem = styled.li`
    height: 35px;
    text-indent: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: #606266;
    font-size: 13.3px;
    font-family: Arial, Helvetica, sans-serif;
`;

export const HistorialBody = styled.div`

`;
export const HistorialNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    padding: 10px;
    border-bottom: 1px solid #e8e8ea;
`;
export const divNav1 = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
export const duvNav2 = styled.div`
    width: 100%;
`;
export const HistorialSelect = styled.select`
    width: 100%;
    height: 30px;
    background-color: #ffffff;
    padding: 0px 30px 0px 5px;
    border: 1px solid #dcdfe6;
    color: #606266;
`;
export const HistorialButton = styled.button`
    margin: 0px 0px 0px 10px;
    background-color: #ff9934;
    border-color: #ff9934;
    border: none;
    color: #ffffff;
    padding: 7px 15px;
    border-radius: 4px;
    font-weight: 500;
    &:hover{
        cursor: pointer;
        background-color: #d38147;
        border-color: #d38147;
    }
`;

export const command_history_content = styled.div`
    font: 400 13.3333px Arial;
    color: #606266;
    word-break: break-all;
    font-size: 13.333px!important;
    margin: 0;
    padding: 0 20px 20px;
    min-height: 300px;
`;

export const command_history_item = styled.div`
    font: 400 13.3333px Arial;
    color: #606266;
    word-break: break-all;
    font-size: 13.333px!important;
    margin: 0;
    padding: 12px 0 12px 65px;
    border-bottom: 1px solid #e8e8ea;
    position: relative;
`;

export const cmd_history_num = styled.div`
    font: 400 13.3333px Arial;
    color: #606266;
    word-break: break-all;
    margin: 0;
    padding: 0;
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    width: 25px;
    font-size: 14px;
`;

export const span_NO = styled.span`
    font: 400 13.3333px Arial;
    color: #606266;
    word-break: break-all;
    font-size: 14px;
    position: absolute;
    top: 50%;
    margin-top: -7px;
    display: inline-block;
    text-align: center;
    width: 100%;
`;

export const cmd_status = styled.div`
    font: 400 13.3333px Arial;
    word-break: break-all;
    margin: 0;
    padding: 0;
    font-family: element-icons!important;
    speak: none;
    font-style: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: baseline;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    position: absolute;
    left: 30px;
    bottom: 0;
    background-repeat: no-repeat;
    background-position: 50%;
    font-size: 22px;
    top: 50%;
    margin-top: -10px;
    font-weight: 600;
    color: #396;
`;

export const cmd_history_key = styled.div`
    font: 400 13.3333px Arial;
    color: #606266;
    word-break: break-all;
    margin: 0;
    padding: 0;
    font-size: 13.333px;
    line-height: 22px;
`;

export const el_button = styled.button`
    word-break: break-all;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    border: 1px solid #dcdfe6;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -webkit-user-select: none;
    font-size: 14px;
    border-radius: 4px;
    border-color: transparent;
    background: 0 0;
    color: #2cabe3;
    padding: 5px;
`;

export const cmd_history_desc = styled.div`
    font: 400 13.3333px Arial;
    margin: 0;
    padding: 0;
    font-size: 12px;
    color: #999;
    word-break: break-all;
`;