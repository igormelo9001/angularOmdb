export class MovieServiceClient{
     FIND_MOVIE_DETAILS ='http://www.omdbapi.com/?i=IMDBID&apikey=dfc3c601';

    findMovieDetails(imdbID){
       
      const url = this.FIND_MOVIE_DETAILS.replace('IMDBID' , imdbID);
      return fetch(url)
        .then(response => response.json());
      }
    

    findBatmanMovies(){
        return fetch('http://www.omdbapi.com/?s=batman&apikey=dfc3c601')
        .then(response => response.json());
    }

    findMovieByTitle(title){
        return fetch('http://www.omdbapi.com/?s=' + title + '&apikey=dfc3c601')
        .then(response => response.json());
    }

}