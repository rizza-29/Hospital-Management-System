const express = require("express")
const app = express()
const cors = require("cors")

var corOptions = {
    origin:'http://localhost:4000'
}


app.use(cors(corOptions))


app.use(express.json())


app.use(express.urlencoded({ extended: true }))


const appointmentRouter = require("./Routers/appointmentRouter")
const categoryRouter = require("./Routers/categoryRouter")
const doctorRouter = require("./Routers/doctorRouter")
const inventoryRouter = require("./Routers/inventoryRouter")
const medicinesRouter = require("./Routers/medicinesRouter")
const userRouter = require("./Routers/userRouter")
const orderRouter = require("./Routers/orderRouter")


app.use("/appointment",appointmentRouter)
app.use("/category",categoryRouter)
app.use("/doctor",doctorRouter)
app.use("/inventory",inventoryRouter)
app.use("/medicines",medicinesRouter)
app.use("/user",userRouter)
app.use("/order",orderRouter)


app.listen(3000,()=>{
    console.log("Server is running on Port: ",3000)
})