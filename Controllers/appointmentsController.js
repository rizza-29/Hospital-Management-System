const db = require("../Models")
const appointments = db.appointments

const bookAppointment = async (req,res) => {

    const bookingData = {
        time: new Date(),
        appointment_creater:req.userId,
        appointment_solver:req.doctorId
    }

    const Appointments = await appointments.create(bookingData)
    res.status(200).send("Appointment Booked !" + Appointments)
}

const cancelAppointment = async (req,res) => {

    const Appointments = await appointments.update({ status:false },{ where: {id: req.paramas.userId} })
    res.status(200).send("Appointment Cancelled !" + Appointments)
} 

const updateAppointment = async (req,res) => {
    const bookingData = {
        time: new Date(),
        appointment_creater:req.userId,
        appointment_solver:req.doctorId
    }
    const Appointments = await appointments.update(bookingData,{ where: {id: req.paramas.userId} })
    res.status(200).send("Appointment updated !" + Appointments)

}

const reviewAppointment = async (req,res) => {

    const Appointments = await appointments.findOne({ where: {id: req.paramas.userId }})
    res.status(200).send(Appointments)
}

module.exports = {
    bookAppointment,
    cancelAppointment,
    updateAppointment,
    reviewAppointment
}