import SupportView from "@modules/support";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";

const Support: NextPage = () => {
  return (
    <>
      <Head>
        <title>Support</title>
        <meta name="description" content="Support page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SupportView />
    </>
  );
};

export default Support;
