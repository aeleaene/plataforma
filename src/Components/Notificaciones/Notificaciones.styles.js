import styled from '@emotion/styled/macro';

export const Contenedor = styled.div`
    padding: 10px 20px;
    
`;
export const ContentCheck = styled.div`
    margin-top: 5px;
    padding-bottom: 5px;
`;
export const LabelCheck = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #ff9934;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    padding-bottom: 10px;
`;
export const LabelCheck2 = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #606266;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    padding-bottom: 10px;
`;
export const CheckBox = styled.input`
    width: 16px;
    height: 16px;
    color: #ff9934;
    border: 1px solid #ff9934;
    margin-right: 14px;
`;

export const ContentAlarm = styled.div`
    margin-bottom: 10px;
    padding: 0px 0px 8px 8px;
    border: 1px solid #ddd;
    border-radius: 5px;
`;
export const Contents = styled.div`
    margin-bottom: 10px;
    padding: 0px 4px 4px 8px;
    border: 1px solid #ddd;
    border-radius: 5px;
`;
export const Label = styled.label`
    padding: 3px 3px 3px 0px;
    color: #606266;
    font-size: 14px;
    line-height: 28px;
`;

export const Table = styled.table`
    width: 100%;
    border: none;
    border-collapse: collapse;
    
`;
export const THead = styled.thead``;
export const TBody = styled.tbody``;
export const Th = styled.th`
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    color: #4b4b4b;
    font-weight: 500;
    border-bottom: 1px solid #ebeef5;
    padding: 20px 10px;
`;
export const Tr = styled.tr``;
export const Td = styled.td``;

export const ContentInputs = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;

`;
export const Input = styled.input`
    width: 240px;
    height: 25px;
    background-color: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    margin-bottom: 5px;
    &:focus{
        outline: none;
        border: 1px solid #d1960d
    }
`;
export const PlusButton = styled.button`
    width: 25px;
    height: 25px;
    color: #fff;
    background-color: #ff9934;
    border-radius: 0px;
    border: 1px solid #ff9934;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    cursor: pointer;
    font-size: 20px;
    padding: 0px;
`;
export const A = styled.a`
    width: 41%;
    cursor: pointer;
    color: #2cabe3;
    font-size: 14px;
    font-weight: 600;
    &:hover{
        color: #ff9934;
    }
`;