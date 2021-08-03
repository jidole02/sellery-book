import Head from "next/head";
import Header from "../src/components/header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>샐러리북</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css"
        />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <>
        <Header />
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            paddingTop: "130px",
          }}
        >
          <Component {...pageProps} />
        </div>
      </>
    </>
  );
}

export default MyApp;
