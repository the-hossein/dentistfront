import Head from "next/head";
import DentalAdvice from "../src/components/dentalAdvice/DentalAdvice";
import Header from "../src/components/header/Header";


const ContactPage = () => {
    return (
        <div>
            <Head>
                <title>Dental Advice</title>
                <meta name="description" content="Dental Advice Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header path={"Home"} />
            <main>
                <DentalAdvice />
            </main>
        </div>
    );
};

export default ContactPage;