import Layout from '../components/layout';

export default function Error({ statusError }) {

 return (
  <Layout title='Error!!!'>
   {statusError ?
    <p>Could not load your data: Status code:{statusError}</p> :
    <p>Could not find that page, Sorry!</p>}
  </Layout>
 );
}