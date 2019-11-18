import { Component, OnInit } from '@angular/core';
import { MovieServiceClient } from '../services/movie.service.client';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  hello = 'hello movie search component';
  movieTitle;
  details = {};
  movies = [
  ]
  constructor(private movieServiceClient: MovieServiceClient) { }

  searchForMovie(movieTitle){
    this.movieServiceClient.findMovieByTitle(movieTitle)
    .then(res => this.movies = res.Search); 
    if(this.movies.length === 0){
      alert("nenhum filme encontrado com esse título");
    }
  }

  findMovieDetails(movie){
    this.movieServiceClient.findMovieDetails(movie.imdbID)
    .then(details => this.details = details);
  }

  ngOnInit() {
      this.movieServiceClient.findBatmanMovies()
      .then(res => this.movies = res.Search); 
  }

}
