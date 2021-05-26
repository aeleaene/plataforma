import styled from '@emotion/styled/macro';

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
`;
export const Options = styled.ul`
    margin: 0px;
    list-style: none;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0px 0px 0px 20px;
    
`;
export const SpanOptions = styled.li`
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
    margin: 0px 20px 0px 2px;
    border-bottom: 2px solid transparent;
    height: 39px;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover{
        color: #ff9934;
    }
`;
export const Horario = styled.a`
    text-align: right;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
    margin: 0px 10px 0px 0px;
    color: #2cabe3;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover{
        color: #ff9934;
    }
`;
export const Hr = styled.div`
    background-color: #e4e7ed;
    height: 2px;
`;
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
    border-bottom: 1px solid #f9f2f2;
`;
export const ComandList = styled.ul`
    list-style: none;
    margin-left: 0px;
    margin-bottom: 0px;
    margin-top: 2px;
    padding-left: 0px;
`;
export const ComandElem = styled.li`
    height: 35px;
    text-indent: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: #606266;
    font-size: 13.3px;
    font-family: Arial, Helvetica, sans-serif;
`;

export const HistorialBody = styled.div`

`;
export const HistorialNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    padding: 10px;
    border-bottom: 1px solid #e8e8ea;
`;
export const divNav1 = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
export const duvNav2 = styled.div`
    width: 100%;
`;
export const HistorialSelect = styled.select`
    width: 100%;
    height: 30px;
    background-color: #ffffff;
    padding: 0px 30px 0px 5px;
    border: 1px solid #dcdfe6;
    color: #606266;
`;
export const HistorialButton = styled.button`
    margin: 0px 0px 0px 10px;
    background-color: #ff9934;
    border-color: #ff9934;
    border: none;
    color: #ffffff;
    padding: 7px 15px;
    border-radius: 4px;
    font-weight: 500;
    &:hover{
        cursor: pointer;
        background-color: #d38147;
        border-color: #d38147;
    }
`;