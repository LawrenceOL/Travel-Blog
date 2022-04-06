const db = require('../db')
const { Post } = require('../models/')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const posts = [


{ 
    name: '',
    review: '',
    location: '',
    image: ''
  },
  { 
    name: '',
    review: '',
    location: '',
    image: ''
  },
  { 
    name: '',
    review: '',
    location: '',
    image: ''
  },
  { 
    name: '',
    review: '',
    location: '',
    image: ''
  },
  { 
    name: '',
    review: '',
    location: '',
    image: ''
  }
]
await Post.insertMany(posts)
  console.log("Created some posts!")
}
const run = async () => {
  await main()
  db.close()
}

//run()