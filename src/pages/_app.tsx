import { AppProps } from 'next/app'

import '@src/styles/global.css'
import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { store } from '@src/module/store'
import { ConfigProvider } from 'antd'
import jaJP from 'antd/lib/locale/ja_JP'

const App = ({ Component, pageProps, router }: AppProps) => (
  <Provider store={store}>
    <ConfigProvider locale={jaJP}>
      <AnimatePresence exitBeforeEnter>
        <Head>
          <title>Garume's portfolio</title>
          <meta
            property="og:image"
            content="https://avatars.githubusercontent.com/u/80187947?v=4"
          />
        </Head>
        <Component key={router.asPath} {...pageProps} />
      </AnimatePresence>
    </ConfigProvider>
  </Provider>
)
export default App
