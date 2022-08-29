import { useState, useEffect } from 'react';
//import { NavLink } from "react-router-dom";
import axios from 'axios';
import Nav from "../shared/Nav"
import Footer from '../shared/Footer'
import {useNavigate} from "react-router-dom";

import apiUrl from '../../apiConfig'

function Blogs() {
  
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios(`${apiUrl}/blogs`)
      //const response = await axios(`http://localhost:4000/api/blogs`)
      setBlogs(response.data.blogs)

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div className='allBlogs'>
      <Nav />  
      <h1>All Posts</h1>
      <div className='display-posts'>
       {
        blogs.map((blog)=>{
          return(<div className="blogidea" key={blog.id}>
             
             <img onClick={()=> navigate(`/blogs/${blog._id}`)}src={blog.image}  alt="pic"/>
             <h3>{blog.title}</h3>
          </div>)
        })
       }
     
      </div>
      <Footer />
  </div>
)
}
export default Blogs