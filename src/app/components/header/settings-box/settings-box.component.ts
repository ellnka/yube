import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-settings-box',
  templateUrl: './settings-box.component.html',
  styleUrls: ['./settings-box.component.scss']
})
export class SettingsBoxComponent implements OnInit {

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

}
