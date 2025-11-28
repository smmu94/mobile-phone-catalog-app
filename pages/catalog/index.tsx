import ListView from "@modules/list";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";

const Catalog: NextPage = () => {
  return (
    <>
      <Head>
        <title>Catalog</title>
        <meta name="description" content="Catalog page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ListView />
    </>
  );
};

export default Catalog;
