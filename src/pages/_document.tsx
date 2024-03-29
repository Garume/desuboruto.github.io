import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html className="min-height-full">
        <Head />
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
