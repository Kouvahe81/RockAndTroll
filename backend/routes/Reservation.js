const  express = require("express")
const router = express.Router()
const reservationCtrl = require("../controllers/Reservation")
const authentification = require('../middleware/authentification')

router.post('/createFestivalDay', authentification,  reservationCtrl.createReservation)

router.get ('/showReservation/:id',reservationCtrl.deleteReservation)

router.put('/modify/:id',reservationCtrl.modifyReservation)

router.delete('/delete/:id', reservationCtrl.deleteReservation)

module.exports = router