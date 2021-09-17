import styled from '@emotion/styled';
import headerModal from '../../assets/images/dialog-header.cc6302f.png';

export const LeafletContainer = styled.div`
width: 40%;
height: 100vh;
`
export const PopUpContainer = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;
export const PopUpCon1 = styled.div`
    width: 100%; 
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 5px;
`;
export const PopUpCon2 = styled.div`
    width: 100%;
    border-top: 1px solid #ddd;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
`;
export const PopoUpDeviceName = styled.span`
    color: #2cabe3;
    font-weight: bold;
`;
export const PopUpDeviceData = styled.span`

`;
export const PopUpDeviceLink = styled.a`
    text-decoration: none;
`;
export const PopUpDevicesOptionLink = styled.a`
    width: 30px;
    height: 30px;
    color: #999999 !important;
    font-size: 15px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    &:hover{
        color: #ffb711 !important;
    }
`;
export const PopUpDevicesOption = styled.span`
    width: 30px;
    height: 30px;
    color: #999999;
    font-size: 15px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
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
export const DivBotones = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: flex-end;
`;
export const BotonCancelar = styled.button`
    font-size: 12px;
    padding: 7px 15px;
    margin-left: 10px;
    color: #606266;
    border: 1px solid #dcdfe6;
    background-color: #fff;
    border-radius: 3px;
    transition: background-color .3s ease;
    &:hover{
        cursor: pointer;
        color: #fff;
        border: 1px solid #fcac5d;
        background-color: #fcac5d;
    }
`;
export const BotonGuardar = styled.button`
    font-size: 12px;
    padding: 7px 15px;
    margin-left: 10px;
    color: #fff;
    border: 1px solid #ff9934;
    background-color: #ff9934;
    border-radius: 3px;
    transition: all .3s ease;
    &:hover{
        cursor: pointer;
        border: 1px solid #fcac5d;
        background-color: #fcac5d;
    }
`;
export const DivDropDown = styled.div``;
export const FenceList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 4px;
`;
export const FenceObj = styled.li`
    font-size: 12px;
    font-style: italic;
    &:hover{
        color: #ffb711;
    }
`;