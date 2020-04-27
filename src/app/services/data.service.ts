import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import ISearchResults from "../models/search-results/search-results.module";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _defaultValue: ISearchResults = {"items": []};
  private readonly _dataUrl: string = 'assets/data/yube.json';

  private _searchResultsSubject: BehaviorSubject<ISearchResults> = new BehaviorSubject(this._defaultValue);
  public readonly searchResults: Observable<ISearchResults> = this._searchResultsSubject.asObservable();

  constructor(private http: HttpClient) {
  }

  getSearchResults() {
    this.http.get(this._dataUrl)
      .pipe(catchError(this._handleError<ISearchResults>('requestSearchResults', this._defaultValue)))
      .subscribe((data: ISearchResults) => {
        this._searchResultsSubject.next(data);
      });
  }

  private _handleError<T>(operation = 'operation', result?: {}) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }


}
