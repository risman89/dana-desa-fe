import React from 'react';
import "../css/index.css";
import Head from "next/head";
import Layout from "src/layouts/layout";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <>
        <Layout>
          <Head>
            <title>{process.env.APP_NAME}</title>
            <meta
              name="Description"
              content="A Next.js starter styled using Tailwind CSS."
            />
          </Head>

          <Component {...pageProps} />
        </Layout>
      </>
    </SessionProvider>
  );
}

export default MyApp;
