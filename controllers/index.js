const { Post, Comment } = require('../model')

// Function to get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    return res.status(200).json(posts)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// Function to get all comments from respective post
// this may need revision
const getPostById = async (req, res) => {
  try {
    const { id } = req.params
    const post = await Post.findById(id).populate('comments')
    return res.status(200).json(post)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// Function to add a comment on a post
const addComment = async (req, res) => {
  try {
    const { id } = req.params
    const post = await Post.findById(id)
    const comment = await new Comment(req.body)
    post.comments = [...post.comments, comment._id]
    await comment.save()
    await post.save()
    return res.status(201).json(comment)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getAllPosts,
  addComment,
  getPostById
}
