/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';

export default function Dev() {
  return (
    <>
      <Head>
        <title>Dev Ventura</title>
      </Head>
      <Header />
    </>
  );
}
