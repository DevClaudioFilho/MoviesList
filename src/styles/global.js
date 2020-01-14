import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  *{
    padding:0;
    margin:0;
    outline:0;
    box-sizing:0;
  }
  *:focus{
    outline:0
  }  
  html,body,#root{
    background:#0A1014;
    height:100%;
  }
  body{
    -webkit-font-smooothing:antialiased;
  }
  a{
    text-decoration:none;
  }
  ul{
    list-style:none;
  }
  button{
    cursor:pointer;
  }
`;
