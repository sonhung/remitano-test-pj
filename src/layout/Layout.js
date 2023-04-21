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
      <main className="pb-20">{children}</main>
    </div>
  );
};

export default AppsLayout;
