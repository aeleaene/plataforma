import styled from '@emotion/styled';

export const App = styled.div`
    font: 400 13.3333px Arial;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
`

export const content_box = styled.div`
    height: 100%;
`

export const menu_izquierdo = styled.div`
    width: 72px;
    left: 0;
    top: 0;
    z-index: 3000;
    box-shadow: 1px 1px 1px #24313d; 
    height: 100%;
`

export const contenido_derecho = styled.div`
    margin-left: 72px;
    background-color: #eef5f9;
    height: 100%;
    width: 100%;
    overflow-y: auto;
    overflow-x: scroll;
`

export const Header = styled.h1`
    color: pink
`
