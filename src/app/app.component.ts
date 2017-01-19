import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.haml',
  styleUrls: [
    String('../global.scss'), 
    String('./app.component.scss')],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent { }
