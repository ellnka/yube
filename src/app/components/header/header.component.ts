import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isSettingsBoxShown: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleSettingsBox(isSettingsBoxShown: boolean) {
    this.isSettingsBoxShown = isSettingsBoxShown;
  }
}
