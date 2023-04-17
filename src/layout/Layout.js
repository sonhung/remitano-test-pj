import Head from "next/head";
import Header from "./Header";

const AppsLayout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Funny Movies test</title>
        <meta name="description" content="Funny Movies" />
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default AppsLayout;
