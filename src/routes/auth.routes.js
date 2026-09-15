const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.controller')

router.post('/register', authController.registerUser)
router.get('/test', (req,res)=>{
   console.log(req.cookies);
   res.json({
    message: 'test',
    cookie: req.cookies
   })
})
module.exports = router