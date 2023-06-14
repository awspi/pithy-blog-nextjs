import Layout from '@/components/layout/layout';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import NProgress from "nprogress";
import { useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import '../styles/globals.css';
export default function App({ Component, pageProps, router }: AppProps) {
  // NProgress
  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteDone);
    router.events.on("routeChangeError", handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteDone);
      router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  return (
    <RecoilRoot>
      <ThemeProvider attribute='class' enableSystem={true}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </RecoilRoot>
  )
}
