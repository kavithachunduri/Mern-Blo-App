const Blog = require("../models/blog")

const createBlog = async (req, res) =>{
    try {
        const blog = await new Blog(req.body)
        await blog.save()
        return res.status(201).json({
            blog,
        })

    }catch(error){
        return res.status(500).json({error: error.message})
    }
}

const getAllBlogs = async (req, res) =>{
    try {
        const blogs = await Blog.find()
        
        return res.status(200).json({blogs})

    }catch(error){
        return res.status(500).send(error.message)
    }
}

const getBlogById = async (req, res) =>{
    try {
        const {id} = req.params;
        const blog = await Blog.findById(id)
      if (blog){
        return res.status(200).json({blog});
            
      }return res.status(404).send('Blog with the specified ID does not exist')
    }catch(error){
        return res.status(500).send(error.message)
    }
}

const updateBlog = (req, res) =>{
    try {
        const {id} = req.params;
        Blog.findByIdAndUpdate(id, req.body, {new : true},(err,blog) => {
            if (err){
                res.status(500).send(err)
            }
            if(!blog){
                res.status(500).send('Blog not found')
            }
            return res.status(200).json(blog);
        })

     
    }catch(error){
        return res.status(500).send(error.message)
    }
}


const deleteBlog = async (req, res) =>{
   try{
    const {id} = req.params;
    const deleted =await Blog.findByIdAndDelete(id)
    if(deleted){
        return res.status(200).send("Blog delelted");
    }
    throw new Error("Blog not found");

   }catch(error){
    return res.status(500).send(error.message)
   }
}

module.exports = {
    createBlog,
    getAllBlogs,
    getBlogById,
    updateBlog,
    deleteBlog
}

