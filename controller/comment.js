const Comment = require('../model/comment')

module.exports.getComment = (req,res) => {
    res.json('You have come to the comment!')
}
module.exports.getAll = async (req,res) => {
    let cmt = await Comment.find({})
    res.json(cmt)
}
module.exports.getById = async (req,res) => {
    let cmt = await Comment.find({post: req.body.post})
    res.json(cmt)
}
module.exports.updateComment = async (req, res) => {
    try {
        let fieldToUpdate = req.body
        const newComment = await Comment.findOneAndUpdate({_id:req.body._id}, fieldToUpdate)
        res.status(200).send(await {newComment})
    }
    catch {
        res.status(500).send('Failed to update')
    }
}
module.exports.deletedComment = async (req,res) => {
    try {
        let idToDelete = req.body._id
        const deletedComment = await Comment.findOneAndDelete({_id:idToDelete})
        res.status(200).send(await {deletedComment})
    }
    catch {
        res.status(500).send('Error while trying to delete')
    }
}
module.exports.createCmt = async (req,res) => {
    let today = new Date()
    let cmtDetails = {
        user: req.body.userId,
        post: req.body.postId,
        content: req.body.content,
        createByDate: today.getUTCDate() + '/' + today.getMonth() + '/' + today.getFullYear() 
              + ' at ' + 
              today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    }
    const newCmt = new Comment(cmtDetails)
    const savedCmt = await newCmt.save()
    res.status(200).send({ cmt: savedCmt })
}