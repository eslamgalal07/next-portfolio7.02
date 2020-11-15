// add router to props
import { withRouter } from 'next/router'// HOC
import Layout from '../components/layout';

function Post(props) {
  const { title } = props.router.query;
  return (
    <Layout >
      <h1>{title}</h1>
      <p style={{ width: "80vw" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate repellendus labore nobis quis dolores dolorem veritatis rem iusto accusantium suscipit tenetur maiores, debitis dicta odio autem doloribus asperiores fugiat in tempore. Quod veritatis exercitationem reiciendis sit voluptatibus? Provident, voluptas quo?</p>
    </Layout>
  )
}
export default withRouter(Post);