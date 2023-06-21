import '@/styles/globals.css'
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }) {
  return(
  <ThirdwebProvider activeChain="mumbai">
    <Toaster/>
  <Component {...pageProps} />
</ThirdwebProvider>
  )
}
