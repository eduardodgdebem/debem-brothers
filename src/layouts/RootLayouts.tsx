import Head from "next/head"
import NavBar from "~/components/NavBar";
import Footer from "~/components/Footer";
import type { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>de Bem Brothers</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar></NavBar>
      {children}
      <Footer></Footer>
    </>
  );
};

export default RootLayout;
