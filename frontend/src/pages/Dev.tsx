/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import styled from 'styled-components';

const Container = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
`;

export default function Dev() {
  return (
    <>
      <Head>
        <title>Dev Ventura | Sobre</title>
      </Head>
      <Header name="Dev" />
      <Container />
    </>
  );
}
