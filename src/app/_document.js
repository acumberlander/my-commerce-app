/* eslint-disable @next/next/no-document-import-in-page */
// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Add custom tags in the <head> */}
        </Head>
        <body>
          {/* Add any custom elements or scripts here */}
          <Main />
          <NextScript />
          <script>
            {window.onload = () => window.scrollTo({left: 0, top: 0, behavior: 'auto'})}
          </script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
