const mongoose = require("mongoose")

const CommentSchema = mongoose.Schema({
    detail : {type: String},
    date: {type: String},
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'post' }
})
const Comment = mongoose.model('comments', CommentSchema,'comments');
module.exports = Comment;