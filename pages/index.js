// Head from 'next/head ----> for only this page
import Head from 'next/head';
import Layout from '../components/layout';

export default function HomePage() {
 return (
  <div>
   <Head>
    <title>Next portfolio</title>
   </Head>
   <Layout title='Home'>
    <p>Welcome to Home page</p>
   </Layout>
  </div>
 )
}