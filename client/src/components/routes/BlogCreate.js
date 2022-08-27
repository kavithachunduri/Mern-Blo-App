import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from '../shared/Layout';
import BlogForm from '../shared/BlogForm';
//import apiUrl from '../../apiConfig'

function BlogCreate() {
  const navigate = useNavigate();
  const [blog, setBlog] = useState({
    title: '',
    image: '',
    description:'',
    author:'',
  })
  const [createdBlog, setCreatedBlog] = useState(null)

  const handleChange = (event) => {
    //created a placeholder grabbing the value from the user input form
    const updatedField = { [event.target.name] : event.target.value }
    console.log("updatedfield",updatedField)
    //assigned the empty state with the updatedField into one object
    const editedBlog = Object.assign(blog, updatedField)
    //assigned the new object to be updated to the state
    console.log("editblog",editedBlog)
    setBlog(editedBlog)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()

    //if the entry is created in the database, save the response data
    // in the state
    axios({
      //url: `${apiUrl}/blogs`,
      url: `http://localhost:4000/api/blogs`,
      method: 'POST',
      data: blog
    }).then(res => setCreatedBlog(res.data.blog)).catch(console.error)

  }

  useEffect(() => {
    if (createdBlog) {
      return navigate(`/blogs`)
    }
  }, [createdBlog, navigate])

  return (
    <Layout >
      <BlogForm
        blog={blog}
        handleChange={(e) => handleChange(e)}
        handleSubmit={(e) => handleSubmit(e)}
        cancelPath='/'
      />
    </Layout>

  )
}

export default BlogCreate