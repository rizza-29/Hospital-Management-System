module.exports = (sequelize,DataTypes,users,medicine) => {
    const orders = sequelize.define ("orders",{
        deliveryTime: {
            type:DataTypes.DATE
        },
        booked_at:{
            type:DataTypes.DATE,
            defaultValue:sequelize.fn('NOW')
        },
        updated_at:{
            type:DataTypes.DATE,
            defaultValue:sequelize.fn('NOW')
        }
    })

    users.associate = (orders,medicine) => {
        users.hasOne(orders,{
            foreignKey:"id" ,as: "Purchaser"
        })
        medicine.hasOne(medicine,{
            foreignKey:"id" ,as: "Purchased"
        })
    }
    return orders
}