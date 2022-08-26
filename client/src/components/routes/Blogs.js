import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';
import Nav from "../shared/Nav"
import Footer from '../shared/Footer'

//import apiUrl from '../../apiConfig'

function Blogs() {
  const [blogs, setBlogs] = useState([])

  const fetchData = async () => {
    try {
      //const response = await axios(`${apiUrl}/blogs`)
      const response = await axios(`http://localhost:4000/api/blogs`)
      setBlogs(response.data.blogs)

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const blogsData = blogs.map((blog) => {
    return <li key={blog._id}>
      <NavLink to={`/blogs/${blog._id}`} >{blog.title}</NavLink>
    </li>
  })

  return (
    <div>
      <Nav />  
      <h4>Blogs</h4>
      <ul>
        {blogsData}
      </ul>
      <Footer />
  </div>
)
}
export default Blogs