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
position: relative;
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

    :hover  .imgMovie{
      transition-delay:0.1s;
      opacity:30% ;
    }
    :hover .infos{
      transition-delay:0.1s;
      opacity:1;
    }
  }
  div{
    position:relative;
    width:180px;
    height:240px;

    img{
     width:100%;
     height:100%;
  }
  }
`;

export const Infos = styled.span`
    opacity:0;

    display:flex;
    flex-direction:column;
    justify-content:space-between;

    position: absolute;
    width:156px;
    height:216px;
    padding:12px;
    top:0%;
    left:0%;

    button{
      width:24px;
      height:24px;
      background:none;
      border:none;
      align-self:flex-end;
    }
    a{
        color:#ffffff;
        :hover{
          transition-delay:0.2s;
          opacity:75%;
        }
        h1{
          font-weight:500;
          font-size:20px;
          line-height:23px;
          letter-spacing:0.217647px;
        }
        p{
          margin-top:6px;
          font-size:16px;
          line-height:19px;
          letter-spacing:0.174118px;
        }
      }
`







