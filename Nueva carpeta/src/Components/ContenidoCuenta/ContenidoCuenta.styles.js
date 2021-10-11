import styled from '@emotion/styled/macro';

export const Contenedor = styled.div`
    padding: 10px 20px;
`;
export const ContentOne = styled.div`
    display: flex;

`;
export const ContentOneInside = styled.div`
    width: 50%;
`;
export const ContentTwo = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0px 0px 5px;
    &:first-of-type{
        padding-right: 8.3%;
    }
`;
export const ContentImage = styled.div`
    width: 50%;
    padding-left: 8.3%;
`;
export const Label = styled.label`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: #606266;
    padding: 3px;
`;
export const Input = styled.input`
    padding: 0px 8px;
    background-color: #fff;
    border: 1px solid #dcdfe6;
    color: #c0c4cc;
    height: 28px;
    line-height: 28px;
    &:focus{
        outline: none;
        border: 1px solid #d1960d
    }
`;
export const TextArea = styled.textarea`
    padding: 0px 8px;
    background-color: #fff;
    border: 1px solid #dcdfe6;
    color: #c0c4cc;
    height: 28px;
    line-height: 28px;
    &:focus{
        outline: none;
        border: 1px solid #d1960d
    }
`;
export const Img = styled.img`
    width: 100px;
    max-height: 100px;
    border: 1px solid #ddd;
    border-radius: 5px;
    filter: saturate(0.5);
    transition: all .3s ease;
    &:hover{
        filter: saturate(1);
    }
`;
export const EditButon = styled.button`
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    font-size: 15px;
    border: none;
    color: #fff;
    background-color: #ff9934;
    cursor: pointer;
    top: 68px;
    left: 422px;
`;