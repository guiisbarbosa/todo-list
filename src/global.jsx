import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    font-weight: 400;
}

body {
    min-height: 100vh;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

::-webkit-scrollbar {
    width: 10px;
    background: transparent;
}


::-webkit-scrollbar-thumb {
    background-color: #D9D9D9;
    border-radius: 6px;
}

::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #FFF;
    margin: 5px;
}
`