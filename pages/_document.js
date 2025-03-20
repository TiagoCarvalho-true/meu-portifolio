// filepath: c:\Users\DELL\Desktop\portifolio\meu-portifolio\pages\_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Portfólio de Tiago Carvalho, desenvolvedor apaixonado por programação, automação e análise de dados." />
        <meta name="keywords" content="portfólio, desenvolvimento web, programação, automação, análise de dados" />
        <meta name="author" content="Tiago Carvalho" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}