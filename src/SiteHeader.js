import React from 'react';
import styled from 'styled-components';
import ThemeToggler from './ThemeToggler';

const Container = styled.header`
  transition: all 0.1s ease-out;
  background: ${props => props.theme.elementsColor};
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 5px 10px hsla(207, 26%, 17%, 0.1);
  margin-bottom: 20px;
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 20px;
  font-weight: 800;
`;

export default function SiteHeader() {
  return (
    <Container>
      <Logo>Where in the World</Logo>
      <ThemeToggler />
    </Container>
  );
}
