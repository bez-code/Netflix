import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http: HttpClient) { }

  baseurl = "https://api.themoviedb.org/3";
  apikey = "7bbeb0a34e48647c68f97d056316f57d";

  // bannerapidata

  bannerApiData(): Observable<any> {
    const bannerDataUrl = `${this.baseurl}/movie/popular?api_key=${this.apikey}&language=en-US&page=1`;
    return this.http.get(bannerDataUrl);
  }

  // trendingmovieapi

  trendingMovieApiData(): Observable<any> {
    const trendingMovieData = `${this.baseurl}/trending/movie/day?api_key=${this.apikey}&language=en-US&page=1`;
    return this.http.get(trendingMovieData);
  }

  // searchMovie
  getSearchMovie(data: any): Observable<any> {
    console.log(data);
    const searchMovie = `${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`;
    return this.http.get(searchMovie);
  }
  // getMovieDetails
  getMovieDetails(data: any): Observable<any> {
    const movieDetails = `${this.baseurl}/movie/${data}?api_key=${this.apikey}`;
    return this.http.get(movieDetails);
  }

  // getMovieVideo
  getMovieVideo(data: any): Observable<any> {
    const movieVideo = `${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`;
    return this.http.get(movieVideo);
  }

  // getMovieCast
  getMovieCast(data: any): Observable<any> {
    const movieCast = `${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`;
    return this.http.get(movieCast);
  }

  // action
  fetchActionMovie(): Observable<any> {
    const actionMovie = `${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`;
    return this.http.get(actionMovie)
  }

  // adventure
  fetchAdventureMovie(): Observable<any> {
    const adventureMovie = `${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`;
    return this.http.get(adventureMovie)
  }

  // animation
  fetchAnimationMovie(): Observable<any> {
    const animationMovie = `${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`;
    return this.http.get(animationMovie)
  }

  // comedy
  fetchComedyMovie(): Observable<any> {
    const comedyMovie = `${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`;
    return this.http.get(comedyMovie)
  }

  // documentry
  fetchDocumentryMovie(): Observable<any> {
    const documentryMovie = `${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99`;
    return this.http.get(documentryMovie)
  }

  // science
  fetchScienceMovie(): Observable<any> {
    const scienceMovie = `${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878`;
    return this.http.get(scienceMovie)
  }

  // thriller
  fetchThrillerMovie(): Observable<any> {
    const thrillerMovie = `${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53`;
    return this.http.get(thrillerMovie)
  }
}

