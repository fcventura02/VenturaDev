import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
      margin:0;
      padding:0;  
      box-sizing:border-box;
      font-size: 10px;
      font-family: 'Montserrat', sans-serif;
    }

    a{
        text-decoration: none;
        color: #ffffff;
    }

    body{
        background: linear-gradient(89.89deg, #F200AE 0.09%, rgba(92, 128, 151, 0) 79.89%), #283035;
        color: #ffffff;
        @media screen and (max-width: 900px){
        background: linear-gradient(0deg, #F200AE 0.09%, rgba(92, 128, 151, 0) 79.89%), #283035;
    }
        
    }
    #__next{
        height: 100%;
    }
`;
