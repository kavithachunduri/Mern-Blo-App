import { Link } from 'react-router-dom'
const BlogForm = ({blog, handleSubmit, handleChange, cancelPath}) => {
    return(
        <div className='divContainer'>
        <form className='forminput' onSubmit={(e) => handleSubmit(e)}>
            <h3 className='mainlabel'>Create/Edit Post</h3><br/>
            
            <label>Name of the Post : </label>
            <input
            className='inputtitle'
            placeholder="Title for the post"
            defaultValue={blog.title}
            name="title"
            onChange={(e) => handleChange(e)} /><br/>
           <label>Image Url for the Post : </label>
            <input
            className='inputimage'
            placeholder="Image url "
            defaultValue={blog.image}
            name="image"
            onChange={(e) => handleChange(e)} /><br/>
           
            <label className="deslabel">Description for the Post : </label>
            <textarea cols="40" rows="5"
            className='inputdescription'
            placeholder=" Write your description"
            defaultValue={blog.description}
            name="description"
            onChange={(e) => handleChange(e)} /><br/>
            <label>Author of the Post : </label>
            <input
            className='inputauthor'
            placeholder="Name of the author for the post"
            defaultValue={blog.author}
            name="author"
            onChange={(e) => handleChange(e)} /><br/>


            <button  className='buttonsubmit' type="submit">Submit</button>

            <Link to={cancelPath}>
                <button className='buttoncancel'>Cancel</button>
            </Link>

        </form>
        </div>
    )
}
export default BlogForm
