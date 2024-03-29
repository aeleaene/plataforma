import styled from '@emotion/styled/macro';

export const Content = styled.div`

`;
export const HeadComands = styled.span`
    padding: 0px 0px 0px 20px;  
    font-size: 13.3px;
    color: #ff9934;
    display: flex;
    align-items: center;
    height: 34px;
    font-family: Arial, Helvetica, sans-serif;
    border-bottom: 1px solid #f9f2f2;
`;
export const ComandContent = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 14px;
    justify-content: space-around;
`;
export const ComandContentDevice = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 14px;
    justify-content: space-around;
    max-height: 300px;
    overflow-y: scroll;
`;
export const InputGroup = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
`;
export const DivLabel = styled.div`
    flex: 1;
    text-align: end;
`;
export const DivCont = styled.div`
    flex: 2;
    align-self: flex-start;
`;
export const Label = styled.label`
    padding-right: 10px;
    font-weight: 400;
    font-size: 13px;
`;
export const Input = styled.input`
    height: 22px;
    padding: 0px 8px;
    border: 1px solid #dcdfe6;
`;
export const InputDis = styled.input`
    height: 22px;
    padding: 0px 8px;
    background-color: #F5F7F8;
    border: 1px solid #dcdfe6;
    color: #797979;

`;
export const Button = styled.button`
    background-color: #FF994E;
    border-color: #FF994E;
    color: #ffffff;
    width: 70px;
    height: 30px;
    border: none;
    border-radius: 4px;
    padding: 7px 15px;
    &:hover{
        cursor: pointer;
        background-color: #d38147;
        border-color: #d38147;
    }
`;
export const Span = styled.span`
    color: rgb(163, 163, 163);
    font-size: 13px;
    font-weight: 400;
`;

export const animacionCargar = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center
` 