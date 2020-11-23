const mongoose = require("mongoose")

const CommentSchema = mongoose.Schema({
    content : {type: String},
    createByDate: {type: String},
    author: { type: Object, ref: 'user' },
    post: { type: Object, ref: 'article' }
})
const Comment = mongoose.model('comments', CommentSchema,'comments');
module.exports = Comment;