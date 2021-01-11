const User = require('../model/user')

module.exports.checkUser = async (req,res) => {
    User.aggregate([
        {
            $match: {
                'local.email': req.body.username,
                'local.password': req.body.password
            }
        }
    ], (err, user) => {
        if(err)
            res.send(err)
        res.json(user)
    })
}