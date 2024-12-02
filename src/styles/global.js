import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
    --primary-color: #0D2636;
}

*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

html, body #root{
    min-height: 100%;
}

body{
    background-color: var(--primary-color);
    font-size: 14px;
    -webkit-font-smoothing: antialised !important;
}

body, input, button{
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
}

button{
    cursor: pointer;
}

`;