import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from '../../service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private service: MovieApiServiceService) { }

  bannerResult: any = [];
  trendingMovieResult: any = [];
  actiongMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentryMovieResult: any = [];
  scienceMovieResult: any = [];
  thrillerMovieResult: any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingMovieData();
    this.actionMovie();
    this.adventureMovie();
    this.animationMovie();
    this.comedyMovie();
    this.documentryMovie();
    this.scienceMovie();
    this.thrillerMovie();
  }

  // bannerdata
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerresult#');
      this.bannerResult = result.results;
    });
  }

  trendingMovieData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trendingResult#');
      this.trendingMovieResult = result.results;
    });
  }

  // animationMovie
  animationMovie() {
    this.service.fetchAnimationMovie().subscribe((result) => {
      this.animationMovieResult = result.results;
    });
  }

  // adventureMovie
  adventureMovie() {
    this.service.fetchAdventureMovie().subscribe((result) => {
      this.adventureMovieResult = result.results;
    });
  }
  // comedyMovie
  comedyMovie() {
    this.service.fetchComedyMovie().subscribe((result) => {
      this.comedyMovieResult = result.results;
    });
  }
  // documentryMovie
  documentryMovie() {
    this.service.fetchDocumentryMovie().subscribe((result) => {
      this.documentryMovieResult = result.results;
    });
  }
  // siceneMovie
  scienceMovie() {
    this.service.fetchScienceMovie().subscribe((result) => {
      this.scienceMovieResult = result.results;
    });
  }
  // thrillerMovie
  thrillerMovie() {
    this.service.fetchThrillerMovie().subscribe((result) => {
      this.thrillerMovieResult = result.results;
    });
  }
  // actionMovie
  actionMovie() {
    this.service.fetchActionMovie().subscribe((result) => {
      this.actiongMovieResult = result.results;
    });
  }
}
