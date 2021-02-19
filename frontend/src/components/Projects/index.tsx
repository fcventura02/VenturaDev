/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import styled from 'styled-components';
import IconReact from '../../assets/icon_react.svg';
import IconTs from '../../assets/icon_ts.svg';
import IconSpring from '../../assets/icon_Spring.svg';
import ImageHand from '../../assets/image_hand.svg';

const Container = styled.section`
  max-width: 1075px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 5px;

  img {
    width: 100%;
    height: auto;
    max-width: 453px;
    border-radius: 5px 0 0 5px;
  }

  @media screen and (max-width: 920px) {
    flex-direction: column;
    justify-content: center;

    img {
      width: 100%;
      height: auto;
      max-width: 453px;
      border-radius: 5px 5px 0 0;
    }
  }
`;
const Article = styled.article`
  max-width: 453px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  position: relative;

  .icons svg {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }

  .hand {
    position: absolute;
    width: auto;
    height: auto;
    max-width: 150px;
    right: 0;
    bottom: 10px;

    svg {
      width: 100%;
      height: auto;
    }
  }

  a {
    padding: 12px 20px;
    margin-top: 5px;
    background: #f200ae;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    transition: 0.5s;
  }

  a:hover {
    background: #ac1380;
  }

  @media screen and (max-width: 370px) {
    padding: 10px;
    .hand {
      svg {
        width: 90px;
        height: auto;
      }
    }
  }
`;
const Title = styled.h2`
  font-size: 2.4rem;
  color: #0e0e0e;
  margin-bottom: 10px;
`;
const Text = styled.p`
  font-size: 1.5rem;
  color: #0e0e0e;
  margin-bottom: 10px;
`;

export default function Projects() {
  return (
    <div>
      <Container>
        <img src="https://i.imgur.com/zHGvk1q.png" />
        <Article>
          <div>
            <Title>DS Delivery</Title>
            <Text>Projeto realizado na Semana DevSuperior. </Text>
            <Text>
              O projeto consiste em um sistema de registro e entrega de pedidos.
              Utilizamos Java com Spring Boot, e implantação no Heroku.
            </Text>
            <Title>Tecnologias</Title>
            <div className="icons">
              <IconSpring />
              <IconReact />
              <IconTs />
            </div>
          </div>
          <a target="_blank" rel="noreferrer" href="https://dsdelivery.tk/">
            Visitar
          </a>
          <div className="hand">
            <ImageHand />
          </div>
        </Article>
      </Container>
    </div>
  );
}
