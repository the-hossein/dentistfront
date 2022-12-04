import Head from "next/head";
import Header from "../../src/components/header/Header";
import Samples from "../../src/components/samples/Samples";
import Footer from "../../src/components/footer/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL, GET_ALL_SAMPLE } from "../../src/api/urls";

const SamplesPage = ({samples}) => {
  return (
    <div>
      <Head>
        <title>Samples</title>
        <meta name="description" content="Samples page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header path={"Samples"} />
      <main>
        {
            samples === null ? "" : <Samples data={samples} />
        }
      </main>
    </div>
  );
};

export default SamplesPage;

export const getServerSideProps = async () => {
  const { data } = await axios.get(BASE_URL+GET_ALL_SAMPLE);
  return {
    props: {
      samples: data.code === 200 ? data.data : null,
    },
  };
};
