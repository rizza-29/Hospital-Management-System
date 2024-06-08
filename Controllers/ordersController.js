const db = require("../Models")

const orders = db.orders

const bookOrder = async (req,res) => {

    const orderData = {
        purchaser:req.body.booked_by,
        purchased:req.body.product,
        deliveryTime:time
    }

    const order = orders.create(orderData)
    
    res.json(200).send(order)
}

const cancelOrder = async (req,res) => {

    await orders.update ({status:false},{where:{id:req.paramas.id}})

    res.json(200).send("Order Cancelled !")
}

const updateOrder = async (req,res) => {

    const order = await orders.update(req.body)

    res.json(200).send(order)
}

const reviewOrder = async (req,res) => {

    const order = await orders.findOne({where:{id:req.body.paramas}})

    res.json(200).send(order)
}

module.exports = {

    bookOrder,
    cancelOrder,
    updateOrder,
    reviewOrder
}

