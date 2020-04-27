import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {ISearchItem} from "../models/search-item/search-item.module";
import ISearchResults from "../models/search-results/search-results.module";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private _dataUrl: string = 'assets/data/yube.json';

  constructor(private http: HttpClient) {
  }

  getSearchResults(): Observable<ISearchResults | {}> {
    return this.http.get(this._dataUrl).pipe(catchError(this._handleError<ISearchResults>('getSearchResults', {})));
  }

  private _handleError<T>(operation = 'operation', result?: {}) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
