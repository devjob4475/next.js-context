import '@/assets/css/globals.css'
import { MyProvider } from '@/context';

export default function App({ Component, pageProps }) {
  return (
      <MyProvider>
        <Component {...pageProps} />
      </MyProvider>
   );
  }
