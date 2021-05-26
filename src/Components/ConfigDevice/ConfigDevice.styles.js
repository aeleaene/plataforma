import styled from '@emotion/styled/macro';

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
`;
export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    text-overflow: ellipsis;
`;
export const Options = styled.ul`
    margin: 0px;
    list-style: none;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0px 0px 0px 2px;
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    scroll-behavior: smooth;
`;
export const SpanOptions = styled.li`
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
    margin: 0px 20px 0px 20px;
    border-bottom: 2px solid transparent;
    height: 39px;
    display: flex;
    align-items: center;
    
    cursor: pointer;
    &:hover{
        color: #ff9934;
    }
    &:first-of-type{
        margin: 0px 20px 0px 0px;
    }
`;

export const Hr = styled.div`
    background-color: #e4e7ed;
    height: 2px;
`;
export const Contenedor = styled.div`
    padding: 10px 20px;
    height: 100%;
`;