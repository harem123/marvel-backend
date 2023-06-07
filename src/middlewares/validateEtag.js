const { catchAsync } = require('../helpers/catchAsync')
const db = require("../../models/index.js")
const etagModel = db.etag;
const comicModel = db.comic;

const validateEtag = catchAsync(async (req, res, next) => {
    const etag = req.body.etag
    try {
        const result = await comicModel.findAll({
            attributes: ['etag'],
            where: {
              etag: etag
            }
          });
        console.log(result)
        if (result.length === 0) {
            // No records found
            next()
        }
        else {
            etagModel.create({ etag: etag })
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({ status: "FAILED" });
    }
})

module.exports = {
    validateEtag
}