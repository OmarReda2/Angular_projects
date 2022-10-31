import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  constructor(public _ApiService: ApiService) { }

  moviesContainer: any;
  currentPage: number = 1;
  totalPage: any;
  searchWord: any;
  apiDownloaded: boolean = false;

  x = new Subscription();


  



  getNextPage() {
    this.currentPage++
    if (this.currentPage > this.totalPage) {
      this.currentPage = 1;
    }



    this._ApiService.getNowPlayingMovies(this.currentPage).subscribe({
      next: (data) => {
        this.moviesContainer = data.results;
        this.totalPage = data.total_pages;
      },

      error: (er) => {
        console.log(er)
      }
    })

  }




  getPrevPage() {
    this.currentPage--;

    if (this.currentPage == 0) {
      this.currentPage = this.totalPage
    }


    this._ApiService.getNowPlayingMovies(this.currentPage).subscribe({
      next: (data) => {
        this.moviesContainer = data.results;
        this.totalPage = data.total_pages;
      },

      error: (er) => {
        console.log(er)
      }
    })

  }




  getTypedPage() {
    if (this.currentPage > this.totalPage) {
      this.currentPage = this.totalPage
    }

    this._ApiService.getNowPlayingMovies(this.currentPage).subscribe({
      next: (data) => {
        this.moviesContainer = data.results;
        this.totalPage = data.total_pages;
      },

      error: (er) => {
        console.log(er)
      }
    })
  }


  
 searchMovie(){
   this._ApiService.searchMovie(this.searchWord).subscribe({
     next: (data) => {
      this.moviesContainer = data.results;
      this.totalPage = data.total_pages;
     },

     error: (er) => {
      console.log(er)
    }
   })
 }


//  searchMovie(){
//    let x = this._ApiService.searchMovie(this.searchWord);
//    console.log(x)
//  }





  ngOnInit(): void {
    this.x = this._ApiService.getNowPlayingMovies(this.currentPage).subscribe({

      next: (data) => {
        this.moviesContainer = data.results;
        this.totalPage = data.total_pages;
        this.apiDownloaded = true
      },

      error: (er) => {
        console.log(er)
      }
    })
  }


  ngOnDestroy(): void {
    this.x.unsubscribe();
  }
}



