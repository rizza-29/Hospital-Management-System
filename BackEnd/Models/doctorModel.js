module.exports = (sequelize,DataTypes) =>{
    const doctor = sequelize.define("doctor",{
        name:{
            type:DataTypes.TEXT
        },
        email:{
            type:DataTypes.STRING
        },
        phone:{
            type:DataTypes.INTEGER
        },
        address:{
            type:DataTypes.STRING
        },
        qualification:{
            type:DataTypes.STRING
        },
        Experince:{
            type:DataTypes.INTEGER
        },
        password:{
            type:DataTypes.STRING
        },
        category_id: {
            type:DataTypes.INTEGER,
            refrences: {
                model:'category',
                key:'id'
            }
        },
        status:{
            type:DataTypes.BOOLEAN,
            defaultValue:true
        }
    },
    {
        sequelize,
        tableName:'doctor',
        timestamps: true
    })
    return doctor
}