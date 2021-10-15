import styled from '@emotion/styled/macro';
import backgroundImage from '../../assets/images/ProveedorBack.png';

export const Contenido = styled.div`
    padding: 10px 20px;
`;
export const Contenedor = styled.div`
    width: 100%;
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-position: 100% 100%;
    min-height: 260px;
    word-break: break-all;
`;
export const ContentGps = styled.div`
    
`;
export const Label = styled.label`
    display: flex;
    justify-content: center;
    color: #606266;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    padding: 10px 3px;
`;
export const SpanGps = styled.span`
    line-height: 28px;
    font-size: 14px;
    color: #606266;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    &:last-of-type{
        margin-left: 50px;
    }
`;
export const Span = styled.span`
    line-height: 28px;
    font-size: 14px;
    color: #606266;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
`;