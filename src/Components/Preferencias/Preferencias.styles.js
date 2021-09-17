import styled from '@emotion/styled/macro';

export const Contenedor = styled.div`
    padding: 10px 20px;
`;
export const ContentOne = styled.div`
    display: flex;

`;
export const ContentOneInside = styled.div`
    width: 46%;
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
export const Input = styled.select`
    padding: 0px 8px;
    background-color: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
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

export const hr = styled.div`
    border: 1px solid #dcdfe6;
    margin-top: 10px;
    margin-bottom: 10px;
`;
export const SwitchBtn = styled.label`
`;
export const Switch1 = styled.input`
    --webkit-appearance: none;
    appearance: none;
    width: 40px;
    height: 20px;
    border: 2px solid #d9d9d9;
    outline: none;
    border-radius: 30px;
    transition: .3s;
    &::before{
        content: "";
        position: absolute;
        top: 334px;
        left: 23px;
        width: 20px;
        height: 20px;
        background: #cccccc;
        border-radius: 50%;
        transition: .3s ease;
    }
    &:checked::before{
        transform: translateX(20px);
        background: #ff9934;
    }
    &:checked{
        border-color: #ff9934;
    }
`;
export const Switch2 = styled.input`
    --webkit-appearance: none;
    appearance: none;
    width: 40px;
    height: 20px;
    border: 2px solid #d9d9d9;
    outline: none;
    border-radius: 30px;
    transition: .3s;
    &::before{
        content: "";
        position: absolute;
        top: 334px;
        left: 355px;
        width: 20px;
        height: 20px;
        background: #cccccc;
        border-radius: 50%;
        transition: .3s ease;
    }
    &:checked::before{
        transform: translateX(20px);
        background: #ff9934;
    }
    &:checked{
        border-color: #ff9934;
    }
`;
export const Switch3 = styled.input`
    --webkit-appearance: none;
    appearance: none;
    width: 40px;
    height: 20px;
    border: 2px solid #d9d9d9;
    outline: none;
    border-radius: 30px;
    transition: .3s;
    &::before{
        content: "";
        position: absolute;
        top: 393px;
        left: 23px;
        width: 20px;
        height: 20px;
        background: #cccccc;
        border-radius: 50%;
        transition: .3s ease;
    }
    &:checked::before{
        transform: translateX(20px);
        background: #ff9934;
    }
    &:checked{
        border-color: #ff9934;
    }
`;
export const SwitchRound = styled.div``;