
const createComicsData = (comicsData) => {
  const etag = comicsData.etag;
  const comicsArray = comicsData.data.results.map((comicInfo) => {
    const year = splitYear(comicInfo.title)
    const comic = {
      etag: etag,
      comic_id: comicInfo.id,
      title: comicInfo.title,
      year: year,
      image_url: `${comicInfo.thumbnail.path}.${comicInfo.thumbnail.extension}`
    }
    return comic
  });
  return comicsArray;
};

const createCreatorsData = (comicsData) => {
  const creatorsArray = comicsData.data.results.flatMap((comic) =>
    comic.creators.items.map((creatorInfo) => {
      const creatorId = getId(creatorInfo.resourceURI);
      const creator = {
        comic_id: comic.id, // Add the comicID property
        creator_id: creatorId,
        name: creatorInfo.name,
        role: creatorInfo.role,
        resource_uri: creatorInfo.resourceURI,
      };
      return creator;
    })
  );
  return creatorsArray;
};

const createSeriesData = (comicsData) => {
  const seriesArray = comicsData.data.results.map((comic) => {
    const serieId = getId(comic.series.resourceURI)
    const serie = {
      comic_id: comic.id,
      serie_id: serieId,
      name: comic.series.name,
      resource_uri: comic.series.resourceURI
    }
    return serie
  });
  return seriesArray;
};

const getId = (string) => {
  const sections = string.split('/');
  const lastSection = sections[sections.length - 1];
  const number = lastSection.match(/\d+/)[0];
  return number
}

const createRelations = (array, propertyToSearch) => array.map((object) => (
  {
    comic_id: object.comic_id,
    [propertyToSearch]: object[propertyToSearch]
  }));

const splitYear = (title) => {
  const splitArray = title.split(" (");
  const splitSigns = splitArray[1].split(")");
  if ((!isNaN(splitSigns[0])) && (splitSigns[0] !== "undefined")) {
    // It's a number
    return splitSigns[0]
  }
}



module.exports = {
  createComicsData,
  createCreatorsData,
  createSeriesData,
  createRelations
}