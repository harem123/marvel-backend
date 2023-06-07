const express = require("express")
const router =  express.Router()
const comicsController = require("../controllers/comicsController.js")
const validateDataMiddle= require("../middlewares/validateData.js")
const validateEtagMiddle= require("../middlewares/validateEtag.js")
router.post("/savecomics",validateDataMiddle.validateAndResponse,validateEtagMiddle.validateEtag,comicsController.postBulkComics); 

// exporting modules
module.exports = router
