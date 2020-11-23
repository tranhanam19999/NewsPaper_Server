const Comment = require('../model/comment')

module.exports.getComment = (req,res) => {
    res.json('You have come to the comment!')
}
module.exports.getAll = async (req,res) => {
    let cmt = await Comment.find({})
    res.json(cmt)
}
module.exports.getById = async (req,res) => {
    let cmt = await Comment.find({_id: req.body.id})
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
    console.log(req.body)
    try {
        let idToDelete = req.body._id
        const deletedComment = await Comment.findOneAndDelete({_id:idToDelete})
        res.status(200).send(await {deletedComment})
    }
    catch {
        res.status(500).send('Error while trying to delete')
    }
}