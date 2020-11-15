import Link from "next/link";
import Router from 'next/router';
import nprogress from 'nprogress'

// adding spinning when changing router
Router.events.on("routeChangeStart", (url) => { nprogress.start() });
Router.events.on("routeChangeComplete", (url) => { nprogress.done() });
Router.events.on("routeChangeError", (url) => { nprogress.done() });

export default function Layout({ children, title }) {
 return (
  <div className='root'>

   <header>
    <Link href='/'><a>Home</a></Link>
    <Link href='/about'><a>About</a></Link>
    <Link href='/hireme'><a>Hireme</a></Link>
    <Link href='/blog'><a>Blog</a></Link>
   </header>
   <h1>{title}</h1>
   {children}
   <footer>&copy; {new Date().getFullYear()}</footer>
   <style jsx>{`
  .root{
   display:flex;
   justify-content:center;
   align-items:center;
   flex-direction:column;
  }
  header{
   display:flex;
   justify-content:space-around;
   algin-items:center;
   width:100%;
   padding:1em;
   font-size:1.2rem;
   background:indigo;
  }
  header a{
   text-decoration:none;
   color: darkgray;
  }
  header a:hover {
   font-weight:bold;
   color: lightgrey;
  }
  `}</style>

  </div>
 )
}