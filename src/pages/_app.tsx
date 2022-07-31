import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import "tailwindcss/tailwind.css";
import Layout from "../frontend/components/Layout";
import "../frontend/styles/global.scss";
import "../frontend/styles/table.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
