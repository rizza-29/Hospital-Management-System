module.exports = (sequelize,DataTypes,medicine) => {

    const inventory = sequelize.define("inventory",{
        stocks:{
            type:DataTypes.INTEGER,
            DefaultValue:0
        },
        created_at:{
            type:DataTypes.DATE,
            defaultValue:sequelize.fn('NOW')
        },
        updated_at:{
            type:DataTypes.DATE,
            defaultValue:sequelize.fn('NOW')
        }
    })
    medicine.associate = (inventory) => {
        medicine.hasOne(inventory,{
            foreignKey:"id" ,as:"Product"
        })
    }
    return inventory
}