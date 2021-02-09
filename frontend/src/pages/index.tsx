import React from 'react';
import Head from "next/head";
import styled from "styled-components";
import IconDev from "../assets/dev-ico.svg";
import IconProjects from "../assets/projetos-icon.svg";
import Link from 'next/link';


const Main = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const Section = styled.section`
  max-width: 500px;
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  font-family: 'Roboto', sans-serif;
`;

const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 37px;
`;

const BannerContainer = styled.div`
  margin-top: 33px;
  display: flex;
  justify-content: space-between;

  svg {
    margin-top: 15px;
    margin-bottom: 22px;
  }
`;

const Banner = styled.div`
  width: 223px;
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  background: #f2f2f2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const BannerText = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 29px;
  text-align: center;
  color: #413d51;
`;

const BannerButton = styled.a`
  width: 160px;
  padding-top: 13px;
  padding-bottom: 13px;
  margin-top: 16px;
  background: #f1534d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  text-align: center;
  justify-self: center;
`;

const SectionLogo = styled.section`
  max-width: 588px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;

const Logo = styled.div`
  width: 125px;
  height: 125px;
  border: 5px solid #f200ae;
  box-sizing: border-box;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: #00c9d8;
`;

const LogoText = styled.p`
  font-size: 35px;
  line-height: 45px;
  color: #00c9d8;
`;

const Span = styled.span`
  color: #f200ae;
`;

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
          <Logo>{"</>"}</Logo>
          <LogoText>
            {"<"}
            <Span>DevVentura</Span>
            {"/>"}
          </LogoText>
        </SectionLogo>
      </Main>
    </>
  );
}
