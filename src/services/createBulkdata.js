const comicsData = (comicData)=> {
    return {name: comicData.name,
     etag: comicData.etag,
     comic_id: comicData.comic_id,
     title: comicData.title,
     created_year:comicData.created_year,
     years_from_created:comicData.years_from_created,
     imageURl:comicData.image_url
    }
 };
 
 const seriesData = (serieData)=> {
    return {name: serieData.name,
     etag: serieData.etag,
     serie_id: serieData.serie_id,
     resourceURI:serieData.resource_uri
    }
 };
 const creatorsData = (creatorData)=> {
    return {name: creatorData.name,
     etag: creatorData.etag,
     creator_id: creatorData.serie_id,
     resourceURI:creatorData.resource_uri,
     role:creatorData.role
    }
 };