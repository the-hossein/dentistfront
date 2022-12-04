import Head from "next/head";
import Header from "../../src/components/header/Header";
import Service from "../../src/components/serivce/Service";

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
                <Service />
            </main>
            
        </div>
    );
};

export default ServicePage;