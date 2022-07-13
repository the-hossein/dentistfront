import Head from "next/head";
import DetailSection from "../../src/components/detailSectionsSamples/DetailSection";
import Header from "../../src/components/header/Header";


const SectionSamples = () => {
    return (
        <div>
            <Head>
                <title>Detail Samples</title>
                <meta name="description" content="Detail Samples page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header path={"Samples"} />
            <main>
                <DetailSection />
            </main>
        </div>
    );
};

export default SectionSamples;