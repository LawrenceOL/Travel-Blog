const mongoose = require('mongoose')
const PostSchema = require('./post')
const CommentSchema = require('./comment')

const Post = mongoose.model('post', PostSchema)
const Comment = mongoose.model('comment', CommentSchema)

module.exports = {
  Post,
  Comment
}