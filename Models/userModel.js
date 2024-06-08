module.exports = (sequelize,DataTypes) => {

    const user = sequelize.define("user",{
        name:{
            type:DataTypes.TEXT
        },
        email:{
            type:DataTypes.STRING
        },
        Phone:{
            type:DataTypes.INTEGER
        },
        Address:{
            type:DataTypes.STRING
        },
        Status:{
            type:DataTypes.BOOLEAN,
            defaultValue:true
        }
    })
    return user
}