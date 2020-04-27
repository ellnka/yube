import {Component} from '@angular/core';
import {ISearchItem} from "./models/search-item/search-item.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'yube';
  public resultItems: ISearchItem[];
}
