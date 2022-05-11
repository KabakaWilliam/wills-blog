import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useDarkMode } from "usehooks-ts";

function MyApp({ Component, pageProps }: AppProps) {
  const { isDarkMode, toggle, enable, disable } = useDarkMode();

  useEffect(() => {
    document.body.className = isDarkMode ? `bg-black` : `bg-white`;
  });
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
