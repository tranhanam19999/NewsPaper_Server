const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    fullName: {type: String},
    avatar: {type: String},
    local: {
        username: {type:String},
        password: {type:String},
    },
    roles: {type: String},
})
const User = mongoose.model('users', UserSchema,'users');
module.exports = User;