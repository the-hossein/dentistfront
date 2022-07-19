import Head from "next/head";
import Footer from "../src/components/footer/Footer";
import Header from "../src/components/header/Header";
import OurTeam from "../src/components/ourteam/OurTeam";

const OurTeamPage = () => {

    return(
        <>
        <Head>
                <title>Our Team Karma</title>
                <meta name="description" content="Our Team Karma .
                    Karma team has completed this project.
                    Karma advertising agency
                    " />
                <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main>
            <OurTeam />
        </main>
        <footer>
            <Footer />
        </footer>
        </>
    )

}

export default OurTeamPage;