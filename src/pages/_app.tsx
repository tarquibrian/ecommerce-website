import "@/styles/globalStyles.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Chivo+Mono:wght@200;300;400;500;600;700;800&family=Montserrat:wght@200;300;400;500;600;700;800;900&family=Raleway:wght@200;400;600;800;900&display=swap');
        </style>
      </Head>
      <AnimatePresence mode="sync">
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
}
