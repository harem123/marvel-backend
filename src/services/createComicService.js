const db = require("../../models/index.js")
const comicModel = db.comic;
const creatorModel = db.creator;
const creatorAsociateModel = db.creator_comic
const serieAsociateModel = db.serie_comic
//const creatorComicModel = db.comic-creator;
const serieModel = db.serie;
const createBulkDataService = require("../services/createBulkdataService.js")


function createComics (bulkArray) {
  postComics(bulkArray)
  postCreators(bulkArray)
  postSeries(bulkArray)
}


  const postComics = (bulkArray) => {
    const creatorsBulk = createBulkDataService.createComicsData(bulkArray)
    saveComics(creatorsBulk)
  }

  const postCreators = (bulkArray) => {
    const creatorsBulk = createBulkDataService.createCreatorsData(bulkArray)
    const creatorComicRelation = createBulkDataService.createRelations(creatorsBulk,"creator_id")
    saveCreators(creatorsBulk)
    saveCreatorAsociate(creatorComicRelation)
  }

  const postSeries = (bulkArray) => {
    const seriesBulk = createBulkDataService.createSeriesData(bulkArray)
    const comicSeriesRelation = createBulkDataService.createRelations(seriesBulk,"serie_id")
    saveSeries(seriesBulk)
    saveSerieAsociate(comicSeriesRelation)
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
  const saveCreatorAsociate = async (serieBulk) => {
    return createEntities(creatorAsociateModel, serieBulk);
  };

  const saveSerieAsociate = async (serieBulk) => {
    return createEntities(serieAsociateModel, serieBulk);
  };
 

  const createEntities = async (model, dataBulk) => {
    try {
      const createResult = await model.bulkCreate(dataBulk);
      return createResult;
    } catch (error) {
      console.log(error);
    }
  };

  module.exports = {
    
    createComics
 }