const db = require("../Models")
const doctor = db.doctor

const createAccount = async (req,res) => {
    
    const accountData = {
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        address:req.body.address,
        qualification:req.body.qualification,
        Experince:req.body.expreince,
        password:req.body.password
    }
    const account = await doctor.create(accountData)

    res.json(200).send(account)
}

const updateAccount = async (req,res) => {

    const account = await doctor.update(req.body)

    res.json(200).send(account)
}

const deleteAccount = async (req,res) => {

    const account = await doctor.update({status:false},{where:{id:req.paramas.id}})
    
    res.json(200).send("Account Deleted !")
}

const reviewAccount = async (req,res) => {

    const account = await doctor.findOne({where:{id:req.paramas.id}})

    res.json(200).send(account)
}

module.exports = {
    createAccount,
    updateAccount,
    deleteAccount,
    reviewAccount
}