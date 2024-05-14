export async function fetchingMovies(
  categories = [],
  lang = "en-US",
  provider = "",
  region = "",
  cinema = false,
  page = 1
) {
  const listOFCategories = categories.map((category) => category.value);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDEwOGRiY2EyNDVjNmY2MzRiY2M4ZWZjMjRmZjkyZiIsInN1YiI6IjY1ODBjNGI1ZGY4NmE4MDhkYWU4M2RiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LoH_Z-h_dAEYKEev9ZmXTiOnrl80R5lk6VDmfUSGtD8",
    },
  };

  let response;

  if (!categories.length) {
    if (cinema) {
      response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?language=${lang}&page=1&region=${region}`,
        options
      );
    } else {
      response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=${lang}&page=${page}&sort_by=vote_average.desc&vote_count.gte=500&watch_region=${region}&with_watch_providers=${provider}`,
        options
      );
    }
  } else {
    response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=${lang}&page=${page}&sort_by=vote_average.desc&vote_count.gte=500&watch_region=${region}&with_watch_providers=${provider}&with_genres=${listOFCategories.join(
        "%"
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

async function getStreamPlatforms(id) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDEwOGRiY2EyNDVjNmY2MzRiY2M4ZWZjMjRmZjkyZiIsInN1YiI6IjY1ODBjNGI1ZGY4NmE4MDhkYWU4M2RiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LoH_Z-h_dAEYKEev9ZmXTiOnrl80R5lk6VDmfUSGtD8",
    },
  };

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/watch/providers`,
    options
  );

  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  return resData;
}
