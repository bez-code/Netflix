import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { MovieApiServiceService } from '../../service/movie-api-service.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  constructor(private service: MovieApiServiceService) { }
  serachResult: any;
  searchForm = new FormGroup({
    'movieName': new FormControl(null)
  })
  submitForm() {
    console.log(this.searchForm.value, 'searchform#');
    this.service.getSearchMovie(this.searchForm.value).subscribe((result) => {
      console.log(result, 'searchMovie##');
      this.serachResult = result.results;
    })
  }

}
