const medicine = require("../Controllers/medicinesController.js")

const router = require("express").Router()

router.post("/createMedicine",medicine.createMedicine)
router.delete("/deleteMedicine/:id",medicine.deleteMedicine)
router.get("/reviewMedicine/:id",medicine.reviewMedicine)
router.post("/updateMedicine/:id",medicine.updateMedicine)

module.exports = router