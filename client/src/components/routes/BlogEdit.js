import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import Layout from "../shared/Layout";
import BlogForm from "../shared/BlogForm";
import apiUrl from '../../apiConfig'
function BlogEdit(){
    const navigate = useNavigate()
    const { id } = useParams()  //get the id from the current object to update
    const [blog, setBlog] = useState({
        title: '',
        image: '',
        description:'',
        author:'',
    })
    const [updated, setUpdated] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
       try {
           const response = await axios(`${apiUrl}/blogs/${id}`)
           //const response = await axios(`http://localhost:4000/api/blogs/${id}`)
           console.log(response)
           setBlog(response.data)
       } catch (error) {
           console.log(error)
       }
      }
      fetchData()
    }, [])

    const handleChange = (event) => {
  
        const updatedField = { [event.target.name] : event.target.value }
     
        const editedBlog = Object.assign(blog, updatedField)
   
        setBlog(editedBlog)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
         axios({
            url:`${apiUrl}/blogs/${id}`,
             //url: `http://localhost:4000/api/blogs/${id}`,
             method: 'PUT',
             data: blog
         }).then(() => setUpdated(true)).catch(console.error)
    }

    useEffect(() => {
        if(updated) {
            return navigate(`/blogs/${id}`)
        }
    })

     return(
         <Layout>
             <BlogForm
               blog={blog}
               handleChange={(e) => handleChange(e)}
               handleSubmit={(e) => handleSubmit(e)}
               cancelPath={`/blogs/${id}`}
               />
         </Layout>
      )
    }
export default BlogEdit
