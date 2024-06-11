const db = require("../Models")

const medicine = db.medicine

const createMedicine = async (req,res) => {

    const medicineData = {
        name:req.body.name,
        price:req.body.price,
        ingridients:req.body.ingridients
    }

    const medi = await medicine.create(medicineData)
    
    res.json(200).send(medi)
}

const updateMedicine = async (req,res) => {

    const medi = await medicine.update(req.body)

    res.json(200).send(medi)
}

const deleteMedicine = async (req,res) => {

    const medi = await medicine.update({status:false},{where:{id:req.body.id}})

    res.json(200).send(medi)
}

const reviewMedicine = async (req,res) => {

    const medi = await medicine.fineOne({where:{id:req.body.id}})

    res.json(200).send(medi)
}

module.exports = {
    createMedicine,
    updateMedicine,
    deleteMedicine,
    reviewMedicine
}

