module.exports = (sequelize,DataTypes,category) =>{
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
        status:{
            type:DataTypes.BOOLEAN,
            defaultValue:true
        }
    })
    doctor.associate = (category) => {
        doctor.hasOne(category,{
            forignKey:"id", as:"category"
        })
      }
    return doctor
}