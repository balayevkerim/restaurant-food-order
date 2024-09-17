import Layout from "@/layout/Layout";
import "@/styles/globals.css";
import store from "@/redux/store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />{" "}
          <ToastContainer />
        </Layout>
      </Provider>
    </SessionProvider>
  );
}
