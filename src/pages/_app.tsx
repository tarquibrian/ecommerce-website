import "@/styles/globalStyles.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Chivo+Mono:wght@200;300;400;500;600;700;800&family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Montserrat:wght@200;300;400;500;600;700;800;900&display=swap');
        </style>
      </Head>
      <Component {...pageProps} />;
    </>
  );
}
