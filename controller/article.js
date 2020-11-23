const Article = require('../model/article')

module.exports.getArticle = (req,res) => {
    res.json('You have come to the article!')
}
module.exports.getAll = async (req,res) => {
    let art = await Article.find({})
    res.json(art)
}
module.exports.getById = async (req,res) => {
    let art = await Article.find({_id: req.body.id})
    res.json(art)
}
module.exports.updateArticle = async (req, res) => {
    try {
        let fieldToUpdate = req.body
        const newArticle = await Article.findOneAndUpdate({_id:req.body._id}, fieldToUpdate)
        res.status(200).send(await {newArticle})
    }
    catch {
        res.status(500).send('Failed to update')
    }
}
module.exports.deletedArticle = async (req,res) => {
    console.log(req.body)
    try {
        let idToDelete = req.body._id
        const deletedArticle = await Article.findOneAndDelete({_id:idToDelete})
        res.status(200).send(await {deletedArticle})
    }
    catch {
        res.status(500).send('Error while trying to delete')
    }
}
