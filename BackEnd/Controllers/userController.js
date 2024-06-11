const db = require ("../Models")
const user= db.user

const createAccount = async (req,res) => {

    const accountData = {
        name:req.body.name,
        email:req.body.email,
        Phone:req.body.phone,
        Address:req.body.address,
        Status:true
    }

    const account = await user.create(accountData)
    res.status(200).send(account)
}

const updateAccount = async (req,res) => {

    const account = await user.update(req.body)
    res.status(200).send(account)
}

const deleteAccount = async (req,res) => {

    await user.update({status:false},{where:{id:req.paramas.id}})
    res.status(200).send("Account Deleted !")
}

const reviewAccount = async (req,res) => {

    const account = await user.findOne({where:{id:req.params.id}})
    res.status(200).send(account)
}

// const login = async (req,res) => {

//     const body = req.body
//     getUserbyemail(body.email,(err,results))=>{
//         if(err){
//             console.log(err)
//             return
//         }
//         if(!results){
            
//         }
//     }
// }

module.exports = {
    createAccount,
    updateAccount,
    deleteAccount,
    reviewAccount
}