const db = require('../db')
const { Post, Comment } = require('../model')
const { post } = require('../model/Post')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const post1 = new Post({
    name: 'George',
    review: 'So good',
    location: 'Boston, MA',
    image:
      'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,h_1200,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/boston/bpl0_25978b77-5056-a36a-0648935cebef87c5.jpg'
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

  console.log('Created some posts!')
}
const run = async () => {
  await Post.deleteMany()
  await Comment.deleteMany()
  await main()

  db.close()
}

run()
