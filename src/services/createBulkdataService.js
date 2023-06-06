
const getId = (string)=>{
  const sections = string.split('/');
  const lastSection = sections[sections.length - 1];
  const number = lastSection.match(/\d+/)[0];
  return number
}

const createComicRelations = (array, propertyToSearch) => array.map((object) => (
  {
   comicId: object.comicID,
   [propertyToSearch]: object[propertyToSearch]
 }));

 const createComicsData = (comicsData) => {
  const etag = comicsData.etag;
  const comicsArray = comicsData.data.results.map((comicInfo) => ({
     etag: etag,
     comicId: comicInfo.id,
     title: comicInfo.title,
     createdData: comicInfo.dates[0].date,
     imageUrl: `${comicInfo.thumbnail.path}.${comicInfo.thumbnail.extension}`
  }));
  return comicsArray ;
};

const createCreatorsData = (comicsData) => {
    const creatorsArray = comicsData.data.results.flatMap((comic) =>
      comic.creators.items.map((creatorInfo) => {
      const creatorId = getId(creatorInfo.resourceURI);
      const creator = {
        comic_id: comic.id, // Add the comicID property
        creatorId: creatorId,
        name: creatorInfo.name,
        role: creatorInfo.role,
        resource_uri: creatorInfo.resourceURI,
    };
    return creator;
  })
);
  return  creatorsArray ;
};

const createSeriesData = (comicsData) => {
  const seriesArray = comicsData.data.results.map((comic) => {
    const serieId = getId(comic.series.resourceURI)
    const serie = {
     comic_id:comic.id,
    serieId: serieId,
    name: comic.series.name,
    resource_uri: comic.series.resourceURI
  }
    return serie
});
  return  seriesArray ;
};

//const comicAndSerieRelation = createComicRelations(seriesArray,"serieId")
//const comicAndCreatorRelation = createComicRelations(creatorsArray,"creatorId")



module.exports = {
  createComicsData,
  createCreatorsData,
  createSeriesData
}