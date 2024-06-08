module.exports = (seuqlize,DataTypes) => {
    const medicines = seuqlize.define ("medicines",{
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
    })
    return medicines
}