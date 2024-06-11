const db = require("../Models")

const category = db.category

const createCategory = async (req,res) => {

    const CategoryData = {
        max_salary:req.body.max_salary,
        min_salary:req.body.min_salary
    }
    const categ = category.create(CategoryData)

    res.json(200).send(categ)
}

const updateCategory = async (req,res) => {

    const categ = category.update(req.body)

    res.json(200).send(categ)
}

const deleteCategory = async (req,res) => {

    const categ = category.destroy({where:{id:req.paramas.id}})

    res.json(200).send("Category Deleted !")
}

const reviewCategory = async (req,res) => {

    const categ = category.findOne({where:{id:req.paramas.id}})

    res.json(200).send(categ)
}

module.exports = {
    createCategory,
    updateCategory,
    deleteCategory,
    reviewCategory
}