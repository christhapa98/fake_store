import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import NextProgress from 'next-progress'

import { stores } from '@/redux/store'

import '@/styles/tailwind.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return <div className=''>
    <QueryClientProvider client={queryClient}>
      <Provider store={stores}>
        <ToastContainer />
        <NextProgress color="#29d" options={{ trickleSpeed: 50, showSpinner: false }} />
        <Component {...pageProps} />
      </Provider >
    </QueryClientProvider>
  </div>
}
