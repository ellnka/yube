import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.scss']
})
export class SettingsButtonComponent implements OnInit {

  @Output() isSettingsBoxShown = new EventEmitter<boolean>();
  private _isSettingsBoxShown: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleSettingsBox() {
    this._isSettingsBoxShown = !this._isSettingsBoxShown;
    this.isSettingsBoxShown.emit(this._isSettingsBoxShown);
  }
}
