import {Component, OnInit} from '@angular/core';
import ISearchResults from "../../models/search-results/search-results.module";
import {Observable} from "rxjs";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  public searchResult: Observable<ISearchResults>;
  public sortByField: Observable<string>;

  constructor(private dataService: DataService) {
    this.searchResult = this.dataService.searchResults;
    this.sortByField = this.dataService.sortBy;
  }

  ngOnInit(): void { }


}
