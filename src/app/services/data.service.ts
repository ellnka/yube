import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import ISearchResults from "../models/search-results/search-results.module";
import {catchError} from "rxjs/operators";
import {ISearchItem} from "../models/search-item/search-item.module";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _defaultValue: ISearchResults = {"items": []};
  private readonly _dataUrl: string = 'assets/data/yube.json';
  private _searchResultsResponse: ISearchResults;

  public _searchResultsSubject: BehaviorSubject<ISearchResults> = new BehaviorSubject(this._defaultValue);
  public readonly searchResults: Observable<ISearchResults> = this._searchResultsSubject.asObservable();

  private _sortResultsBySubject: BehaviorSubject<string> = new BehaviorSubject("date");
  public readonly sortBy: Observable<string> = this._sortResultsBySubject.asObservable();

  private _filterResultsBySubject: BehaviorSubject<string> = new BehaviorSubject("");
  public readonly filterBy: Observable<string> = this._filterResultsBySubject.asObservable();

  constructor(private http: HttpClient) {
  }

  private _handleError<T>(operation = 'operation', result?: {}) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getSearchResults() {
    this.http.get(this._dataUrl)
      .pipe(catchError(this._handleError<ISearchResults>('requestSearchResults', this._defaultValue)))
      .subscribe((data: ISearchResults) => {
        this._searchResultsSubject.next(data);
        this._searchResultsResponse = data;
      });
  }

  changeSortBy (sortBy: string) {
    this._sortResultsBySubject.next(sortBy);
  }

  compareItems(a, b) {
    {
      if ( a < b ){
        return -1;
      }
      if (  a > b ){
        return 1;
      }
      return 0;
    }
  }

  changeSortByDate () {
    this._sortResultsBySubject.next("date");
    const sortedResults: ISearchResults = { ...this._searchResultsResponse};
    sortedResults.items.sort((a: ISearchItem, b: ISearchItem) => this.compareItems(a.snippet.publishedAt, b.snippet.publishedAt) )
  }

  changeSortByCountOfViews () {
    this._sortResultsBySubject.next("countOfViews");
    const sortedResults: ISearchResults = { ...this._searchResultsResponse};
    sortedResults.items.sort((a: ISearchItem, b: ISearchItem) => this.compareItems(a.statistics.viewCount, b.statistics.viewCount))
  }

  changeFilterBy (filterBy: string) {
    console.log('filter by', filterBy);
    const filteredResponseItems: ISearchItem[] = this._searchResultsResponse.items.filter((item: ISearchItem) => item.snippet.title.toLowerCase().includes(filterBy.toLowerCase())  );
    const filteredResults: ISearchResults = { ...this._searchResultsResponse, items: filteredResponseItems};

    this._searchResultsSubject.next(filteredResults);
  }


}
