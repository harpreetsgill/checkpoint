import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/wordpress.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="favicon" href="@/public/favicon.ico" />
      </Head>
      <Header className={inter.className} />
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
      <Footer className={inter.className} />
    </>
  );
}
