import styled from '@emotion/styled';

export const Container = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;
export const Nav = styled.nav`
    width: 100%;
    padding: 5px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #505050;
    background-color: #f7f7f7;
    font-size: 14px;
`;
export const Direccion = styled.p`

`;
export const Localizacion = styled.a`
`;
export const Mapa = styled.div`
    width: 100%;
`;
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
export const PopoUpDeviceName = styled.span`
    color: #2cabe3;
    font-weight: bold;
`;
export const PopUpDeviceData = styled.span`

`;
export const PopUpDeviceLink = styled.a`
    text-decoration: none;
`;