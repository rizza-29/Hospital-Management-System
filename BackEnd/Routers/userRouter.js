const user = require("../Controllers/userController.js")

const router = require("express").Router()

router.post("/createAccount",user.createAccount)
router.delete("/deleteAccount/:id",user.deleteAccount)
router.get("/reviewAccount/:id",user.reviewAccount)
router.post("/updateAccount/:id",user.updateAccount)

module.exports = router