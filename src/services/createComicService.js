const db = require("../../models/index.js")
const comicModel = db.comic;
const creatorModel = db.creator;
const serieModel = db.serie;
const createBulkDataService = require("../services/createBulkdataService.js")

const createEntities = async (model, dataBulk) => {
    try {
      
      const createResult = await model.bulkCreate(dataBulk);
      return createResult;
    } catch (error) {
      console.log(error);
    }
  };

  const postComics = (bulkArray) => {
    const creatorsBulk = createBulkDataService.createSeriesData(bulkArray)
    saveComics(creatorsBulk)
  }

  const postCreators = (bulkArray) => {
    const creatorsBulk = createBulkDataService.createCreatorsData(bulkArray)
    saveCreators(creatorsBulk)
  }

  const postSeries = (bulkArray) => {
    const creatorsBulk = createBulkDataService.createSeriesData(bulkArray)
    saveSeries(creatorsBulk)
  }

  

  const saveComics = async (comicBulk) => {
    return createEntities(comicModel, comicBulk);
  };
  
  const saveCreators = async (creatorBulk) => {
    return createEntities(creatorModel, creatorBulk);
  };

  const saveSeries = async (serieBulk) => {
    return createEntities(serieModel, serieBulk);
  };


  module.exports = {
    
    postCreators,
    postSeries,
    postComics
    
    
 }