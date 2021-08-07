import Head from "next/head";
import Header from "../src/components/header";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/dist/client/router";
import auth from "../src/api/auth";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [login, setLogin] = useState<boolean>(false);
  useEffect(() => {
    const token = localStorage.getItem("sellery-token");
    if (!token) setLogin(false);
    else {
      auth
        .tokenCheck(token)
        .then((res) => {
          if (res.data.checked) {
            setLogin(true);
          } else {
            setLogin(false);
          }
        })
        .catch(() => setLogin(false));
    }
  }, [router.pathname]);
  useEffect(() => {
    const path = router.pathname;
    if (!login) {
      if (path.includes("/write")) {
        router.push("/auth/login");
        toast.info("로그인 후 이용해주세요.");
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
