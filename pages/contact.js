import Head from "next/head";
import Contact from "../src/components/contact/Contact";
import Header from "../src/components/header/Header";


const ContactPage = () => {
    return (
        <div>
            <Head>
                <title>Contact Us</title>
                <meta name="description" content="Contact Us Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header path={"Contact"} />
            <main>
                <Contact />
            </main>
        </div>
    );
};

export default ContactPage;