const express = require("express")
const router =  express.Router()
const comicsController = require("../controllers/comicsController.js")
const validateDataMiddle= require("../middlewares/validateData.js")

router.post("/savecomics",validateDataMiddle.validateAndResponse, comicsController.postBulkComics); 

// exporting modules
module.exports = router
