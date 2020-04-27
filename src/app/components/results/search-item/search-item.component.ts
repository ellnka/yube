import {Component, Input, OnInit} from '@angular/core';
import {ISearchItem} from "../../../models/search-item/search-item.module";

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  @Input() item: ISearchItem;

  constructor() {
  }

  ngOnInit(): void {
  }

}
