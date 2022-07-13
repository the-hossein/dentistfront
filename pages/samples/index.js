import Head from "next/head";
import Header from "../../src/components/header/Header";
import Samples from "../../src/components/samples/Samples";


const SamplesPage = () => {
    return (
        <div>
            <Head>
                <title>Samples</title>
                <meta name="description" content="Samples page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header path={"Samples"} />
            <main>
                <Samples />
            </main>
        </div>
    );
};

export default SamplesPage;