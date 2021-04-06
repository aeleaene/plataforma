import styled from '@emotion/styled/macro';
import header from '../../assets/images/dialog-header.cc6302f.png';

export const BodyContent = styled.div`
    padding: 10px 20px;
`;
export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;

`;
export const Label = styled.label`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: #606266;
    padding: 3px;
`;
export const Sup = styled.sup`
    color: #f56c6c;
    font-size: 10px;
`;
export const Input = styled.input`
    height: 28px;
    background-color: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    margin-bottom: 5px;
    &:focus{
        outline: none;
        border: 1px solid #d1960d
    }
`;