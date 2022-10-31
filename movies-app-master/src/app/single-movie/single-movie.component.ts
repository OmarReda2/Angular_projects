import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {
  singleMovieContainer: any;
  recieved:boolean = false;





  constructor(public _ApiService: ApiService,public _ActivatedRoute:ActivatedRoute) { }





  ngOnInit(): void {
    let movieId = this._ActivatedRoute.snapshot.params['x'];
    // console.log(movieId);



    this._ApiService.getSingleMovie(movieId).subscribe({
      next: (data2) => {
        // console.log(data2)
        this.singleMovieContainer = data2
        this.recieved = true
      },
      error: (err) => {
        console.log(err.message)
      }
    })
  }

}
