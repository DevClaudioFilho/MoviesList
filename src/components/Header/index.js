import React from 'react';
import { Link} from 'react-router-dom'


import logo from "../../assets/2.Logos/logo.svg"
import { Container } from './styles';

export default function components() {
  return (
    <>
      <Container>
      <Link to='/'><img src={logo} alt="logo"></img></Link>
      </Container>
    </>
  );
}
