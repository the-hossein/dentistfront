import Head from "next/head";
import DetailSection from "../../src/components/detailSectionsSamples/DetailSection";
import Header from "../../src/components/header/Header";
import Footer from "../../src/components/footer/Footer";


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
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default SectionSamples;