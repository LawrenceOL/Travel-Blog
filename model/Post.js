const { Schema } = require('mongoose')

const Post = new Schema(
  {
    name: { type: String, required: true },
    review: { type: String, required: true },
    location: { type: String, required: true },
    image: [{ type: String, required: true }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment', required: false }]
  },
  { timestamps: true }
)

module.exports = Post
