var express = require('express');
var router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

/* GET users listing. */
router.get('/',async function(req, res, next) {
  try {
    const users = await prisma.user.findMany()
    console.log(users)
    return res.json({
      isSuccess: true,
      message: "Users Found",
      data: users
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      isSuccess: false,
      message: "Error Getting Userss",
      error: error
    })
  }
});
router.post('/', async function (req, res, next) {
  try {
    const user = await prisma.user.create({
      data: {
        name: 'Alice2',
        email: 'alice2@prisma.io',
      },
    })
    console.log(user)
    return res.json({
      isSuccess: true,
      message: "User Created",
      data: user
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      isSuccess: false,
      message: "Error Occured",
      error: error
    })
  }

});

module.exports = router;
