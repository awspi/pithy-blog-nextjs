import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import '../styles/globals.css';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider attribute='class' enableSystem={true}>
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  )
}
