import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

    body {
        background-color: #F3F2EF;
    }

    /* screen readers only */
    .sr-only {
        display: none;
        position: absolute;
        height: 1px;
        width: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;   
        clip-path: rect(0,0,0,0);
        white-space: nowrap;
        border-width: 0;
    }

    /* animation */
    .pop {
        animation: pop .4s ;
    }
    
    @keyframes pop {
        0% {
            transform: scale(0);
        }

        100% {
            transform: scale(1);
        }
    }
`;
