import { Html, Head, Main, NextScript } from 'next/document';
import { inriaSans } from '../components/utils/getinriaFont';
export default function Document() {
  return (
    <Html lang='en'>
      <Head />

      <body>
        <div id='overlays' />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
