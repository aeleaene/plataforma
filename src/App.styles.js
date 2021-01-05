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
    min-width: 1200px;
`

export const content_box = styled.div`
    height: 100%;
`

export const menu_izquierdo = styled.div`
    width: 72px;
    position: absolute;
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
    overflow-y: auto;
`

export const Header = styled.h1`
    color: pink
`
