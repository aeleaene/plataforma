import styled from '@emotion/styled/macro';

export const Contenedor = styled.div`
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
`;
export const Encabezado = styled.span`
    font-size: 14px;
    color: #606266;
    margin: 0px 0px 10px 0px;
`;
export const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 240px;
    margin-bottom: 5px;
`;
export const Label = styled.label`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: #606266;
    padding: 3px 0px;
    margin-bottom: 2px;
`;
export const Select = styled.select`
    height: 28px;
    background-color: #fff;
    border: 1px solid #dcdfe6;
    color: #C2C6CD;
    margin-bottom: 5px;
    padding: 0px 30px 0px 8px;
    &:focus{
        outline: none;
        border: 1px solid #d1960d
    }
`;