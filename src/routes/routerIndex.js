const express = require("express")
const router =  express.Router()
const comicsController = require("../controllers/comicsController.js")
const infoController = require("../controllers/infoController.js")
const validateDataMiddle= require("../middlewares/validateData.js")
const validateEtagMiddle= require("../middlewares/validateEtag.js")
router.post("/savecomics",validateDataMiddle.validateAndResponse,validateEtagMiddle.validateEtag,comicsController.postBulkComics); 
router.get("/",infoController.getInfo)
// exporting modules
module.exports = router
