import Head from "next/head";
import DetailSection from "../../src/components/detailSectionsSamples/DetailSection";
import Header from "../../src/components/header/Header";
import Footer from "../../src/components/footer/Footer";
import { getOneSample } from "../api/samples/[samplesId]";
import { useEffect } from "react";
import { useRouter } from "next/router";
import callApi from "../../src/api/callApi";
import { BASE_URL, GET_SAMPLE_ID } from "../../src/api/urls";
import axios from "axios";

const SectionSamples = ({ sample }) => {
  const router = useRouter();
  const { serviceId } = router.query;

  useEffect(() => {
    sample === "N" && router.push({ pathname: "/samples" });
  }, [sample]);

  return (
    <div>
      <Head>
        <title>Detail Samples</title>
        <meta name="description" content="Detail Samples page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header path={"Samples"} />
      <main>
        <DetailSection
          name={sample.title}
          nameEn={sample.titleEn}
          description={sample.description}
          descriptionEn={sample.descriptionEn}
          pic1={sample.imageFile1.filePath}
          pic2={sample.imageFile2 != null ? sample.imageFile2.filePath : sample.imageFile1.filePath}
          pic3={sample.imageFile3 != null ? sample.imageFile3.filePath : sample.imageFile1.filePath}
          // pic1={"https://fanavaryrayan.ir/back.jpg"}
          // pic2={"https://fanavaryrayan.ir/back.jpg"}
          // pic3={"https://fanavaryrayan.ir/back.jpg"}
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default SectionSamples;

export async function getServerSideProps(context) {
  const { query } = context;
  const {data} = await axios.get(BASE_URL+GET_SAMPLE_ID+query.sampleId);
  return {
    props: {
      sample: data.code === 200 ? data.data : "N",
    },
  };
}
