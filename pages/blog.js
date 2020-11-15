import Layout from '../components/layout';
import Link from 'next/link';

const PostLink = ({ title, slug }) => (
 <li>
  <Link as={`/${slug}`} href={`/post?title=${title}`}>
   <a>{`${title} Post`}</a>
  </Link>
 </li>
)

function Blog(props) {
 return (
  <Layout title='Blog'>
   <ul>
    <PostLink slug='react-post' title='React Post' />
    <PostLink slug='Angular-post' title='Angular Post' />
    <PostLink slug='vue-post' title='Vue Post' />
   </ul>
  </Layout>
 )
}
export default Blog;