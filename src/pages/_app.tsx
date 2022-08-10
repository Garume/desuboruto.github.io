import { AppProps } from 'next/app'

import '@src/styles/global.css'
import { AnimatePresence } from 'framer-motion'

const App = ({ Component, pageProps, router }: AppProps) => (
  <AnimatePresence exitBeforeEnter>
    <Component key={router.asPath} {...pageProps} />
  </AnimatePresence>
)
export default App
