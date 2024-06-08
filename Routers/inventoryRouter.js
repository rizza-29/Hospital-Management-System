const inventory = require("../Controllers/inventoryController.js")

const router = require("express").Router()

router.post("/createInventory",inventory.createInventory)
router.delete("/deleteInventory/:id",inventory.deleteInventory)
router.get("/reviewInventory/:id",inventory.reviewInventory)
router.post("updateInventory/:id",inventory.updateInventory)

module.exports = router