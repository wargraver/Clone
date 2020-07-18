const key="cf7a1e8511ffc3e8e41d38d7b85cffd2"
const request={
      trending:`/trending/all/week?api_key=${key}`,
      originals:`/discover/tv?api_key=${key}&with_networks=213`,
      toprated:`/movie/top_rated?api_key=${key}`,
      action:`/discover/movie?api_key=${key}&with_genres=28`,
      comedy:`/discover/movie?api_key=${key}&with_genres=35`,
      horror:`/discover/movie?api_key=${key}&with_genres=27`,
      romantic:`/discover/movie?api_key=${key}&with_genres=10749`,
      documentaries:`/discover/movie?api_key=${key}&with_genres=99`
}
export default request
//https://api.themoviedb.org/3/movie/550?api_key=cf7a1e8511ffc3e8e41d38d7b85cffd2