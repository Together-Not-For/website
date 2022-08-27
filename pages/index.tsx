import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="px-0 py-8">
      <Head>
        <title>Together, Not For.</title>
        <meta name="description" content="Together, Not For." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-[100vh] px-16 py-0 flex-1 flex flex-col justify-center text-center">
        <h1 className="text-2xl">Together, Not For.</h1>
        <h2 className="text-2xl">
          We do social organizing, data management, and consulting
        </h2>
        <h2 className="text-2xl">Let's chat at info@togethernotfor.com</h2>
      </main>
    </div>
  );
};

export default Home;
