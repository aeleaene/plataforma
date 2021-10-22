import styled from '@emotion/styled/macro';
import headerModal from '../../../assets/images/dialog-header.cc6302f.png';

export const Container = styled.div`
    width: 100%;
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
    color: #606266;
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
    &:hover{
        border-color: #ff9934;
    }
    &:active{
        border-color: #ff9934;
    }   
`
export const deviceChebox = styled.input`
    width: 30px;
    height: 30px;
`;
export const deviceChebox2 = styled.input`
    width: 10px;
    height: 10px;
    margin: 0px 5px;
`;

export const GeoAlarm = styled.button`
    border: none;
    background-color: #ff9934;
    border-radius: 0px;
    color: #ffffffff;
    width: 30px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover{
        background-color: #f8ae63;
    }
`;
export const BuutonDivGeo = styled.div`
    display: none;
    gap: 5px;
    align-items: center;
`;
export const divGeofenceItem = styled.div`
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
    &:hover ${BuutonDivGeo} {
        display: flex;
    }
`;
export const GeoItemDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;
export const CheckBox1 = styled.input`
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
export const CheckBoxSearch = styled.input`
    cursor: pointer;
    appearance: none;
    position: relative;
    width: 24px;
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
export const CheckBox = styled.input`
    cursor: pointer;
`;
export const SpanGeoItem = styled.span`
    font-size: 12px;
    color: #747474;
`;
export const SpanGeoItemIcon = styled.span`
    font-size: 18px;
    color: #747474;
    padding-top: 6px;
`;
export const ButtonGeoItem = styled.button`
    background-color: transparent;
    border: none;
    font-size: 18px;
    color: #b8b6b6;
    cursor: pointer;
    margin: 0px 0px;
    padding-top: 6px;
    &:hover{
        color: #ff9934;
    }
`;
export const HeaderModal = styled.div`
    color: #fff;
    background: #596673 url(${headerModal}) no-repeat center 0;
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
`;
export const TituloModal = styled.h2`
    font-size: 13px;
`;
export const CerrarModal = styled.p`
    font-size: 20px;
    transform: rotate(45deg);
    transition: all .3s ease;
    &:hover{
        transform: rotate(135deg);
    }
`;

export const SpanDisElem = styled.label`
    flex: 1;
    color: transparent;
`;
export const SpanDisElemMain = styled.label`
    flex: 1;
`;
export const CheckMarkElem = styled.span``;