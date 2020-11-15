// add router to props
import { withRouter } from 'next/router'// HOC
import Layout from '../components/layout';

function Post(props) {
  const { title } = props.router.query;
  return (
    <Layout >
      <h1>{title}</h1>
      <p style={{ width: "80vw" }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, eos?</p>
    </Layout>
  )
}
export default withRouter(Post);