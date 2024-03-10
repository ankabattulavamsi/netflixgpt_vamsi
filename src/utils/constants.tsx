export const Netflix_Logo =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const Photot_Url =
  "https://occ-0-2040-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTA0MGI4MjU3ODgwMjE4ZmJjZTVhMTVhZmQ3MWEyNCIsInN1YiI6IjY1ZDZlZDc2ZWQyYWMyMDE2MzM1MjhlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ivB32brUUMYC6aFp9zJZL0HuNDL1b0hLbNKn3_xGR6Q",
  },
};

export const Movie_Logo_URL = "https://image.tmdb.org/t/p/w400";

export const Background_Image_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "telugu", name: "Telugu" },
  { identifier: "spanish", name: "Spanish" },
];

export const MOVIES_API_KEY = "9a040b8257880218fbce5a15afd71a24";

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;

export const movieSearchAPI = "https://api.themoviedb.org/3/search/multi?";

export const trendingSetApi = "https://api.themoviedb.org/3/trending/movie/";

// "https://api.themoviedb.org/3/search/movie?query=hindi&api_key=";

export const navItems = [
  { id: 1, path: "#home", title: "Home" },
  { id: 2, path: "#schedule", title: "Schedule" },
  { id: 3, path: "#blogs", title: "Popular Movies" },
];
