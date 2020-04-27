import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  public options: FormGroup;
  public hideRequiredControl = new FormControl(false);
  public floatLabelControl = new FormControl('auto');

  constructor(private dataService: DataService, fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
  }

  ngOnInit(): void {
  }

  goSearch() {
    this.dataService.getSearchResults();
  }
}
