import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import SuccessView from "@modules/success";

const Success: NextPage = () => {
  return (
    <>
      <Head>
        <title>Success Payment</title>
        <meta name="description" content="Success page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SuccessView/>
    </>
  );
};

export default Success;
