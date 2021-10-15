import styled from '@emotion/styled/macro';

export const Contenedor = styled.div`
    background-color: #fbfbfb;
    display: flex;
    flex-direction: row;
`;
export const ContentComands = styled.div`
    width: 100%;
    flex: 1.2;
    
    border-right: 1px solid #f9f2f2;
`;
export const ComandsBody = styled.div`
    width: 100%;
    flex: 2;
`;
export const HeadComands = styled.span`
    padding: 0px 0px 0px 10px;
    font-size: 13.3px;
    color: #606266;
    display: flex;
    align-items: center;
    height: 34px;
    font-family: Arial, Helvetica, sans-serif;
    /* border-bottom: 1px solid #f9f2f2; */
`;
export const HeadInput = styled.span`
    padding: 0px 0px 0px 10px;
    font-size: 13.3px;
    color: #606266;
    display: flex;
    align-items: center;
    height: 34px;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #ebebeb;
    /* border-bottom: 1px solid #c7c7c7; */
`;
export const ComandList = styled.div`
    list-style: none;
    margin-left: 0px;
    margin-bottom: 0px;
    margin-top: 2px;
    padding-left: 0px;
    background-color: #ffffff;
`;
export const ComandElem = styled.li`
    height: 35px;
    text-indent: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    background-color: #ffffff;
    color: #606266;
    font-size: 13.3px;
    padding-left: 10px;
    font-family: Arial, Helvetica, sans-serif;
    &:hover{
        background-color: #dddddd;
    }
`;
export const DisElem = styled.li`
    height: 35px;
    text-indent: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    color: #606266;
    font-size: 13.3px;
    font-family: Arial, Helvetica, sans-serif;
    padding: 0px 2px;
`;
export const DisElemMain = styled.li`
    height: 35px;
    text-indent: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f5c988ab;
    color: #606266;
    font-size: 13.3px;
    font-family: Arial, Helvetica, sans-serif;
    gap: 28px;
`;
export const inputSearch = styled.input`
   -webkit-font-smoothing: antialiased;
    user-select: none;
    margin: 0;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    outline: 0;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
    padding: 0 8px;
    border-radius: 0;
    padding-right: 30px;
    height: 26px;
    line-height: 26px;
    margin-right: 10px;
    &:hover{
        border-color: #ff9934;
    }
    &:active{
        border-color: #ff9934;
    }   
`
export const SpanDisElemMain = styled.label`
    flex: 1;
    width: 100%;
`;
export const CheckLabel = styled.label`
    display: flex;
    align-items: center;
`;
export const CheckDivMain = styled.div`
    flex: 3;
    width: 100%;
    display: flex;
`;
export const CheckMarkElem = styled.span``;
export const SpanDisElem = styled.label`
    flex: 1;
    color: transparent;
`;

export const CheckDiv = styled.div`
    flex: 3;
`;
export const CheckBox1 = styled.input`
    cursor: pointer;
    appearance: none;
    position: relative;
    width: 17px;
    height: 17px;
    background-color: #ffffff;
    border: 1px solid #d4d4d4;
    border-radius: 3px;
    &:checked{
        background-color: #ff9934;
        border-color: #ff9934;
    }
    &:checked::after{
        content: " ";
        position: absolute;
        width: 3px;
        height: 10px;
        left: 5px;
        top: 0px;
        border: solid white;
        border-width: 0 2px 2px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`;