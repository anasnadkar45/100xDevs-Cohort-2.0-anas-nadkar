const {User} = require('../db');
// Middleware for handling authentication

function userMiddleware(req,res,next) {
    // implementation of auth logic
    // you need to check the header and validator the admin for the admin Db
    const username = req.headers.username;
    const password = req.headers.password;
    User.findOne({
        username: username,
        password: password
    }).then(function(value){
        if(value){
            next();
        }else{
            res.status(403).json({
                msg:'user not found'
            })
        }
    })
}
module.exports = userMiddleware;