import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss','../app/home-nav/home-nav.component.scss'],
})
export class AppComponent {
  title = 'tab_';
  ngOnInit() {
  }
}
