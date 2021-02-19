/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import Head from 'next/head';
import Projects from '../components/Projects';
import Header from '../components/Header';
import styled from 'styled-components';
const Contain = styled.div`
  height: 100vh;
`;
const Main = styled.main`
  height: 96%;
  background: #e5e5e5;
  display: flex;
  justify-content: center;
  padding: 10px;
`;
const Section = styled.section`
  max-width: 1075px;
  display: flex;
  flex-direction: row;
`;
export default function Portfolio() {
  return (
    <>
      <Head>
        <title>DevVentura | Projects</title>
      </Head>
      <Contain>
        <Header />
        <Main>
          <Section>
            <Projects />
          </Section>
        </Main>
      </Contain>
    </>
  );
}
