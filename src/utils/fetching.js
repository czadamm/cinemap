export async function fetchingMovies(categories) {
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
    response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pl-PL&page=1&sort_by=vote_average.desc&vote_count.gte=5000`,
      options
    );
  } else {
    response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pl-PL&page=1&sort_by=vote_average.desc&vote_count.gte=5000&with_genres=${listOFCategories.join(
        "%"
      )}`,
      options
    );
  }
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  return resData;
}

export const randomMovie = () => {};
