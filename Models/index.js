const dbconfig = require("../Config/dbconfig")

const {Sequelize,DataTypes} = require("sequelize")

const sequelize = new Sequelize (
    dbconfig.DB,
    dbconfig.USER,
    dbconfig.PASSWORD,{
        host: dbconfig.HOST,
        dialect:dbconfig.dialect,
        operatorAliases:false
    }
)

sequelize.authenticate()
.then(()=>{
    console.log("..connected")
})
.catch(()=>{
    console.log("Error:")
})

const db={}

db.Sequlize=Sequelize
db.sequelize=sequelize

db.user=require("./userModel")(sequelize,DataTypes)
db.category=require("./categoryModel")(sequelize,DataTypes)
db.doctor=require("./doctorModel")(sequelize,DataTypes,db.category)
db.medicine=require("./medicinesModel")(sequelize,DataTypes)
db.inventory=require("./inventoryModel")(sequelize,DataTypes,db.medicine)
db.orders=require("./ordersModel")(sequelize,DataTypes,db.user,db.medicine)
db.appointment=require("./appointmentsModel")(sequelize,DataTypes,db.user,db.doctor)


db.sequelize.sync({ force: false })
.then(()=>{
    console.log("Re-seync done")
})

module.exports = db

