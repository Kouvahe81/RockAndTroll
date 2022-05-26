const  express = require("express")
const router = express.Router()
const bandCtrl = require('../controllers/Band')
const multer = require('../middleware/images-config')


//router.post('/createBand', multer,  bandCtrl.createBand)

//router.put('/modify/:id', bandCtrl.modifyBand)

//router.delete('/delete/:id', bandCtrl.deleteBand)

//router.get('/showAllBand', bandCtrl.getBand)

module.exports = router
