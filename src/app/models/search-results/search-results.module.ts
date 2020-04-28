import {ISearchItem} from "../search-item/search-item.module";

export default interface ISearchResults {
  kind?: string,
  etag?: string,
  pageInfo?: {
    totalResults: number,
    resultsPerPage: number
  }
  items: ISearchItem[] | []
}
