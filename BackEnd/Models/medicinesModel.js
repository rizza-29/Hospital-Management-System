module.exports = (sequelize,DataTypes) => {
    const medicines = sequelize.define ("medicines",{
        name:{
            type:DataTypes.TEXT
        },
        price:{
            type:DataTypes.INTEGER
        },
        ingridients:{
            type:DataTypes.STRING
        },
        status:{
            type:DataTypes.BOOLEAN,
            defaultValue:true

        }
    },
    {
        sequelize,
        tableName:'medicines',
        timestamps: true
    })
    return medicines
}