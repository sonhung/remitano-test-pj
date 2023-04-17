import "@/styles/globals.css";
import PropTypes from "prop-types";
import { AuthProvider } from "@/contexts";

const Noop = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const Layout = Component.Layout || Noop;

  return (
    <AuthProvider pageProps={pageProps}>
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

Noop.propTypes = {
  children: PropTypes.any,
};

export default MyApp;
