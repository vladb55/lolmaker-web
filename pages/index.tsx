import type { NextPage } from 'next';
import Head from 'next/head';
import App from 'src/components/App';

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <link type="image/x-icon" rel="shortcut icon" href='favicon.ico' />
        <link type="image/png" rel="icon" sizes="16x16" href='favicon-16x16.png' />
        <link type="image/png" rel="icon" sizes="32x32" href='favicon-32x32.png' />
        <link type="image/png" rel="icon" sizes="96x96" href='favicon-96x96.png' />
        <link type="image/png" rel="icon" sizes="120x120" href='favicon-120x120.png' />
        <link sizes="57x57" rel="apple-touch-icon" href="apple-touch-icon-57x57.png" />
        <link sizes="60x60" rel="apple-touch-icon" href="apple-touch-icon-60x60.png" />
        <link sizes="72x72" rel="apple-touch-icon" href="apple-touch-icon-72x72.png" />
        <link sizes="114x114" rel="apple-touch-icon" href="apple-touch-icon-114x114.png" />
        <link sizes="120x120" rel="apple-touch-icon" href="apple-touch-icon-120x120.png" />
        <link sizes="144x144" rel="apple-touch-icon" href="apple-touch-icon-144x144.png" />
        <link sizes="152x152" rel="apple-touch-icon" href="apple-touch-icon-152x152.png" />
      </Head>
      <App />
    </>
  );
};

export default Index;
