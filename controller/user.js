const User = require('../model/user')

module.exports.getUser = (req,res) => {
    res.json('You have come to the user!')
}
module.exports.getAllUser = async (req,res) => {
    let user = await User.find({})
    res.json(user)
}
module.exports.getById = async (req,res) => {
    let user = await User.find({_id: req.body.id})
    res.json(user)
}
module.exports.createUser = async (req, res) => {
    try {
        let user = req.body
        let user = await User.find({'local.username': req.body.local.username})
        if(user) {
            res.status(500).send('Already ton tai user')
        }
        else {
            const newUser = new User(user)
            const savedUser = await newUser.save()
            res.status(200).send({savedUser})
        }
    }
    catch {
        res.status(500).send('Failed to update')
    }
}
module.exports.updateUser = async (req, res) => {
    try {
        let fieldToUpdate = req.body
        const newUser = await User.findOneAndUpdate({_id:req.body._id}, fieldToUpdate)
        res.status(200).send(await {newUser})
    }
    catch {
        res.status(500).send('Failed to update')
    }
}
module.exports.deleteUser = async (req,res) => {
    console.log(req.body)
    try {
        let idToDelete = req.body._id
        const deletedUser = await User.findOneAndDelete({_id:idToDelete})
        res.status(200).send(await {deletedUser})
    }
    catch {
        res.status(500).send('Error while trying to delete')
    }
}