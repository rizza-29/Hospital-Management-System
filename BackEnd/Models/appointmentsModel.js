module.exports = (sequelize,DataTypes) => {
    const appointments = sequelize.define("appointments",{
        time:{
            type:DataTypes.DATE
        },
        user_id:{
            type:DataTypes.INTEGER,
            refrences: {
                model:'user',
                key:'id'
            }
        },
        doctor_id: {
            type:DataTypes.INTEGER,
            refrences: {
                model:'doctor',
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
        tableName:'appointments',
        timestamps: true
    })
    return appointments
}