export async function fetchingMovies(
  categories = [],
  lang = "en-US",
  provider = "",
  region = "us",
  cinema = false,
  min_votes = 500,
  page = 1
) {
  const listOFCategories = [...categories];

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDEwOGRiY2EyNDVjNmY2MzRiY2M4ZWZjMjRmZjkyZiIsInN1YiI6IjY1ODBjNGI1ZGY4NmE4MDhkYWU4M2RiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LoH_Z-h_dAEYKEev9ZmXTiOnrl80R5lk6VDmfUSGtD8",
    },
  };

  let response;

  if (!listOFCategories.length) {
    if (cinema) {
      response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?language=${lang}&page=1&region=${region}`,
        options
      );
    } else {
      response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=${lang}&page=${page}&sort_by=vote_average.desc&vote_count.gte=${min_votes}&watch_region=${region}&with_watch_providers=${provider}`,
        options
      );
    }
  } else {
    response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=${lang}&page=${page}&sort_by=vote_average.desc&vote_count.gte=${min_votes}&watch_region=${region}&with_watch_providers=${provider}&with_genres=${listOFCategories.join(
        "%2C"
      )}`,
      options
    );
  }
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  console.log(resData);

  return resData;
}

export async function fetchingUpcoming(
  lang = "en-US",
  region = "us",
  page = 1
) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDEwOGRiY2EyNDVjNmY2MzRiY2M4ZWZjMjRmZjkyZiIsInN1YiI6IjY1ODBjNGI1ZGY4NmE4MDhkYWU4M2RiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LoH_Z-h_dAEYKEev9ZmXTiOnrl80R5lk6VDmfUSGtD8",
    },
  };

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=${lang}&region=${region}&page=${page}`,
    options
  );

  const resData = await response.json();

  return resData;
}

export async function fetchingGenres(lang = "en") {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDEwOGRiY2EyNDVjNmY2MzRiY2M4ZWZjMjRmZjkyZiIsInN1YiI6IjY1ODBjNGI1ZGY4NmE4MDhkYWU4M2RiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LoH_Z-h_dAEYKEev9ZmXTiOnrl80R5lk6VDmfUSGtD8",
    },
  };

  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?language=${lang}`,
    options
  );

  const resData = await response.json();

  return resData;
}
