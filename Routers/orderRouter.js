const order = require("../Controllers/ordersController.js")

const router = require("express").Router()

router.post("/bookOrder",order.bookOrder)
router.delete("/cancelOrder/:id",order.cancelOrder)
router.get("/reviewOrder/:id",order.reviewOrder)
router.post("/updateOrder/:id",order.updateOrder)

module.exports = router