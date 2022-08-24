const db = require('../db')
const Blog = require('../models/blog')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const blogs = [
        { title: 'The first blog', image: 'https://mobimg.b-cdn.net/v3/fetch/83/83b001d629f121eea6797b62cdcb4c68.jpeg',description:'this is my first blog',author:'kavitha' },
        { title: 'The second blog', image: 'https://images.unsplash.com/photo-1612012460576-5d51b5b04b00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyJTIwZm9yJTIwbW9iaWxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',description:'this is my 2nd blog',author:'user' },
        { title: 'The third blog', image: 'https://images3.alphacoders.com/276/276565.jpg',description:'this is my 3rd blog',author:'user' },
        { title: 'The fourth Blog', image: 'https://i.pinimg.com/originals/42/63/2f/42632f4d48030c4b04bdeb2bbe00e313.jpg',description:'this is my 4th blog',author:'kavitha' },
        { title: 'The fifth Blog', image: 'https://www.androidguys.com/wp-content/uploads/2015/12/Wave-Wallpapers-1.jpg',description:'this is my 5th blog',author:'kavitha' },
       
        
    ]

    await Blog.insertMany(blogs)
    console.log("Created some blogs!")
}
const run = async () => {
    await main()
    db.close()
}

run()







