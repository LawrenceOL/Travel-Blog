const { Schema } = require('mongoose')

const Post = new Schema(
  {
    name: { type: String, required: true },
    review: { type: String, required: false },
    location: { type: String, required: true },
    image: { type: String, required: false },
    comment: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = Post