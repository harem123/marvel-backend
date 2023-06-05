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

const createComicsData= (comicsData)=>{
   const etag = comicsData.etag
   
   const comicsArray = comicsData.data.results.map((comicInfo)=>{
      const creationTimeSpan = comicInfo.dates[0].date
      const comic = {
         etag:etag,
         comicId:comicInfo.id,
         title:comicInfo.title,
         createdData:comicInfo.dates[0].date,
         creationTimeSpan:creationTimeSpan,
         imageUrl:`${comicInfo.thumbnail.path}.${comicInfo.thumbnail.extension}`
        }
      return comic
   })
   
   const creatorsArray = comicsData.data.results.flatMap((comic) =>
   comic.creators.items.map((creatorInfo) => { 
      const creatorId = getId(creatorInfo.resourceURI)
      const creator = {
      creatorId:creatorId,
      name: creatorInfo.name, 
      role: creatorInfo.role,
      resourceUri:creatorInfo.resourceURI} 
      return creator
   }
   )
 );

 const seriesArray = comicsData.data.results.map((comic) => {
     const serieId = getId(comic.series.resourceURI)
     const serie = {
     serieId: serieId,
     name: comic.series.name,
     resourceURI: comic.series.resourceURI
   }
     return serie
 });
   const comicSerieArray = (comicsObj, seriesObj) => {
      comicsObj.map((comicObj)=>{
         seriesObj.filter(serie=> serie.serieId == comicObj.id)
      })
   }
   return {creatorsArray}
}



const validateData = (data) => {
  
   return {data:data, isComplete:true}
}

const postBulkComics = catchAsync( async (req,res,next ) => {
  const bulkArray = req.body
   try {
      const comicObjects = createComicsData(bulkArray)

      console.log(comicObjects)
      const response = "respnse"
      endpointResponse({
         res,
         message: "Comics Data recieved successfully",
         body: response,
       });
   } catch (error) {
      console.log(error)
      res.status(500).send({status:"FAILED"});
   }
}
)

module.exports = {
   postBulkComics
}


