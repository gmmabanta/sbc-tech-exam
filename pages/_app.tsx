import "@/styles/globals.css";
import type { AppProps } from "next/app";
import PageLayout from "@/components/layout/PageLayout";
import StoreProvider from "@/components/provider/StoreProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </StoreProvider>
  );
}
