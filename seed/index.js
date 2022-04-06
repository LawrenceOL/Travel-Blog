const db = require('../db')
const { Post, Comment } = require('../model')
const { post } = require('../model/Post')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const post1 = new Post({
    name: 'Saint Petersburg',
    review: 'Saint Petersburg formerly known as Petrograd (1914-1924) and later Leningrad (1924-1991), is the second-largest city in Russia. The city was founded by Tsar Peter the Great on 27 May 1703 on the site of a captured Swedish fortress, and was named after apostle Saint Peter.',
    location: 'Saint Petersburg, Russia',
    image: 'https://www.jetsetter.com//uploads/sites/7/2018/04/nEtTvYR3.jpeg'
  })
  const post2 = new Post({
      name: 'Thailand',
      review: 'Thailand historically known as Siam is home to the capitol Bangkok.Following a bloodless revolution in 1932, it became a constitutional monarchy and changed its official name to Thailand, which was an ally of Japan in World War II. ',
      location: 'Southeast Asia',
      image: 'https://lp-cms-production.imgix.net/2021-03/GettyRF_178111904.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850'
  })
  const post3 = new Post({
      name: 'Italy',
      review: ' Italy is located in the middle of the Mediterranean Sea, in Southern Europe; it is also considered part of Western Europe. During the Early Middle Ages, Italy endured the fall of the Western Roman Empire and the Barbarian Invasions, but by the 11th century numerous rival city-states and maritime republics, mainly in the northern and central regions of Italy, became prosperous through trade, commerce, and banking, laying the groundwork for modern capitalism.',
      location: 'Europe',
      image: 'https://deih43ym53wif.cloudfront.net/amalfi-italy-shutterstock_759048709_bdda191300.jpeg'
  })


  const comment1 = new Comment({
    rating: 5,
    comment: 'Wow!',
    postId: post1._id
  })
  const comment2 = new Comment({
    rating: 3,
    comment: 'Amazing place!',
    postId: post1._id
  })
  post1.comments = [comment1._id, comment2._id]
  await comment1.save()
  await comment2.save()
  await post1.save()
  await post2.save()
  await post3.save()

  console.log('Created some posts!')
}
const run = async () => {
  await Post.deleteMany()
  await Comment.deleteMany()
  await main()

  db.close()
}

run()