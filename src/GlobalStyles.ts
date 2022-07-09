import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}
body {
    background: linear-gradient(107.7deg, #EEEEEE 0%, #FFFFFF 40.89%, #EEEEEE 99.37%);
    font-family: Poppins, sans-serif;
    scroll-behavior: smooth;
    color: #101114;
}
::-webkit-scrollbar{
    width: 0px;
}
`;
