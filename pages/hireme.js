import Layout from "../components/layout";
import Head from 'next/head';

export default function HireMe() {
 return (
  <div>
   <Head>
    <title>Hire me at...</title>
   </Head>
   <Layout title='Hire me'>
    <p>You can hire me at : <a href="mailto:eslamgalal077@gmail.com">eslamgalal077@gmail.com</a></p>
   </Layout>
  </div>
 )
}