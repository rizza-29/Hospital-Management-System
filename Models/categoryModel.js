module.exports = (sequelize,DataTypes) => {

    const category = sequelize.define("category", {

        max_salary:{
            type:DataTypes.INTEGER
        },
        min_salary:{
            type:DataTypes.INTEGER
        }
        
    })
}