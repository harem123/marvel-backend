const createHttpError = require('http-errors')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')
const { ErrorObject } = require('../helpers/error')

const validateData = (toValidateData) => {

  const validationArr = toValidateData.data.results.map((comic) => comic.hasOwnProperty('id') && comic.hasOwnProperty('title'))
  const isValid = validationArr.every((comic) => comic === true)
  console.log(isValid)
  return { validatedData: "toValidateData", isComplete: isValid }
}

const validateAndResponse = catchAsync(async (req, res, next) => {
  const bulkArray = req.body
  try {
    if (validateData(bulkArray).isComplete) {
      const response = { etag: bulkArray.etag }
      endpointResponse({
        res,
        message: "Comics Data recieved successfully",
        body: response,
      });
      next();
    } else {
      const error = new createHttpError.BadRequest(
        `Invalid JSON}`); 
        next(error)
    }
  } catch (error) {

    const httpError = createHttpError(
      error.statusCode || 500,
      `[comics - POST]: ${error.message}`,
    )
    return next(httpError)
  }
})

module.exports = {
  validateAndResponse
}