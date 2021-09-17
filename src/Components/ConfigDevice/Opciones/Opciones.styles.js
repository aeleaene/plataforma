import styled from '@emotion/styled/macro';

export const Contenedor = styled.div`
    padding: 10px 0px;
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
    width: 300px;
    margin-bottom: 5px;
`;
export const Label = styled.label`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: #606266;
    padding: 3px 0px;
    margin-bottom: 2px;
`;
export const LabelCheckbox = styled.label`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: #606266;
    padding: 3px 0px;
    margin-bottom: 2px;
    display: flex;
    align-items: center;
    &:hover{
        color: #ff9934;
    }
    &:active{
        color: #ff9934;
    }
`;
export const InputOtraInfo = styled.input`
    height: 28px;
    background-color: #fff;
    border: 1px solid #dcdfe6;
    color: #8a8a8a;
    margin-bottom: 5px;
    padding: 0px 8px 0px 8px;
    &:focus{
        outline: none;
        border: 1px solid #d1960d
    }
`;
export const InputGroupTextArea = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
`;
export const TextArea = styled.textarea`
    resize: vertical;
    height: 68px;
    background-color: #fff;
    border: 1px solid #dcdfe6;
    color: #8a8a8a;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 5px;
    padding: 0px 30px 0px 8px;
    &:focus{
        outline: none;
        border: 1px solid #d1960d
    }
`;
export const InputCheckBox = styled.input`
    width: 18px;
    height: 18px;
    background-color: #fff;
    border: 1px solid #dcdfe6;
    color: #C2C6CD;
    margin-bottom: 5px;
    padding: 0px 8px 0px 8px;
    margin-right: 10px;
`;
export const DivIcons = styled.ul`
    list-style: none;
    padding: 0px;
    margin: 0px;
    display: flex;
    flex-wrap: wrap;
`;
export const IconItem = styled.li`
    cursor: pointer;
    width: 36px;
    height: 36px;
    &:hover{
        background-color: #ffe4c6c1;
    }
    &:active{
        outline: 1px solid #ff9934;
    }
`;
export const Icons = styled.img`
    margin-right: 1px;
`;

export const ContentCombustible = styled.div`
`;
export const MainCombustible = styled.div`
    display: flex;
    flex-direction: column;
    color: #606266;
    border: 1px solid #dcdfe6;
`;
export const NavCombustible = styled.nav`
    background-color: #f5f7fa;
`;
export const MenuCombustible = styled.ul`
    list-style: none;
    display: flex;
    padding: 0px;
    margin: 0px;
`;
export const MenuCombustibleItem = styled.li`
    width: 30%;
    height: 40px;
    text-align: center;
    font-size: 14px;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding-left: 5px;
    padding-right: 5px;
    transition: all .3s ease;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    &:hover{
        color: #ff9934;
    }
    &:first-of-type{
        
        padding-right: 0;
    }
`;
export const MenuCombustibleContent = styled.div``;

export const CheckBox1 = styled.input`
    cursor: pointer;
    appearance: none;
    position: relative;
    width: 17px;
    height: 17px;
    background-color: #ffffff;
    border: 1px solid #d4d4d4;
    border-radius: 3px;
    margin-bottom: 5px;
    margin-right: 10px;
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