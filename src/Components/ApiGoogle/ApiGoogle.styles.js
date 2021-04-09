import styled from '@emotion/styled/macro';


export const Contenedor = styled.div`
    padding: 10px 20px;
`;
export const ContentInfo = styled.div`
    padding: 8px 16px;
    background-color: #f4f4f5;
    color: #909399;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const Label = styled.label`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    text-align: justify;
    flex: 1;
    padding:  0px 8px;
`;
export const A = styled.a`
    color: #2cabe3;
    cursor: pointer;
    &:hover{
        color: #e98d08;
    }
`;
export const ButtonContent = styled.div`
    padding-top: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
export const ActiveButton = styled.button`
    margin-bottom: 10px;
    padding: 7px 15px;
    color: #fff;
    border: 1px solid #dcdfe6;
    border-color: #409eff;
    background-color: #409eff;
    cursor: pointer;
    border-radius: 3px;
    font-size: 12px;
    margin-right: 10px;
    &:hover{
        background-color: #74b8fc;
        border-color: #74b8fc;
    }
`;
export const SecondButton = styled.a`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: #2cabe3;
    cursor: pointer;
    margin-bottom: 10px;
    &:hover{
        color: #e98d08;
    }
`;
export const Table = styled.table`
    width: 100%;
    margin-bottom: 15px;
    border: none;
    border-collapse: collapse;
`;
export const THead = styled.thead``;
export const TBody = styled.tbody``;
export const Tr = styled.tr``;
export const Th = styled.th`
    padding: 20px 10px;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    color: #4b4b4b;
    font-weight: 400;
    border-bottom: 1px solid #ebeef5;
`;
export const Td = styled.td``;