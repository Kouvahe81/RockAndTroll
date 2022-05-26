const  express = require("express")
const festivalDayCtrl = require("../controllers/FestivalDay");
const router = express.Router()

router.post('/createFestivalDay',festivalDayCtrl.createFestivalDay)

router.get ('/showFestivalDay/:id',festivalDayCtrl.getOneFestivalDay)

router.put('/modify/:id',festivalDayCtrl.modifyFestivalDay)

router.delete('/delete/:id',festivalDayCtrl.deleteFestivalDay)

router.get('/showAllFestivalDays', festivalDayCtrl.getAllFestivalDay)

module.exports = router