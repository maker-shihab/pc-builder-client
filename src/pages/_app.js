import Layout from "@/components/Shared/Layout";
import "@/styles/globals.css";
import { motion, useScroll } from "framer-motion";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  const { scrollYProgress } = useScroll();

  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Layout>
          <motion.div style={{ scaleX: scrollYProgress }} />
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
  );
}
