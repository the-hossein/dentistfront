import Head from "next/head";
import Header from "../../src/components/header/Header";
import Samples from "../../src/components/samples/Samples";
import Footer from "../../src/components/footer/Footer";
import axios from "axios";
import { useEffect, useState } from "react";

const SamplesPage = () => {

    const [samples, setSamples] = useState(null);

  useEffect(() => {
    const fetcher = async () => {
      const { data } = await axios.get("api/samples");
      setSamples(data.samples)
    };
    fetcher();
  }, []);

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

// export const getServerSideProps = async () => {
//   const { data } = await axios.get("api/samples");
//   console.log(data);
//   return {
//     props: {
//       samples: data,
//     },
//   };
// };
