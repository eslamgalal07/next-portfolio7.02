import Layout from '../components/layout';
import { Component } from 'react';
import Error from './_error';
// fetch is not defined on server so use isomorphic-unfetch
import fetch from 'isomorphic-unfetch'

class About extends Component {

 // static means that method belongs to class not for it's instance
 // About.getInitialProps(){} // valid
 // let ab= new About();
 // ab.getInitialProps(){}  // not valid

 // getInitalProps runs on server at building time & for each request
 // return object passed to props of this Page (About)
 static async getInitialProps(context) {
  let fetchData = await fetch("https://api.github.com/users/eslamgalal07");
  let data = await fetchData.json();
  let statusError = fetchData.status > 200 ? fetchData.status : false;
  return { user: data, statusError }
 }
 render() {
  const { user, statusError } = this.props;
  if (statusError) {
   return <Error statusError={statusError} />
  } else {
   return (
    <Layout title='About'>
     <p>{user.name}</p>
     <img src={user.avatar_url} alt="avatar" height='200px' />
    </Layout>
   )
  };
 }
}
export default About;