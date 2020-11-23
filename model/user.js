const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    fullName: {type: String},
    avatar: {type: String},
    local: {
        username: {type:String},
        password: {type:String},
    },
    createByDate: {type: String},
    roles: {type: String},
    status: {type: String}
})
const User = mongoose.model('users', UserSchema,'users');
module.exports = User;