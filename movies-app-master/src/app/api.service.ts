import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  moviesContainer:any
  moviesArray:any
  // mvCom = new MoviesComponent()

  constructor(private _HttpClient: HttpClient) { }

  getNowPlayingMovies(pageNum: number): Observable<any> {
    let response = this._HttpClient.get('https://api.themoviedb.org/3/movie/now_playing?api_key=a117cde40d3c3598e3e23d4084f510e2&language=en-US&page=' + pageNum);
    return response;
  }


  getSingleMovie(id: number): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=a117cde40d3c3598e3e23d4084f510e2&language=en-US`)
  }


  searchMovie(query:string): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/search/movie?api_key=a117cde40d3c3598e3e23d4084f510e2&language=en-US&include_adult=false&query=${query}`)
  }


  // searchMovie(query:string): any {
  //  this._HttpClient.get(`https://api.themoviedb.org/3/search/movie?api_key=a117cde40d3c3598e3e23d4084f510e2&language=en-US&include_adult=false&query=${query}`)
  //  .subscribe({
  //     next: (data) => {
  //      this.moviesContainer = data;
  //     },
 
  //     error: (er) => {
  //      console.log(er)
  //    }
  //   })

  //   this.moviesArray =  this.moviesContainer.results
  //   return this.moviesArray;
  // }

  

  



  
}