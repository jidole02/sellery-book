import Head from "next/head";
import Header from "../src/components/header";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import auth from "../src/api/auth";
import { useEffect } from "react";
import { toast } from "react-toastify";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const callbackLogin = () => {
    router.push("/auth/login");
    toast.info("로그인 후 이용해주세요.");
  };
  useEffect(() => {
    const token = localStorage.getItem("sellery-token");
    if (router.pathname.includes("/write")) {
      if (!token) callbackLogin();
      else {
        auth
          .tokenCheck(token)
          .then((res) => {
            if (res.data.checked) {
              if (!res.data.checked) {
                callbackLogin();
              }
            } else {
              callbackLogin();
            }
          })
          .catch(() => callbackLogin());
      }
    }
  }, [router.pathname]);
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
            paddingTop: "120px",
          }}
        >
          <Component {...pageProps} />
        </div>
      </>
    </>
  );
}

export default MyApp;
