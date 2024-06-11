const doctor = require("../Controllers/doctorController.js")

const router = require("express").Router()

router.post("/createAccount",doctor.createAccount)
router.delete("/deleteAccount/:id",doctor.deleteAccount)
router.get("/reviewAccount/:id",doctor.reviewAccount)
router.post("/updateAccount/:id",doctor.updateAccount)

module.exports = router