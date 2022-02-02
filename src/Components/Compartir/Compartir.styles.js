import styled from '@emotion/styled/macro';

export const Contenedor = styled.div`
    padding: 10px 20px;
`;
export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
`;
export const Label = styled.label`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: #606266;
    padding: 3px 0px;
    margin-bottom: 1px;
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
    padding: 0px 8px;
    &:focus{
        outline: none;
        border: 1px solid #d1960d
    }
`;
export const Select = styled.select`
    height: 28px;
    background-color: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    margin-bottom: 5px;
    padding: 0px 8px;
    &:focus{
        outline: none;
        border: 1px solid #d1960d
    }
`;
export const TextArea = styled.textarea`
    height: 28px;
    background-color: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    margin-bottom: 5px;
    padding: 8px;
    resize: vertical;
    &:focus{
        outline: none;
        border: 1px solid #d1960d
    }
`;
export const DivSpan = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #ff9934;
`;
export const Span = styled.span`
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;
    padding: 0px 4px;
    &:hover{
        text-decoration: underline;
        color: #f56c6c;
    }
`;
export const divLinkshare = styled.div`
    width: 100%;
    display: flex;
`;
export const InputClipBoard = styled.input`
    height: 28px;
    background-color: #fff;
    border: 1px solid #dcdfe6;
    color: #818182;
    background-color: #d5d5d5;
    margin-bottom: 5px;
    padding: 0px 8px;
    width: 100%;
    &:focus{
        outline: none;
        border: 1px solid #d1960d
    }
`;
export const buttonClipBoard = styled.button`
    height: 30px;
    font-size: 12px;
    padding: 7px 15px;
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