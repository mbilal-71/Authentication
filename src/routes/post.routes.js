const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

router.post('/create', (req, res) => {
   
 const token = req.cookies.token
 if(!token) {
    return res.status(401).json({message: 'Unauthorized'})
 }

try {
 const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
res.json({message: 'Post created successfully'})
} catch (error) {
    console.log(error)
    return res.status(401).json({message: 'token invalid'})
}
})

module.exports = router