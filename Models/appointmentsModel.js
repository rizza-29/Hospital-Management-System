module.exports = (sequelize,DataTypes,user,doctor) => {
    const appointments = sequelize.define("appointments",{
        time:{
            type:DataTypes.DATE
        },
        created_at:{
            type:DataTypes.DATE,
            defaultValue:sequelize.fn('NOW')
        },
        updated_at:{
            type:DataTypes.DATE,
            defaultValue:sequelize.fn('NOW')
        },
        status:{
            type:DataTypes.BOOLEAN,
            defaultValue:true
        }
    })
    appointments.associate =(user,doctor) => {
        appointments.hasOne(user,{
            foreignKey:"id" ,as:"appointment_creator"
        })
        appointments.hasOne(doctor,{
            foreignKey:"id" ,as:"apponitment_solver"
        })
    }
    return appointments
}