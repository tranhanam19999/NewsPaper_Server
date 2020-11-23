const User = require('../model/user')

module.exports.getUser = (req,res) => {
    res.json('You have come to the user!')
}