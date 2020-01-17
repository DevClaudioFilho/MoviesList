import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  margin:auto;
  justify-content: space-between;
  height:640px;
  width:1180px;

  div{
    display:flex;
  }
  img{
    display:flex;
    height:100%;
    width:480px;
  }
`;

export const Sobre = styled.div`
display:flex;
flex-direction:column;
margin:auto;
height:640px;
width:1180px;
justify-content:space-between;

img{
  background:blue;
  height:50px;
  width:100px;
}
`;

export const Status= styled.div`

  ul{
    display:flex;
  }
  li{
    margin-right:8px;
  }
`;

export const Notes= styled.div`
  div{
    flex-direction:row;
    background:#ffff;
    border-radius:4px;
    margin-right:16px;
  }
`;

export const Plot = styled.div`
  flex-direction:column;
  div{
    
  }
`;

export const Test = styled.div`
  display:flex;
  flex-direction:row;
  
  div{
    flex-direction:column;
  }
`;
