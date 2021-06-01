import styled from '@emotion/styled/macro';

export const ContentConsumo = styled.div`
    padding: 15px;
`;
export const InputGroup = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 5px;
    justify-content: flex-start;
`;
export const InputGroup2 = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
    justify-content: flex-start;
`;
export const Label = styled.label`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: #606266;
    padding: 3px 0px;
    margin-bottom: 2px;
    margin-right: 4px;
`;
export const Input = styled.input`
    width: 250px;
    height: 28px;
    background-color: #fff;
    border: 1px solid #dcdfe6;
    color: #494949;
    margin-bottom: 5px;
    padding: 0px 8px 0px 8px;
    &:focus{
        outline: none;
        border: 1px solid #d1960d
    }
`;
export const InputCombustible = styled.input`
    width: 250px;
    height: 28px;
    text-align: center;
    background-color: #fff;
    border: 1px solid #dcdfe6;
    color: #494949;
    margin-left: 5px;
    margin-bottom: 5px;
    padding: 0px 8px 0px 8px;
    &:focus{
        outline: none;
        border: 1px solid #d1960d;
        color: #d1960d;
    }
`;
export const InputTable = styled.input`
    background-color: #fff;
    border: 1px solid transparent;
    color: #494949;
    height: 26px;
    padding: 0px 8px 0px 8px;
    &:focus{
        outline: none;
        border: 1px solid #d1960d
    }
`;
export const SelectSensor = styled.select`
    width: 200px;
    height: 28px;
    background-color: #fff;
    border: 1px solid #dcdfe6;
    color: #313131;
    margin-bottom: 5px;
    padding: 0px 8px 0px 8px;
    outline: none;
    &:focus{
        outline: none;
        border: 1px solid #d1960d
    }
`;
export const BodySensor = styled.div`
    display: flex;
`;
export const Cont1Sensor = styled.div`
    width: 100%;
`;
export const Cont2Sensor = styled.div`
    width: 100%;
`;
export const TablaSensor = styled.table`
    border: 1px solid #dcdfe6;
    border-top: none;
    border-collapse: collapse;
`;
export const THead = styled.thead`
    background-color: #596673;
    color: #FFF;
    text-align: justify;
    font-size: 14px;
    border-right: 1px solid #dcdfe6;
    border-left: 1px solid #dcdfe6;
`;
export const Th = styled.th`
    height: 34px;
    padding-left: 10px;
`;
export const TBody = styled.tbody``;
export const Td = styled.td`
     border-top: 1px solid #dcdfe6;
     height: 28px;
`;
export const Tr = styled.tr``;

export const AddButton = styled.button`
    font-size: 16px;
    padding: 5px 15px;
    margin-top: 5px;
    border-radius: 3px;
    color: #ffffff !important;
    width: 48px;
    height: 29px;
    cursor: pointer;
    border: 1px solid #66b1ff;
    background-color: #66b1ff;
`;
export const MonitorButton = styled.button`
    font-size: 16px;
    padding: 5px 15px;
    margin-top: 5px;
    border-radius: 3px;
    color: #606266;
    border: none;
    width: 48px;
    height: 29px;
    margin-left: 10px;
    cursor: pointer;
    border: 1px solid #dcdfe6;
    background-color: transparent;
    transition: all .3s ease;
    &:hover{
        border: 1px solid #ff9934;
        color: #ff9934;
    }
`; 
export const DivTanque = styled.div`
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    width: 100%;
`;
export const DivTanqueCheck = styled.div`
    display: flex;
    margin-bottom: 15px;
`;
export const TanqueCheck = styled.input`
    margin-right: 5px;
    &:last-of-type{
        margin-left: 10px;
    }
`;
export const DivTanqueContent = styled.div`
    width: 300px;
`;
export const SpanInput1 = styled.span`
    background-color: #f5f7fa;
    color: #909399;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    height: 26px;
    border-right: none;
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;
    padding: 0px 20px;
    font-size: 14px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
`;
export const TanqueInput = styled.input`
    border: 1px solid #dcdfe6;
    height: 26px;
    border-radius: 0px;
    margin-bottom: 15px;
    padding: 0px 8px;
    &:focus{
        outline: none;
        border: 1px solid #d1960d
    }
`;
export const SpanInput2 = styled.span`
    background-color: #f5f7fa;
    color: #909399;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    height: 26px;
    border-left: none;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    padding: 0px 20px;
    font-size: 14px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
`;