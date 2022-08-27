const db = require('../db')
const Blog = require('../models/blog')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const blogs = [
        { title: 'The Flower Post', 
          image: 'https://mobimg.b-cdn.net/v3/fetch/83/83b001d629f121eea6797b62cdcb4c68.jpeg',
          description:'A flower is the reproductive part of flowering plants. Flowers are also called the bloom or blossom of a plant. Flowers have petals. Inside the part of the flower that has petals are the parts which produce pollen and seeds.',
          author:'Kavitha' },
        { title: 'The Fruit Post', 
          image: 'https://images.unsplash.com/photo-1612012460576-5d51b5b04b00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyJTIwZm9yJTIwbW9iaWxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
          description:'Fruit is the seed-bearing structure of angiosperms or flowering plants. It is a ripened ovary which is a component of a female plant reproductive organ. The female sex cell within the ovary stimulates the egg to ripen. Ripen ovaries may form fleshy, juicy fruits like mango, peach, apple, plum, and berries.',
          author:'Guest' },
        { title: 'The Sparkle Post', 
          image: 'https://images3.alphacoders.com/276/276565.jpg',
          description:'Abstract photography, sometimes called non-objective, experimental or conceptual photography, is a means of depicting a visual image that does not have an immediate association with the object world and that has been created through the use of photographic equipment, processes or materials.',
          author:'Guest User' },
        { title: 'The Firefly Post',
          image: 'https://i.pinimg.com/originals/42/63/2f/42632f4d48030c4b04bdeb2bbe00e313.jpg',
          description:'Fireflies lights are the most efficient lights in the world. One-hundred percent of the energy created is emitted through the light. In comparison, an incandescent bulb emits 10 percent of its energy as light and a fluorescent bulb emits 90 percent of its energy through light.',
          author:'Kavitha' },
        { title: 'The Galaxy Post',
          image: 'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg',
          description:'Galaxy, any of the systems of stars and interstellar matter that make up the universe. Many such assemblages are so enormous that they contain hundreds of billions of stars. Nature has provided an immensely varied array of galaxies, ranging from faint, diffuse dwarf objects to brilliant spiral-shaped giants.',
          author:'KK' },
       
        
    ]

    await Blog.insertMany(blogs)
    console.log("Created some blogs!")
}
const run = async () => {
    await main()
    db.close()
}

run()







