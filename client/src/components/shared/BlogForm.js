import { Link } from 'react-router-dom'
const BlogForm = ({blog, handleSubmit, handleChange, cancelPath}) => {
    return(
        <div className='divContainer'>
        <form className='forminput' onSubmit={(e) => handleSubmit(e)}>
            <h3 className='mainlabel'>New Blog</h3><br/>
            <h5>Create your new blog here....!</h5>
            <label>Name of the Blog : </label>
            <input
            className='inputtitle'
            placeholder="blog to input"
            defaultValue={blog.title}
            name="title"
            onChange={(e) => handleChange(e)} /><br/>
           <label>Image Url for the Blog : </label>
            <input
            className='inputimage'
            placeholder="image url"
            defaultValue={blog.image}
            name="image"
            onChange={(e) => handleChange(e)} /><br/>
            <label>Description for the Blog : </label>
            <input
            className='inputdescription'
            placeholder=" input for description"
            defaultValue={blog.description}
            name="description"
            onChange={(e) => handleChange(e)} /><br/>
            <label>Author of the Blog : </label>
            <input
            className='inputauthor'
            placeholder=" input for author"
            defaultValue={blog.author}
            name="author"
            onChange={(e) => handleChange(e)} /><br/>


            <button  className='inputbutton' type="submit">Submit</button>

            <Link to={cancelPath}>
                <button>Cancel</button>
            </Link>

        </form>
        </div>
    )
}
export default BlogForm