const appointment = require("../Controllers/appointmentsController.js")

const router = require("express").Router()

router.post("/bookAppointment",appointment.bookAppointment)
router.post("/updateAppointment/:id",appointment.updateAppointment)
router.get("/reviewAppointment/:id",appointment.reviewAppointment)
router.delete("/cancelAppointment/:id",appointment.cancelAppointment)

module.exports = router