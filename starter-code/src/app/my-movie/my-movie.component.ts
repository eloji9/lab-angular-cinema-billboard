import { Component, OnInit } from '@angular/core';
import { MoviesService, Movie } from '../movies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {
  movieId: string;
  movieItem: Movie;

  constructor(
    private myActivatedRouteServ: ActivatedRoute,
    private myMovieServ: MoviesService,
    private myRouterServ: Router,
  ) { }

  ngOnInit() {
    this.myActivatedRouteServ.paramMap
      .subscribe((myParams) => {
        this.movieId = myParams.get('id');
        this.movieItem = this.myMovieServ.getMovie(this.movieId);
      });
  }

  returnHome() {
    this.myRouterServ.navigateByUrl('/');
  }

}
