
import { AppProps } from 'next/app'
import '../styles/globals.css'

type AppPropsWithLayout = AppProps;

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return <Component {...pageProps} />
}
