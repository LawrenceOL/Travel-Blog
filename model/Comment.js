const { Schema } = require('mongoose')

const Comment = new Schema(
  {
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    postId: { type: Schema.Types.ObjectId, ref: 'Post', required: true }
  },
  { timestamps: true }
)

module.exports = Comment
