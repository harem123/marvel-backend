const createHttpError = require('http-errors')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')
const { ErrorObject } = require('../helpers/error')
const v1createServiceComic= require("../services/createComicService")

const postBulkComics = catchAsync( async (req,res,next ) => {
  const bulkArray = req.body
   try {
     
     
     createdComics= v1createServiceComic.postSeries(bulkArray)
     }
      catch (error) {
      console.log(error)
      res.status(500).send({status:"FAILED"});
   }
}
)

module.exports = {
   postBulkComics
}


