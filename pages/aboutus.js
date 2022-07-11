import Head from "next/head";
import About from "../src/components/aboutUs/About";
import Header from "../src/components/header/Header";

const AboutUs = () => {
    return (
        <div>
            <Head>
                <title>About Us</title>
                <meta name="description" content="About Us page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header path={"About"} />
            <main>
                <About />
            </main>
        </div>
    );
};

export default AboutUs;