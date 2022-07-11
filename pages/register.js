import Head from "next/head";
import Header from "../src/components/header/Header";
import Register from "../src/components/register/Register";

export default function registerPage() {
  return (
    <div>
      <Head>
        <title>Register</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header />
      </header>
      <main>
        <Register />
      </main>
    </div>
  );
}