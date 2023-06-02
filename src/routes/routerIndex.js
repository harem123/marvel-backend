const express = require("express")
const router =  express.Router()
const comicsController = require("../controllers/comicsController.js")


router.post("/savecomics",comicsController.postBulkComics); 


// exporting modules
module.exports = router
