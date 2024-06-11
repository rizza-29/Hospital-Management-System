module.exports = (sequelize,DataTypes) => {
    const orders = sequelize.define ("orders",{
        deliveryTime: {
            type:DataTypes.DATE
        },
        user_id: {
            type:DataTypes.INTEGER,
            refrences: {
                model:'user',
                key:'id'
            }
        },
        medicine_id: {
            type:DataTypes.INTEGER,
            refrences: {
                model:'medicine',
                key:'id'
            }
        }
    },
    {
        sequelize,
        tableName:'orders',
        timestamps: true
    })
    return orders
}