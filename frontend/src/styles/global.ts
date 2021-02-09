import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
      margin:0;
      padding:0;  
      box-sizing:border-box;
      font-family: 'Montserrat', sans-serif;
    }

    a{
        text-decoration: none;
        color: #ffffff;
    }

    body{
        background: linear-gradient(89.89deg, #F200AE 0.09%, rgba(92, 128, 151, 0) 79.89%), #283035;
        color: #ffffff;
        
    }
    #__next{
        height: 100vh;
    }
`;  