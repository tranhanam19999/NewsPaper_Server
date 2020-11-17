const mongoose = require("mongoose")

const PostSchema = mongoose.Schema({
    title: {type: String},
    pictures: [{type: String}],
    content : {type: String},
    category: [{type: String}],
    date: {type: String},
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    commentonpost: [{ type: mongoose.Schema.Types.ObjectId, ref: 'comment' }]
})
const Post = mongoose.model('posts', PostSchema,'posts');
module.exports = Post;