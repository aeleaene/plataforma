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
    
    border-right: 1px solid #f9f2f2;
`;
export const ComandsBody = styled.div`
    width: 100%;
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
    margin-left: 20px;
    margin-bottom: 0px;
    margin-top: 10px;
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
export const busqueda_dispositivo = styled.div`
    background-color: #e4e4e4;
    padding: 5px 5px;
    height: 26px;
    display: flex;
    flex-direction: row;
    gap: 2px;
    justify-content: space-between;
    align-items: center;
`
export const dispositivo_fetch = styled.div`
    padding: 5px 5px;
    height: 26px;
    display: flex;
    flex-direction: row;
    gap: 2px;
    justify-content: flex-start;
    align-items: center;
`
export const CheckBoxSearch = styled.input`
    cursor: pointer;
    appearance: none;
    position: relative;
    width: 20px;
    height: 17px;
    background-color: #ffffff;
    border: 1px solid #d4d4d4;
    border-radius: 3px;
    &:checked{
        background-color: #ff9934;
        border-color: #ff9934;
    }
    &:checked::after{
        content: " ";
        position: absolute;
        width: 3px;
        height: 10px;
        left: 5px;
        top: 0px;
        border: solid white;
        border-width: 0 2px 2px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`;
export const busqueda_en_linea = styled.div`
    width: 100%;
`
export const sufijo_entrada = styled.div`
    width: 100%;

`
export const entrada_interna = styled.input`
   -webkit-font-smoothing: antialiased;
    user-select: none;
    margin: 0;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #828283;
    display: inline-block;
    font-size: inherit;
    outline: 0;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
    padding: 0 8px;
    border-radius: 0;
    padding-right: 30px;
    height: 26px;
    line-height: 26px;
    font-size: 14px;
    &:hover{
        border-color: #ff9934;
    }
    &:focus{
        border-color: #ff9934;
    }   
`
export const selectCommand = styled.select`
   -webkit-font-smoothing: antialiased;
    user-select: none;
    margin: 0;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #828283;
    display: inline-block;
    font-size: inherit;
    outline: 0;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
    padding: 0 8px;
    border-radius: 0;
    padding-right: 30px;
    height: 26px;
    line-height: 26px;
    font-size: 14px;
    &:hover{
        border-color: #ff9934;
    }
    &:focus{
        border-color: #ff9934;
    }   
`
export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    margin-bottom: 20px;
`;
export const FormLabel = styled.label`
    font-size: 14px;
    color: #606266;
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
export const FormLabelInput = styled.label`
    font-size: 14px;
    color: #606266;
    margin-bottom: 10px;
    &::before{
        content: '*';
        color: red;
        font-size: 12px;
        margin-right: 5px;
    }
`;
export const FormCheckbox = styled.input`
    margin-right: 10px;
    cursor: pointer;
    appearance: none;
    position: relative;
    width: 16px;
    height: 16px;
    background-color: #ffffff;
    border: 1px solid #d4d4d4;
    border-radius: 10px;
    &:checked{
        background-color: #ff9934;
        border-color: #ff9934;
    }
    &:checked::after{
        content: " ";
        position: absolute;
        width: 8px;
        height: 8px;
        left: 1px;
        top: 1px;
        border: solid white;
        border-width: 2px 2px 2px 2px;
        border-radius: 10px;
    }
`;
export const divDeviceItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    cursor: pointer;
    border-bottom: 1px solid #e6e6e6;
    &:hover{
        background-color: #e6e6e6;
    }
`;
export const DeviceItemDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;
export const CheckBoDevice = styled.input`
    cursor: pointer;
    appearance: none;
    position: relative;
    width: 17px;
    height: 17px;
    background-color: #ffffff;
    border: 1px solid #d4d4d4;
    border-radius: 3px;
    &:checked{
        background-color: #ff9934;
        border-color: #ff9934;
    }
    &:checked::after{
        content: " ";
        position: absolute;
        width: 3px;
        height: 10px;
        left: 5px;
        top: 0px;
        border: solid white;
        border-width: 0 2px 2px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`;
export const SpanDeviceItem = styled.label`
    font-size: 12px;
    color: #747474;
    display: flex;
    align-items: center;
    gap: 5px;
`;
export const divHiddenMenu1 = styled.div`
    display: ${props => props.visibility === 1 ? 'block':'none'};
    margin-left: 30px;
    margin-bottom: 10px;
    padding-right: 10px;
`;
export const divHiddenMenu2 = styled.div`
    display: ${props => props.visibility === 2 ? 'block':'none'};
    margin-left: 30px;
    margin-bottom: 10px;
    padding-right: 60px;
`;
export const divHiddenMenu3 = styled.div`
    display: ${props => props.visibility === 3? 'block':'none'};
    margin-left: 30px;
    margin-bottom: 10px;
    padding-right: 60px;
`;
export const commandDateForm = styled.input`
   -webkit-font-smoothing: antialiased;
    user-select: none;
    margin: 0;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #828283;
    display: inline-block;
    font-size: inherit;
    outline: 0;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
    padding: 0 8px;
    border-radius: 0;
    height: 26px;
    line-height: 26px;
    font-size: 14px;
    &:hover{
        border-color: #ff9934;
    }
    &:focus{
        border-color: #ff9934;
    }   
`