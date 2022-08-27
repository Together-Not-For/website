import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Together, Not For.</title>
        <meta name="description" content="Together, Not For." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Together, Not For.</h1>
        <h2>We do social organizing, data management, and consulting</h2>
        <h2>Let's chat at info@togethernotfor.com</h2>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
