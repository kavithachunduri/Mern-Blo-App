import { useState, useEffect } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Layout from '../shared/Layout'
//import apiUrl from '../../apiConfig'


function Blog() {
  const [blog, setBlog] = useState([])
  const [deleted, setDeleted] = useState(false)
  const { id } = useParams();
  let navigate = useNavigate();

  
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(`http://localhost:4000/api/blogs/${id}`)

        //const response = await axios(`${apiUrl}/items/${id}`)
        console.log(response)
        const result = response.data.blog
    setBlog(result)
      
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (!blog) {
      return <p>Loading...</p>
    }
  }, [blog])

  const destroy = () => {
   axios({

      //url: `${apiUrl}/items/${id}`,
      url: `http://localhost:4000/api/blogs/${id}`,
      method: 'DELETE'
    }).then(() => setDeleted(true)).catch(console.error)
  }

  useEffect(() => {
    if (deleted) {
      return navigate("/")
    }
  }, [deleted, navigate])

  

  return (

    

    <Layout>

      <h2>{blog.title}</h2>
      <img src={blog.image}  alt="pic"/>
      <p>{blog.description}</p>
      <h4>{blog.author}</h4>
      <button onClick={() => destroy()} >Delete Blog</button>

      <NavLink to={`/blogs/${id}/edit`} >
        <button>Edit</button>
      </NavLink>

      <NavLink to="/blogs" >Back to all blogs</NavLink>
      
    </Layout>
  )
}

export default Blog