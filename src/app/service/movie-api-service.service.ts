import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http: HttpClient ) { }

  baseurl = "https://api.themoviedb.org/3";
  apikey = "7bbeb0a34e48647c68f97d056316f57d";

  // bannerapidata

  bannerApiData () : Observable<any> {
    const bannerDataUrl = `${this.baseurl}/movie/popular?api_key=${this.apikey}&language=en-US&page=1`;
    return this.http.get(bannerDataUrl);
  }

    // trendingmovieapi

  trendingMovieApiData() : Observable <any> {
    const trendingMovieData = `${this.baseurl}/trending/movie/day?api_key=${this.apikey}&language=en-US&page=1`;
    return this.http.get(trendingMovieData);
  }

  getSearchMovie(data:any): Observable <any> {
    console.log(data);

    const searchMovie = `${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`;
    return this.http.get (searchMovie);
  }
}
