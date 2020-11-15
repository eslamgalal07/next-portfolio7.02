import Layout from '../components/layout';
import Link from 'next/link';

const PostLink = ({ title }) => (
 <li>
  <Link href={`/post?title=${title}`}>
   <a>{`${title} Post`}</a>
  </Link>
 </li>
)

function Blog(props) {
 return (
  <Layout title='Blog'>
   <ul>
    <PostLink title='React Post' />
    <PostLink title='Angular Post' />
    <PostLink title='Vue Post' />
   </ul>
  </Layout>
 )
}
export default Blog;