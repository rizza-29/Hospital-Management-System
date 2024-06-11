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

db.Sequelize=Sequelize
db.sequelize=sequelize

db.user=require("./userModel")(sequelize,DataTypes)
db.category=require("./categoryModel")(sequelize,DataTypes)
db.doctor=require("./doctorModel")(sequelize,DataTypes)
db.medicine=require("./medicinesModel")(sequelize,DataTypes)
db.inventory=require("./inventoryModel")(sequelize,DataTypes)
db.orders=require("./ordersModel")(sequelize,DataTypes)
db.appointment=require("./appointmentsModel")(sequelize,DataTypes)

    db.user.hasMany(db.orders,{
        foreignKey:"user_id" ,as: "Purchaser"
    });
    db.orders.belongsTo(db.user,{
        foreignKey:"user_id", as:"Purchaser"
    });

    db.user.hasMany(db.appointment,{
        foreignKey:"user_id" ,as:"appointment_creator"
    });
    db.appointment.belongsTo(db.user,{
        foreignKey:"user_id"
    });

    db.medicine.hasMany(db.orders,{
        foreignKey:"medicine_id", as:"medicine"
    });
    db.orders.belongsTo(db.medicine, {
        foreignKey:"medicine_id" ,as:"medicine"
    });

    db.medicine.hasOne(db.inventory,{
        foreignKey:"medicine_id" ,as:"Product"
    });
    db.inventory.belongsTo(db.medicine,{
        foreignKey:"medicine_id" ,as:"Product"
    });
    
    db.category.hasMany(db.doctor, {
        foreignKey:"category_id"
    });
    db.doctor.belongsTo(db.category,{
        foreignKey:"category_id"
    });

    db.doctor.hasMany(db.appointment,{
        foreignKey:"doctor_id"
    });
    db.appointment.belongsTo(db.doctor,{
        foreignKey:"doctor_id"
    });
db.sequelize.sync({ force: false })
.then(()=>{
    console.log("Re-seync done")
})

module.exports = db

