import styled from 'styled-components';

export const Container = styled.div`
  color:#ffff;
  max-width:1180px;
  margin:auto;
`;

export const Input = styled.div`
  display:flex;
  width:100%;
  background:#fff;
  border-radius:4px;

  img{
    padding-left:10px;
  }

  input{
    padding-left:10px;
    width:100%;
    border:none;
    height:44px;
  }

`;

export const DefaultLayout= styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  margin-top:224px; 
  img{
    width: 396px;
    height: 193px;
  }

  h1{
    color:#FFFFFF;  
    font-size: 24px;  
  }
  p{
    font-size:16px; 
    color:#7A8C99
  }

`


export const ListMovie = styled.div`
max-width:1180px;
width:100%;

  ul{
    display:grid;
    grid-template-columns:repeat(6,0fr);
  }

  li {
    list-style:none;
    margin-top:32px;
    margin-right:20px;

    :hover  .movie{
      opacity:30% ;
    }
    :hover span{
      opacity:1;
    }

    img{
    width:180px;
    height:240px;
    opacity:100%;
    }
  }

  span{
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    position: absolute;
    width:180px;
    height:240px;
    opacity:0;

    img{
      align-self:flex-end;
      margin-top:12px;
      margin-right:12px;
      width:24px;
      height:24px;
    }

    div{
      margin: 0 12px 0 12px;
      color:#ffff;
      opacity:100%;

      h1{
        font-size:20px;
        
      }

      p{
        margin: 6px 0 12px 0;
      }

    }
     
    }

`;