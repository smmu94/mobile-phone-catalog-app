import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import HomeView from "../src/modules/home";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
