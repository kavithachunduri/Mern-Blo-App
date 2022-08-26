import Nav from './Nav'
import Footer from './Footer'


const Layout = (props) => {
  return (
  <div className='layout'>

    <Nav />
    <h1>Mern Blog App</h1>
 
    {props.children}

    <Footer />
    </div>
  )
}

export default Layout