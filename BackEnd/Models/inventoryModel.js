module.exports = (sequelize,DataTypes) => {

    const inventory = sequelize.define("inventory",{
        stocks:{
            type:DataTypes.INTEGER,
            DefaultValue:0
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
        tableName:'inventory',
        timestamps: true
    })
    return inventory
}