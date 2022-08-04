import Head from "next/head";
import DetailSection from "../../src/components/detailSectionsSamples/DetailSection";
import Header from "../../src/components/header/Header";
import Footer from "../../src/components/footer/Footer";
import { getOneSample } from "../api/samples/[samplesId]";
import { useEffect } from "react";
import { useRouter } from "next/router";


const SectionSamples = ({ sample }) => {
    const router = useRouter();
    const { serviceId } = router.query; 

    useEffect(()=> {
        sample === "N" && router.push({pathname: "/samples"});
    }, [sample])


    return (
        <div>
            <Head>
                <title>Detail Samples</title>
                <meta name="description" content="Detail Samples page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header path={"Samples"} />
            <main>
                <DetailSection name={sample.name} nameEn={sample.nameEn} description={sample.description} descriptionEn={sample.descriptionEn} />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default SectionSamples;

export async function getServerSideProps(context){
    const { query } = context;
    const data = await getOneSample(query);
    console.log(data)
    return {
        props: {
            sample: data[0],
        }
    };

}