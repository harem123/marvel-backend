const createHttpError = require('http-errors')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')
const { ErrorObject } = require('../helpers/error')
const v1createServiceComic= require("../services/createComicService")

const postBulkComics = catchAsync( async (req,res,next ) => {
  const bulkArray = req.body
   try {
     createdComics= v1createServiceComic.createComics(bulkArray)
     }
      catch (error) {
      console.log(error)
      
   }
}
)
module.exports = {
   postBulkComics
}


