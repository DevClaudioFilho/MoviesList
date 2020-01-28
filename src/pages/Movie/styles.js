import styled from 'styled-components';


export const Container = styled.div`
display:flex;
flex-direction:column;
margin:auto;
width:1180px;
img{
  height:24px;
  width:24px;
}
`

export const Layout = styled.div`
  display:flex;
  margin-top:32px;
  justify-content: space-between;
  height:640px;
  width:1180px;
  padding:0px;
  img{
    display:flex;
    border-radius:4px;
    height:100%;
    width:480px;
    height:640px;
  }
`;

export const Sobre = styled.div`
display:flex;
flex-direction:column;
margin:auto;
height:640px;
width:580px;
justify-content:space-between; 
margin-left:0px;  
img{
  height:24px;
  width:24px;
}
`;

export const Status= styled.div`
  color:#7a8c99;

  ul{
    display:flex;
  }
  li{
    margin-right:8px;
  }
`;

export const Title = styled.div`

  h1{
    font-size:80px;
    font-weight:bold;
    color:#ffffff
  }
`;

export const Notes= styled.div`
  display:flex;
  div{
    display:flex;
    flex-direction:row;
    border-radius:4px;
    margin-right:16px;
    border-radius:4px;
  
  }
  div.imdb{
    width:118px;
    height:40px; 
    align-items:center;
    border:solid 1px #353F4c;
    img{
      background:#ff9f1c;
      border-radius:4px;
      padding:8px;
      height:24px;
      width:45px;
    
    }
    p{
      width:100%;
      text-align:center;
      color:#ffffff;
      font-size:16px;
    }
    
  }
  div.tomatoes{
    width:87px;
    height:40px; 
    align-items:center;
    border:solid 1px #353F4c;
    img{
    padding:8px;
    background:red;
    }
      p{
        width:100%;
        text-align:center;
        color:#ffffff;
        font-size:16px;
      }
  }

 
    button{
      display:flex;
      background:none;
      align-items:center;
      border-radius:4px;
      border:solid 1px #353F4c;

      img{
    padding:8px;
    }
    p{
      padding:8px;
      width:100%;
      text-align:center;
      color:#ffffff;
      font-size:16px;
      }

      .onclick button{
        background-color:#ffffff;
      }
    }

`

export const Plot = styled.div`
  flex-direction:column;
  max-width:480px;
    h1{
      color:#7a8c99;
      font-size:16px;
      
      
    }
    p{
      color:#ffffff;
      margin-top:8px;
      font-size:16px;

    }
`;

export const Test = styled.div`
  display:flex;
  flex-direction:row;
  max-width:461px;
  justify-content: space-between;

  div{
    flex-direction:column;
    max-width:161px;
    h1{
      font-size: 16px;
      color:#7a8c99;
    }
    p{
      font-size: 16px;
      color:#ffffff;  
    }
  }
`;
