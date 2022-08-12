import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/ui/header/header";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.page}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
      </Header>
      <main>
        <div className={styles.first}>
          <Image src="/icons/title.svg" width="1074"
            height="149" alt=""></Image>
        </div>
      </main>
    </div>
  );
};

export default Home;
