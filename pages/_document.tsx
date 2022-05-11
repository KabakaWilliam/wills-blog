import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body
        className={`antialiased bg-white text-black dark:bg-black dark:text-white `}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
