import { Html, Head, Main, NextScript } from "next/document";
import { DarkMode } from "../Components/DarkMode";

export default function Document() {
  return (
    <Html lang="en" id="html">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/272037327f.js"
          crossorigin="anonymous"
        ></script>
        <title>Ider's Resume</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
