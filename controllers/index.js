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
const getAllComments = async (req, res) => {
  try {
    const post = await Post.findByID(id)
    const com = await post.comment
    return res.status(200).json({ com })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// Function to add a comment on a post
const addComment = async (req, res) => {
  try {
    const comment = await new Comment(req.body)
    await comment.save()
    const Post = await Post.findByID(id)
    return res.status(201).json({
      comment
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getAllPosts,
  addComment,
  getAllComments
}
