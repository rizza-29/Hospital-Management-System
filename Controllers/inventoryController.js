const db = require("../Models")

const inventory = db.inventory

const createInventory = async (req,res) => {

    const inventoryData = {
        Product:req.body.product
    }

    const invent = await inventory.create(inventoryData)

    res.json(200).send(invent)
}

const deleteInventory = async (req,res) => {

    await inventory.delete({where:{id:req.body.id}})

    res.json(200).send("Inventory deleted !")
}

const updateInventory = async (req,res) => {

    const invent = await inventory.update(req.body)

    res.json(200).send(invent)
}

const reviewInventory = async (req,res) => {

    const invent = await inventory.findOne({where:{id:req.body.id}})

    res.json(200).send(invent)
}

module.exports = {
    createInventory,
    deleteInventory,
    updateInventory,
    reviewInventory
}