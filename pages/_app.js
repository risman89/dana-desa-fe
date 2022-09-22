import "../css/index.css";
import Head from "next/head";
import Layout from "src/layouts/layout";

function MyApp({ Component, pageProps }) {
  return (
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
  );
}

export default MyApp;
