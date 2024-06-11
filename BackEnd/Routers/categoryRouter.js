const category = require("../Controllers/categoryController.js")

const router = require("express").Router()

router.post("/createCategory",category.createCategory)
router.delete("/deleteCategory/:id",category.deleteCategory)
router.get("/reviewCategory/:id",category.reviewCategory)
router.post("/updateCategory",category.updateCategory)

module.exports = router