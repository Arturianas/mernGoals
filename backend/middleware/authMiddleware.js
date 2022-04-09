const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');


const protect = asyncHandler( async (req, res, next) => {
    // variable only initialize
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try{
            //get token from header (bearer token)
            // The split method splits a string into an array of substrings
            // The split method returns a new array 
            token = req.headers.authorization.split(' ')[1];
            //Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            //Get user from the token only ID without the password
            req.user = await User.findById(decoded.id).select('-password');
            next();
        } catch(error){
            res.status(401);
            throw new Error('Not authorized');
        }
    }
    if(!token){
        res.status(401);
        throw new Error('Not autjorized, no token');
    }
});

module.exports = {protect}