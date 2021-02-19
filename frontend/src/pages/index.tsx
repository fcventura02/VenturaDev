/* eslint-disable prettier/prettier */
import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import IconDev from '../assets/dev-ico.svg';
import IconProjects from '../assets/projetos-icon.svg';
import Link from 'next/link';
import {
  Banner,
  BannerButton,
  BannerContainer,
  BannerText
} from '../styles/Banner';

const Main = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 900px) {
    height: 100%;
    flex-direction: column-reverse;
  }
`;

const Section = styled.section`
  width: 500px;
  @media screen and (max-width: 900px) {
    max-width: 90%;
  }
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 3rem;
  line-height: 4.2rem;
  font-family: 'Roboto', sans-serif;
  @media screen and (max-width: 500px) {
    font-size: 2.6rem;
    line-height: 3.6rem;
  }
`;

const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 2.5rem;
  margin-bottom: 25px;
`;

const SectionLogo = styled.section`
  max-width: 588px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  @media screen and (max-width: 900px) {
    height: 100vh;
    width: 100%;
    max-width: 100vh;
    justify-content: center;
  }
`;

const Logo = styled.div`
  width: 125px;
  height: 125px;
  border: 5px solid #f200ae;
  box-sizing: border-box;
  border-radius: 9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 7rem;
  color: #00c9d8;
`;

const LogoText = styled.p`
  font-size: 3.5rem;
  line-height: 4.5rem;
  color: #00c9d8;
`;

const Span = styled.span`
  font-size: 3.5rem;
  color: #f200ae;
`;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Home() {
  return (
    <>
      <Head>
        <title>Dev Ventura</title>
      </Head>
      <Main>
        <Section>
          <Title>Hello !</Title>
          <Text>Whats up, how are you?</Text>
          <Text>
            Seja bem vindo ao meu web site. Abaixo você poderá ver meus projetos
            ou poderemos nos conhecer melhor.
          </Text>
          <BannerContainer>
            <Banner>
              <IconDev />
              <BannerText>Sobre o Dev</BannerText>
              <Link href="/Dev">
                <BannerButton>SAIBA MAIS</BannerButton>
              </Link>
            </Banner>
            <Banner>
              <IconProjects />
              <BannerText>Projetos</BannerText>
              <Link href="/Dev">
                <BannerButton href="#">SAIBA MAIS</BannerButton>
              </Link>
            </Banner>
          </BannerContainer>
        </Section>
        <SectionLogo>
          <Logo>{'</>'}</Logo>
          <LogoText>
            {'<'}
            <Span>DevVentura</Span>
            {'/>'}
          </LogoText>
        </SectionLogo>
      </Main>
    </>
  );
}
