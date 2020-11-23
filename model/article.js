const mongoose = require("mongoose")

const PostSchema = mongoose.Schema({
    title: {type: String},
    thumbnail: {type: String},
    alt_thumbnail: {type: String},
    pictures: [{type: String}],
    breadcrumb: {type: String},
    content : {type: String},
    category: [{type: String}],
    createByDate: {type: String},
    status: {type: String},
    author: { type: Object, ref: 'user' },
    comments: [{ type: Object, ref: 'comment' }]
})
const Post = mongoose.model('articles', PostSchema,'articles');
module.exports = Post;