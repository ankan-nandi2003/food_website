const {Router} = require('express')
const {userModel} = require('../models/userModel')

const userRouter = Router();

userRouter.post("/signup", async function (req, res){
    const {email , password , name, location} = req.body;
     await userModel.create({
      email: email,
      password: password,
      name: name,
      location: location
     })
     res.json({
      message: "User created successfully"
     })
})

module.exports = {
  userRouter
}
