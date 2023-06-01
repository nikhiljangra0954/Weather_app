// here we will do the authentication
var jwt = require('jsonwebtoken');
const authentication = async function(req, res, next) {
    // now we will check the token in the headers

    let token = req.headers.authorization
    // getting the token
    if(token){
        // if presend compare it get the id from it
        const decoded = jwt.verify(token, 'nikhil');
        // in deconde we will get the userId that we passed whie login
        console.log(decoded)
        if(decoded){
            const userID = decoded.userID
            // now send this userID to the body
            req.body.user = userID
            next()
        }else{
            res.send("Decoding of token failed")
        }
        // next()
    }else{
        res.send("Token not found in the headers")
    }
}


module.exports = {
    authentication
}