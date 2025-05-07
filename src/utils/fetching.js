const authKey = process.env.TMDB_API_KEY;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: authKey,
  },
};

export async function fetchingMovies(
  categories = [],
  lang = 'pl-PL',
  provider = '',
  region = 'pl',
  cinema = false,
  upcoming = false,
  adult = false,
  min_votes = 500,
  page = 1
) {
  const listOFCategories = [...categories];

  let response;

  if (!listOFCategories.length) {
    if (cinema) {
      response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?language=${lang}&page=1&region=${region}`,
        options
      );
    } else if (upcoming) {
      response = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?language=${lang}&region=${region}&page=${page}`,
        options
      );

      // console.log('upcoming');
    } else {
      response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=${adult}&include_video=false&language=${lang}&page=${page}&sort_by=vote_average.desc&vote_count.gte=${min_votes}&watch_region=${region}&with_watch_providers=${provider}`,
        options
      );
    }
  } else {
    response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=${lang}&page=${page}&sort_by=vote_average.desc&vote_count.gte=${min_votes}&watch_region=${region}&with_watch_providers=${provider}&with_genres=${listOFCategories.join(
        '%2C'
      )}`,
      options
    );
  }

  const resData = await response.json();

  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }

  // console.log(resData);

  return resData;
}

export async function fetchingByTitle(title, lang = 'pl-PL', adult = false) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=${adult}&language=${lang}&page=1`,
    options
  );

  const resData = await response.json();

  return resData;
}

export async function fetchingMovie(
  id,
  lang = 'pl',
  region = 'pl-PL',
  country = 'PL'
) {
  const movie = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=${lang}`,
    options
  );

  const credits = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits`,
    options
  );

  const images = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?include_image_language=${lang}&language=${region}`,
    options
  );

  const releases = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/release_dates`,
    options
  );

  const movieData = await movie.json();
  const creditsData = await credits.json();
  const imagesData = await images.json();
  const releasesData = await releases.json();

  // console.log(releasesData);

  let filteredReleases;
  let certification = [{ certification: 'NA' }];

  if (releasesData.results.length) {
    filteredReleases = releasesData.results.filter(
      (result) => result.iso_3166_1 === country
    );

    if (filteredReleases.length) {
      const filteredCertification = filteredReleases[0].release_dates.filter(
        (release) => release.certification !== ''
      );

      if (filteredCertification.length) {
        certification = filteredCertification;
      }
      // console.log('certification', certification);
    }
  }

  // console.log(certification);

  const resData = {
    data: movieData,
    credits: creditsData,
    images: imagesData,
    certification: certification[0].certification,
  };

  // console.log(resData);

  return resData;
}

export async function fetchingGenres(lang = 'pl-PL') {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?language=${lang}`,
    options
  );

  const resData = await response.json();

  return resData;
}
