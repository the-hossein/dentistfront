import Head from "next/head";
import Header from "../../src/components/header/Header";
import Footer from "../../src/components/footer/Footer";
import Service from "../../src/components/serivce/Service";
import DetailService from "../../src/components/serviceDetail/DetailService";

const ServicePage = () => {
    return (
        <div>
            <Head>
                <title>Service</title>
                <meta name="description" content="Service page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header path={"Service"} />
            <main>
                <DetailService />
            </main>
        </div>
    );
};

export default ServicePage;