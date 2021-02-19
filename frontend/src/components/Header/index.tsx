/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Logo from '../../assets/logo.svg';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1075px;
  width: 97%;
  margin: auto;
  svg {
    width: 50px;
    height: 50px;
  }
`;
const Contain = styled.ul`
  display: flex;
  flex-direction: row;
`;
const Item = styled.li`
  margin: 20px 10px;
  list-style-type: none;
  position: relative;
  transition: 0.5s;

  &:nth-child(1) {
    margin-left: 0px;
  }
  a {
    text-align: center;
    font-size: 2.4rem;
    font-family: 'Roboto', sans-serif;
  }
  a:hover {
    transition: 0.5s;
    color: #00c9d8;
  }
  &.selected {
    a {
      color: #00c9d8;
    }
  }
  &.selected::before,
  :hover::before {
    display: block;
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #00c9d8;
  }
`;
export default function Header() {
  return (
    <Container>
      <Contain>
        <Item>
          <Link href="/">Home</Link>
        </Item>
        <Item>
          <Link href="/Dev">Sobre</Link>
        </Item>
        <Item className="selected">
          <Link href="/Portfolio">Portifólio</Link>
        </Item>
      </Contain>
      <Logo />
    </Container>
  );
}
