import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html className="min-height-full">
        <Head>
          <title>Garume's portfolio</title>
          <meta
            property="og:image"
            content="https://avatars.githubusercontent.com/u/80187947?v=4"
          />
        </Head>
        <body className="bg-white min-height-full">
          <Main />
          <NextScript />
        </body>
        <script src="tsparticles.engine.min.js"></script>
      </Html>
    )
  }
}

export default MyDocument
