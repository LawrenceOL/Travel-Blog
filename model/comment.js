const { Schema } = require('mongoose')

const Comment = new Schema(
  {
    rating: { type: String, required: false },
    comment: { type: String, required: false },
    // postId: { PostSchema.getElementbyId, ref:'post' }
  },
  { timestamps: true }
)

module.exports = Comment