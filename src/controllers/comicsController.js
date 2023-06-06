const createHttpError = require('http-errors')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')
const { ErrorObject } = require('../helpers/error')

const getId = (string)=>{
   const sections = string.split('/');
   const lastSection = sections[sections.length - 1];
   const number = lastSection.match(/\d+/)[0];
   return number
}

const createComicRelations = (array, propertyToSearch) => array.map((object) => ({
   comicId: object.comicID,
   [propertyToSearch]: object[propertyToSearch]
 }));

const createComicsData= (comicsData)=>{
   const etag = comicsData.etag
   
   const comicsArray = comicsData.data.results.map((comicInfo)=>{
      const comic = {
         etag:etag,
         comicId:comicInfo.id,
         title:comicInfo.title,
         createdData:comicInfo.dates[0].date,
         imageUrl:`${comicInfo.thumbnail.path}.${comicInfo.thumbnail.extension}`
        }
      return comic
   })
   
   const creatorsArray = comicsData.data.results.flatMap((comic) =>
  comic.creators.items.map((creatorInfo) => {
    const creatorId = getId(creatorInfo.resourceURI);
    const creator = {
      comicID: comic.id, // Add the comicID property
      creatorId: creatorId,
      name: creatorInfo.name,
      role: creatorInfo.role,
      resourceUri: creatorInfo.resourceURI,
    };
    return creator;
  })
);

 const seriesArray = comicsData.data.results.map((comic) => {
     const serieId = getId(comic.series.resourceURI)
     const serie = {
      comicID:comic.id,
     serieId: serieId,
     name: comic.series.name,
     resourceURI: comic.series.resourceURI
   }
     return serie
 });

   const comicAndSerieRelation = createComicRelations(seriesArray,"serieId")
   const comicAndCreatorRelation = createComicRelations(creatorsArray,"creatorId")
   return {comicAndCreatorRelation}
}

const postBulkComics = catchAsync( async (req,res,next ) => {
  const bulkArray = req.body
   try {
     comicsStructure = createComicsData(bulkArray)
     console.log(comicsStructure)
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


