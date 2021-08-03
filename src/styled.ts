import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
    ${reset}
    input{
        all:unset;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-size:14px;
        color:RGB(24,24,24);
        overflow-y:hidden;
    }
    a{
        color: inherit;
        text-decoration: none;
    }
`;
