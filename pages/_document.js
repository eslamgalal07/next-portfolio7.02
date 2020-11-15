// {Head} from 'next/document ----> for all pages
// Main,NextScript required for proper pages loading
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {

 render() {
  return (
   <Html>
    <Head>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
     <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
    </Head>
    <body>
     <Main />
     <NextScript />
    </body>
    <style global jsx>{`
   body{
    margin:0;
    padding:0;
    font-size:110;
    font-family: 'Roboto', sans-serif;
   }
  `}</style>
   </Html>
  )
 }
}