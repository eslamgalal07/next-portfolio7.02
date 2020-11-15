// add router to props
import { withRouter } from 'next/router'// HOC
import Layout from '../components/layout';

function Post(props) {
  const { title } = props.router.query;
  return (
    <Layout >
      <h1>{title}</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Incidunt, blanditiis!</p>
    </Layout>
  )
}
export default withRouter(Post);