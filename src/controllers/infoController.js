const createHttpError = require('http-errors')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')
const { ErrorObject } = require('../helpers/error')
const v1createServiceComic= require("../services/createComicService")

const getInfo = catchAsync( async (req,res,next ) => {
  const bulkArray = req.body
   try {
    const error = new createHttpError.BadRequest(
        `Invalid JSON}`
    
    ); next(error)
     }
      catch (error) {
        
        const httpError = createHttpError(
            error.statusCode,
            `[comics - GET]: ${error.message}`,
          )
          return next(httpError)
   }
}
)
module.exports = {
   getInfo
}